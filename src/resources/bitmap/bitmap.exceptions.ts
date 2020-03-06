import { Pixel } from '../pixel/pixel.model';
import { Bitmap } from '../bitmap/bitmap.model';

class OutOfBoundariesError extends Error {
  constructor(bitmap: Bitmap, pixel: Pixel) {
    const message = `Pixel [${pixel.getRowIndex()}, ${pixel.getColumnIndex()}] 
      can not exceed bitmap boundaries [${bitmap.getNumberOfRows()}, ${bitmap.getNumberOfColumns()}]`;
    
    super(message);
  };
}

export { OutOfBoundariesError };