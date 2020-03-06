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
  describe('getDistanceFromNearestWhitePixel', () => {
    it('return lowest distance from a white pixel', () => {
      const bitmap = new Bitmap(1, 4);
      const pixel1 = new Pixel(1, 1, 0);
      const pixel2 = new Pixel(1, 2, 0);
      const pixel3 = new Pixel(1, 3, 0);
      const pixel4 = new Pixel(1, 4, 1);
      
      bitmap.addPixel(pixel1);
      bitmap.addPixel(pixel2);
      bitmap.addPixel(pixel3);
      bitmap.addPixel(pixel4);
      
      expect(bitmap.getDistanceFromNearestWhitePixel(pixel1)).toBe(3);
      expect(bitmap.getDistanceFromNearestWhitePixel(pixel2)).toBe(2);
      expect(bitmap.getDistanceFromNearestWhitePixel(pixel3)).toBe(1);
      expect(bitmap.getDistanceFromNearestWhitePixel(pixel4)).toBe(0);
    });
  });
});