import express from "express";
import prismaClient from "./db";
const app = express();

app.use(express.json());

app.post("/calculate", async (req, res) => {
  try {


    const answer = req.body.a + req.body.b;

    const response = await prismaClient.calculate.create({
      data: {
        a: req.body.a,
        b: req.body.b,
        answer,
        type: "add",
      }
    })

    res.status(200).json({
      answer,
      id: response.id
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error, please try again later",
      error
    });
    return;
  }
});

export default app;