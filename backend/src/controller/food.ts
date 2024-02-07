import { Request, Response } from "express";
import { foodModel } from "../model/food";

export const postFood = async (req: Request, res: Response) => {
    try {
        const createdFood = await foodModel.create(req.body)
        return res.status(201).send({
            success: true,
            createdFood
        })
    } catch (error) {
        res.status(400).send({ msg: error })
    }
};


export const updateFood = async (req: Request, res: Response) => {
    try {
        const { name, ingredient, discount } = req.body;
        const updatedFood = await foodModel.updateOne({ name }, { ingredient, discount });
        return res.status(200).send({
            success: true,
            updatedFood,
        });
    } catch (error) {
        res.status(400).send({
            msg: error,
        });
    }
};
