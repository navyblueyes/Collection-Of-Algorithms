import { oddOrEven } from './oddOrEven';

  describe('Testing Problem 024 ...', () => {
    it("Inserting 5; expecting 'odd'", () => {
      expect(oddOrEven(5)).toEqual('odd');
    });
    it("Inserting 8; expecting 'even'", () => {
      expect(oddOrEven(8)).toEqual('even');
    });
    it("Inserting q; expecting 'not a digit'", () => {
      expect(oddOrEven('q')).toEqual(expect.stringContaining('not a digit'));
    });
  });
