import { beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import app from "../app";
import resetDb from "./helpers/reset-db";

describe("POST /calculate", () => {

  //clear db before running the tests
  beforeAll(async () => {
    console.log("clearing db");
    await resetDb();
  });


  it("should add two numbers", async () => {
    const { status, body } = await request(app).post('/calculate').send({
      a: 1,
      b: 2
    })
    expect(status).toBe(200);
    expect(body).toEqual({ answer: 3, id: expect.any(Number) });
  });
})