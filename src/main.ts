import * as readline from 'readline';
import InputParser from './utils/input-parser';
import { once } from 'events';

(async function run() {
  const parser = new InputParser();
  const inputReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  inputReader.on('line', (line) => {
    parser.appendInputLine(line);
  });

  await once(inputReader, 'close');
  const bitmapList = parser.convertInputToBitmaps();

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