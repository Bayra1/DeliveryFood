import { Request, Response } from "express";
import { categoryModel } from "../model/category";
import mongoose from "mongoose";

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name, foodId } = req.body;

        const valid = Array.isArray(foodId);

        const foodIdsAsObjectIds = valid
            ? foodId.map((id: string) => new mongoose.Types.ObjectId(id))
            : [new mongoose.Types.ObjectId(foodId)]

        const madeCategory = await categoryModel.create({ name, foodIds : foodIdsAsObjectIds })
        
        return res.status(201).send({
            success: true,
            madeCategory
        });

    } catch (error) {
        console.log('error at creating Category', error);
        res.status(500).send({
            success: false,
            msg: error
        });
    }
};