import { describe, it, expect } from "vitest";
import { fizzBuzz } from "../src/fizzBuzz";

describe("fizzBuzz", () => {
  it("returns the number as a string for non-multiples", () => {
    expect(fizzBuzz(1)).toBe("1");
    expect(fizzBuzz(2)).toBe("2");
  });

  it("returns Fizz for multiples of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it("returns Buzz for multiples of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("returns FizzBuzz for multiples of 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });
});

