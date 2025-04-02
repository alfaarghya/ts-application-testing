import { describe, expect, it } from "@jest/globals";
import { divide, multiply, subtract, sum } from "..";

//test sum function
describe('test sum', () => {
  it('should sum 1 + 2 correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should sum negative number correctly', () => {
    expect(sum(-1, -10)).toBe(-11);
  });

  it('should sum -1 + 2 correctly', () => {
    expect(sum(-1, 2)).toBe(1);
  });
});

//test subtract function
describe('test subtract', () => {
  it('should subtract 2-1 correctly', () => {
    expect(subtract(2, 1)).toBe(1);
  });
  it('should subtract negative numbers correctly', () => {
    expect(subtract(-1, -10)).toBe(9);
  });
  it('should subtract -1 -1 correctly', () => {
    expect(subtract(-1, -1)).toBe(0);
  });
})

//test multiply function
describe('test multiply', () => {
  it('should multiply 2*1 correctly', () => {
    expect(multiply(2, 1)).toBe(2);
  });
  it('should multiply negative numbers correctly', () => {
    expect(multiply(-11, -10)).toBe(110);
  });
  it('should multiply -5 * 8 correctly', () => {
    expect(multiply(-5, 8)).toBe(-40);
  });
})

//test divide function
describe('test divide', () => {
  it('should divide 2/1 correctly', () => {
    expect(divide(2, 1)).toBe(2);
  });
  it('should divide negative numbers correctly', () => {
    expect(divide(-11, -10)).toBe(1.1);
  });
  it('should divide -40 * 8 correctly', () => {
    expect(divide(-40, 8)).toBe(-5);
  });
})