import { Pixel } from '../../../src/resources/pixel/pixel.model';
import { NonBinaryValueError } from '../../../src/resources/pixel/pixel.exceptions';

describe('Pixel', () => {
  describe('constructor', () => {
    it('instantiate a new pixel object with correct indeces and value', () => {
      const pixel = new Pixel(1, 2, 0);

      expect(pixel.getRowIndex()).toBe(1);
      expect(pixel.getColumnIndex()).toBe(2);
      expect(pixel.getValue()).toBe(0);
    });

    it('instantiate a new white pixel', () => {
      const pixel = new Pixel(1, 2, 1);

      expect(pixel.getRowIndex()).toBe(1);
      expect(pixel.getColumnIndex()).toBe(2);
      expect(pixel.getValue()).toBe(1);
      expect(pixel.isWhite()).toBeTruthy()
    });

    it('non-binary value must thrown an error', () => {
      try {
        new Pixel(1, 1, 3);
      } catch (err) {
        expect(err).toBeInstanceOf(NonBinaryValueError);
      }
   });
  });
});