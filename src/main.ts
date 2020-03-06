import * as readline from 'readline';
import { Bitmap } from './resources/bitmap/bitmap.model';
import { Pixel } from './resources/pixel/pixel.model';
import { once } from 'events';

(async function run() {
  const inputReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });
  
  let numberOfTestCases;
  let currentBitmap: Bitmap;
  const bitmapList: Bitmap[] = [];
  let currentBitmapRow = 1;

  inputReader.on('line', (currentLine) => {
    // if number of test still not set, so it's first line
    if (!numberOfTestCases) {
      numberOfTestCases = currentLine.trim();
      return;
    }

    // if bitmap is not instantiated, it should instantiate a new bitmap
    if (!currentBitmap) {
      const [ numberOfRows, numberOfColumns ] = currentLine.split(' ');
      currentBitmap = new Bitmap(parseInt(numberOfRows), parseInt(numberOfColumns));
      bitmapList.push(currentBitmap);
      return;
    }

    //break line means a new test case
    if (!currentLine) {
      currentBitmap = null;
      currentBitmapRow = 1;
      return;
    }
    
    const rowValues = currentLine.split("");
    
    rowValues.forEach((rowValue, index) => 
      currentBitmap.addPixel(new Pixel(currentBitmapRow, (index + 1), parseInt(rowValue)))
    );

    currentBitmapRow += 1;
  });

  await once(inputReader, 'close');

  bitmapList.forEach(bitmap => {
    const pixelMap = bitmap.getPixelMap();
    for (let rowIndex = 1; rowIndex <= bitmap.getNumberOfRows(); rowIndex ++) {
      console.log(
        pixelMap
          .filter(p => p.getRowIndex() === rowIndex)
          .map((pixel) => {
            return bitmap.getDistanceFromNearestWhitePixel(pixel);
          })
          .join('')
      );
    }
    console.log("\n")
  });
})();