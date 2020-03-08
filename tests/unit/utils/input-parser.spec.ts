import InputParser from '../../../src/utils/input-parser';

describe('InputParser', () => {
  describe('appendInputLine', () => {
    it('append all lines in correct format but should not contains first line', () => {
      const parser = new InputParser();

      parser.appendInputLine('9');
      parser.appendInputLine('2 2');
      parser.appendInputLine('10');
      parser.appendInputLine('01');
      parser.appendInputLine('');

      expect(parser.getPlainInput()).toBe('2,2-10-01*');
      expect(parser.getPlainInput()).not.toContain('9');
    });
  });

  describe('convertInputToBitmaps', () => {
    it('return a bitmap array based on user input', () => {
      const parser = new InputParser();

      parser.appendInputLine('1');
      parser.appendInputLine('2 2');
      parser.appendInputLine('10');
      parser.appendInputLine('01');

      const bitmaps = parser.convertInputToBitmaps();

      expect(bitmaps).toHaveLength(1);
      expect(bitmaps[0].getNumberOfRows()).toBe(2);
      expect(bitmaps[0].getNumberOfColumns()).toBe(2)
      expect(bitmaps[0].getPixelMap()).toHaveLength(4);
    });
    it('number of test cases does not match with provided input, must thrown an error', () => {
      const parser = new InputParser();

      parser.appendInputLine('2');
      parser.appendInputLine('2 2');
      parser.appendInputLine('10');
      parser.appendInputLine('01');

      try {
        parser.convertInputToBitmaps()
      } catch (err) {
        expect(err.message).toBe('Number of tests cases found does not match with first line value');
      }
    });
  });
});