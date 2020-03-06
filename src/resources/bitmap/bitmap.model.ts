import { Pixel } from '../pixel/pixel.model';
import { OutOfBoundariesError } from './bitmap.exceptions';

class Bitmap {
  private _pixelMap: Pixel[];
  private _numberOfRows: number;
  private _numberOfColumns: number;

  constructor (numberOfRows: number, numberOfColumns: number) {
    this._numberOfRows = numberOfRows;
    this._numberOfColumns = numberOfColumns;
    this._pixelMap = [];
  };

  public getNumberOfRows(): number {
    return this._numberOfRows;
  };

  public getNumberOfColumns(): number {
    return this._numberOfColumns;
  };

  public addPixel (pixel: Pixel) {
    if (pixel.getColumnIndex() > this._numberOfColumns || pixel.getRowIndex() > this._numberOfRows) {
      throw new OutOfBoundariesError(this, pixel);
    }

    this._pixelMap.push(pixel);
  };

  public getPixelMap(): Pixel[] {
    return [ ...this._pixelMap ];
  }

  public getDistanceFromNearestWhitePixel(fromPixel: Pixel): number {
    if (fromPixel.isWhite()) {
      return 0;
    }

    return this._pixelMap
      .filter(pixel => pixel.isWhite())
      .reduce((minValue, whitePixel) => {
        const distance = Math.abs(whitePixel.getRowIndex() - fromPixel.getRowIndex()) + Math.abs(whitePixel.getColumnIndex() - fromPixel.getColumnIndex())
        minValue = Math.min(minValue, distance);
        return minValue;
      }, Math.max(this._numberOfRows, this._numberOfColumns)); //distance will never be bigger than bitmap boundaries
  }
};

export { Bitmap };