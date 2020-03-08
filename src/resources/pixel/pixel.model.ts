import { NonBinaryValueError } from './pixel.exceptions';

class Pixel {
  private _rowIndex: number;
  private _columnIndex: number;
  private _value: number;
  private _isWhite = false;

  constructor (rowIndex: number, columnIndex: number, value: number) {
    if (value !== 0 && value !== 1) {
      throw new NonBinaryValueError();
    }

    if (value === 1) {
      this._isWhite = true;
    }

    this._rowIndex = rowIndex;
    this._columnIndex = columnIndex;
    this._value = value;
  };

  public getRowIndex(): number {
    return this._rowIndex;
  }

  public getColumnIndex(): number {
    return this._columnIndex;
  }

  public getValue(): number {
    return this._value;
  }

  public isWhite(): boolean {
    return this._isWhite;
  }
};

export { Pixel };