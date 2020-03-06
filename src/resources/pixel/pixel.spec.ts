import { Pixel } from './pixel.model';
import { NonBinaryValueError } from './pixel.exceptions';

describe('Pixel', () => {
  describe('constructor', () => {
    it('instantiate a new pixel object with correct indeces and value', () => {
      const pixel = new Pixel(1, 2, 0);

      expect(pixel.getRowIndex()).toBe(1);
      expect(pixel.getColumnIndex()).toBe(2);
      expect(pixel.getValue()).toBe(0);
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