import express, { json, Request, Response } from "express";
import { z } from "zod";

const app = express();

app.use(express.json());

const Input = z.object({
  a: z.number(),
  b: z.number(),
});

//sum route
app.post("/sum", async (req: Request, res: Response) => {
  try {
    const validator = Input.safeParse(req.body);
    if (!validator.success) {
      res.status(411).json({
        message: validator.error.errors.map((err) => err.path + " " + err.message).join(", ")
      });
      return;
    }

    const { a, b } = validator.data;
    const answer = a + b;

    res.status(200).json({
      message: a + "+" + b,
      answer
    });
    return;
  } catch (error) {
    res.status(500).json({
      message: "Internal server error, please try again later",
      error
    });
    return;
  }
});

//subtract route
app.post("/subtract", async (req: Request, res: Response) => {
  try {
    const validator = Input.safeParse(req.body);
    if (!validator.success) {
      res.status(411).json({
        message: validator.error.errors.map((err) => err.path + " " + err.message).join(", ")
      });
      return;
    }

    const { a, b } = validator.data;
    const answer = a - b;

    res.status(200).json({
      message: a + "-" + b,
      answer
    });
    return;
  } catch (error) {
    res.status(500).json({
      message: "Internal server error, please try again later",
      error
    });
    return;
  }
});

//multiply
app.post("/multiply", async (req: Request, res: Response) => {
  try {
    const validator = Input.safeParse(req.body);
    if (!validator.success) {
      res.status(411).json({
        message: validator.error.errors.map((err) => err.path + " " + err.message).join(", ")
      });
      return;
    }

    const { a, b } = validator.data;
    const answer = a * b;

    res.status(200).json({
      message: a + "*" + b,
      answer
    });
    return;
  } catch (error) {
    res.status(500).json({
      message: "Internal server error, please try again later",
      error
    });
    return;
  }
});

//division
app.post("/divide", async (req: Request, res: Response) => {
  try {
    const validator = Input.safeParse(req.body);
    if (!validator.success) {
      res.status(411).json({
        message: validator.error.errors.map((err) => err.path + " " + err.message).join(", ")
      });
      return;
    }

    const { a, b } = validator.data;
    const answer = a / b;

    res.status(200).json({
      message: a + "/" + b,
      answer
    });
    return;
  } catch (error) {
    res.status(500).json({
      message: "Internal server error, please try again later",
      error
    });
    return;
  }
});

export default app;