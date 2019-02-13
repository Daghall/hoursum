const expect = require("chai").expect;

import hourSum from "../hoursum.js";

describe("Hour summation", () => {
  it("handles empty inputs", () => {
    expect(hourSum(null, undefined)).to.equal("0:00");
  });

  it("handles empty first argument", () => {
    expect(hourSum(null, "1:23")).to.equal("1:23");
  });

  it("handles empty second argument", () => {
    expect(hourSum("3:21", "")).to.equal("3:21");
  });

  it("handles bogus input", () => {
    expect(hourSum(1337, "I'm a cake")).to.equal("0:00");
  });

  it("handles only hours", () => {
    expect(hourSum("1", "2")).to.equal("3:00");
  });

  it("handles minutes", () => {
    expect(hourSum("0:14", "0:47")).to.equal("1:01");
  });

  it("handles seconds", () => {
    expect(hourSum("0:01:30", "0:00:31")).to.equal("0:02:01");
  });

  it("handles mixed input", () => {
    expect(hourSum("3", "1:23:45")).to.equal("4:23:45");
  });

  it("handles large hours", () => {
    expect(hourSum("549:29:00", "450:30:59")).to.equal("999:59:59");
  });
});
