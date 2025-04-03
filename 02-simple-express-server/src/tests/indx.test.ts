import { describe, expect, test, it } from 'vitest';
import request, { Response } from "supertest";
import app from '../app';

//testing sum
describe("POST /sum", () => {
  //test 1
  it("should return the sum of two numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: -11,
      b: 2
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(-9);
  });

  //test 2
  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app).post("/sum").send({});
    expect(res.statusCode).toBe(411);
  });
});

//testing subtract
describe("POST /subtract", () => {
  //test 1
  it("should return subtract of two numbers", async () => {
    const res: Response = await request(app).post("/subtract").send({
      a: 11,
      b: -11
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(22);
  });

  //test 2
  it("should return 411 if no inputs are provided", async () => {
    const res: Response = await request(app).post("/subtract").send({});

    expect(res.statusCode).toBe(411);
  });
});

//testing multiply
describe("POST /multiply", () => {
  //test 1
  it("should return multiply of two numbers", async () => {
    const res: Response = await request(app).post("/multiply").send({
      a: 11,
      b: -11
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(-121);
  });

  //test 2
  it("should return 411 if no inputs are provided", async () => {
    const res: Response = await request(app).post("/multiply").send({});

    expect(res.statusCode).toBe(411);
  });
});

//testing subtract
describe("POST /divide", () => {
  //test 1
  it("should return divide of two numbers", async () => {
    const res: Response = await request(app).post("/divide").send({
      a: 11,
      b: -11
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(-1);
  });

  //test 2
  it("should return 411 if no inputs are provided", async () => {
    const res: Response = await request(app).post("/divide").send({});

    expect(res.statusCode).toBe(411);
  });
});