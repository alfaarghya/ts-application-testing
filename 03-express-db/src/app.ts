import express from "express";
import { z } from "zod";
import { prismaClient } from "./db";

const app = express();
app.use(express.json());

const Input = z.object({
    a: z.number(),
    b: z.number(),
});


app.post("/calculate", async (req, res) => {
    try {
        const validator = Input.safeParse(req.body)

        if (!validator.success) {
            return res.status(411).json({
                message: validator.error.errors.map((err) => err.path + " " + err.message).join(", ")
            })
        }

        const answer = validator.data.a + validator.data.b;

        const response = await prismaClient.calculate.create({
            data: {
                a: validator.data.a,
                b: validator.data.b,
                type: "sum",
                result: answer
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

app.get("/calculate", async (req, res) => {
    const parsedResponse = Input.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })

    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    const response = await prismaClient.calculate.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            type: "sum",
            result: answer
        }
    })
    res.json({
        answer,
        id: response.id
    })
});

export default app;