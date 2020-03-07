import { Bitmap } from '../resources/bitmap/bitmap.model';
import { Pixel } from '../resources/pixel/pixel.model';
class InputParser {
  private _userInput: string;
  private _numberOfTestCases: number;
  
  constructor () {
    this._userInput = '';
  }

  public appendInputLine(inputLine) {
    inputLine = inputLine.trim();

    //empty string is considered as break line
    if (inputLine === '') {
      //break lines are represented by `*`
      this._userInput += '*';
      return;
    }

    //if no number of test cases is set, so input will be considered as first line
    if (!this._numberOfTestCases) {
      this._numberOfTestCases = Number(inputLine);
      return;
    }

    //input that contains empty in between numbers will determine bitmap boundaries
    if (inputLine.includes(' ')) {
      const [ numberOfRows, numberOfColumns ] = inputLine.split(' ');
      this._userInput += `${numberOfRows},${numberOfColumns}`;
      return;
    }

    //any other case will be considered as bitmap rows
    this._userInput += `-${inputLine}`;
  }

  public getPlanInput(): string {
    return this._userInput;
  }

  public convertInputToBitmaps(): Bitmap[] {
    const bitmaps: Bitmap[] = [];

    const testCases = this._userInput.split('*');

    if (testCases.length !== this._numberOfTestCases) {
      throw new Error('Number of tests cases found does not match with first line value');
    }

    for (const testCase of testCases) {
      const bitmapRows = testCase.split('-');
      const [ numberOfRows, numberOfColumns ] = bitmapRows[0].split(',');
      const bitmap = new Bitmap(Number(numberOfRows), Number(numberOfColumns));
      
      bitmapRows.slice(1).forEach((row, rowIndex) => {
        const rowValues = row.split("");
        
        rowValues.forEach((rowValue, columnIndex) => 
          bitmap.addPixel(new Pixel(Number(rowIndex + 1), (columnIndex + 1), parseInt(rowValue)))
        ); 
      })

      bitmaps.push(bitmap);
    }

    return bitmaps;
  }
}

export default InputParser;