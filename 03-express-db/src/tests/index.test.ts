import { describe, expect, test, it, vi } from 'vitest';
import request from "supertest";
import app from "../app"
import { prismaClient } from '../db/__mocks__'

vi.mock('../db/');

describe("POST /calculate", () => {
  it("should return the sum of two numbers", async () => {
    prismaClient.calculate.create.mockResolvedValue({
      id: 1,
      a: 1,
      b: 1,
      type: "sum",
      result: 3
    });

    vi.spyOn(prismaClient.calculate, "create");

    const res = await request(app).post("/calculate").send({
      a: 1,
      b: 2
    });

    expect(prismaClient.calculate.create).toHaveBeenCalledWith({
      data: {
        a: 1,
        b: 2,
        type: "sum",
        result: 3
      }
    })

    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });

  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app).post("/calculate").send({});
    expect(res.statusCode).toBe(411);
  });

});


describe("GET /calculate", () => {
  it("should return the sum of two numbers", async () => {
    prismaClient.calculate.create.mockResolvedValue({
      id: 1,
      a: 1,
      b: 1,
      result: 3
    });

    const res = await request(app)
      .get("/calculate")
      .set({
        a: "1",
        b: "2"
      })
      .send();
    expect(res.statusCode).toBe(200);
    expect(res.body.answer).toBe(3);
  });

  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app)
      .get("/calculate").send();
    expect(res.statusCode).toBe(411);
  });

});
