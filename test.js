import { expect } from "chai";
import { letterCombinations } from "./letterCombinations.js";

describe("letterCombinations", () => {
  it('should return ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] for "23"', () => {
    const result = letterCombinations("23");
    expect(result).to.deep.equal(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
  });

  it("should return [] for empty input", () => {
    const result = letterCombinations("");
    expect(result).to.deep.equal([]);
  });

  it('should return ["a", "b", "c"] for "2"', () => {
    const result = letterCombinations("2");
    expect(result).to.deep.equal(["a", "b", "c"]);
  });
});
