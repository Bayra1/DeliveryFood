import { Request, Response } from "express";
import { categoryModel } from "../model/category";
import mongoose from "mongoose";

const createCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, foodId } = req.body;
        const foodIdsAsObjectIds = Array.isArray(foodId)
            ? foodId.map((id: string) => new mongoose.Types.ObjectId(id))
            : [new mongoose.Types.ObjectId(foodId)];

        const existingCategory = await categoryModel.findOne({ name });
        if (existingCategory) {
            existingCategory.foodId.push(...foodIdsAsObjectIds);
            const updatedCategory = await existingCategory.save();
            res.status(200).json(updatedCategory);
        } else {
            const newCategory = await categoryModel.create({
                name,
                foodId: foodIdsAsObjectIds,
            });
            res.status(201).json(newCategory);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

