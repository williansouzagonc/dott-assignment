import { Bitmap } from './bitmap.model';
import { Pixel } from '../pixel/pixel.model';
import { OutOfBoundariesError } from './bitmap.exceptions';

describe('Bitmap', () => {
  describe('constructor', () => {
    it('instantiate a new bitmap object with correct rows/columns sizes', () => {
      const bitmap = new Bitmap(1,2);

      expect(bitmap.getNumberOfRows()).toBe(1);
      expect(bitmap.getNumberOfColumns()).toBe(2);
    });
  });
  describe('addPixel', () => {
    it('add pixel to pixelMap', () => {
      const bitmap = new Bitmap(1,1);
      
      bitmap.addPixel(new Pixel(1, 1, 1));
      
      expect(
        bitmap.getPixelMap().find(pixel => 
          pixel.getRowIndex() === 1 &&
          pixel.getColumnIndex() === 1 &&
          pixel.getValue() === 1
        )
      ).toBeDefined();
    });

    it('pixel out of bitmap boundaries must throw an error', () => {
      const bitmap = new Bitmap(1,1);
      
      try {
        bitmap.addPixel(new Pixel(2, 2, 1));
      } catch (err) {
        expect(err).toBeInstanceOf(OutOfBoundariesError);
      }
    });
  });
});