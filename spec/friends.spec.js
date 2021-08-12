const { expect } = require("chai");
const monica = require("../friends/monica.js");
const phoebe = require("../friends/phoebe.js");

describe("monica", () => {
  describe("cook", () => {
    it("Return false when given empty string.", () => {
      const input = ""
      const actual = monica.cook(input)
      expect(actual).to.be.false
    });
    it("Return new string when given non empty string.", () => {
      const input = "chicken"
      const expected = "professionally cooked chicken"
      const actual = monica.cook(input)
      expect(actual).to.equal(expected);
    });
  });
});

describe("phoebe", () => {
  describe("sing", () => {
    it("Return 'smelly cat' when sing invoked with no arguments.", () => {
      const expected = "smelly cat"
      const actual = phoebe.sing()
      expect(actual).to.equal(expected);
    });
    it("Return 'I don't feel like it' when sing invoked with bad aura.", () => {
      const input = true
      const expected = "I don't feel like it"
      const actual = phoebe.sing(input)
      expect(actual).to.equal(expected);
    });
  });
});