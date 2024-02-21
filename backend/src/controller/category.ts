import { Request, Response } from "express";
import { categoryModel } from "../model/category";
import mongoose from "mongoose";

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name, foodIds } = req.body;
        const foodIdsAsObjectIds = Array.isArray(foodIds)
            ? foodIds.map((id: string) => new mongoose.Types.ObjectId(id))
            : [new mongoose.Types.ObjectId(foodIds)];

        const existentCategory = await categoryModel.findOne({ name });

        if (existentCategory) {
            existentCategory.foodIds.push(...foodIdsAsObjectIds);
            const updatedCategory = await existentCategory.save();

            console.log("Updated category:", updatedCategory);
            return res.status(200).json(updatedCategory);

        } else {

            const madeCategory = await categoryModel.create({ name, foodIds: foodIdsAsObjectIds });
            console.log("New category created:", madeCategory);

            return res.status(201).send({
                success: true,
                madeCategory
            });
        }
    } catch (error) {
        console.error('Error at creating Category', error);
        return res.status(500).send({
            success: false,
            msg: error
        });
    }
};

export const retAllCategories = async (_: Request, res: Response) => {
    try {
        const allCategories = await categoryModel.find();
        return res.status(200).send({
            success: true,
            allCategories
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            msg: "unavailable to all"
        })
    }
};

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const { name } = req.body;
        const updatedCategory = await categoryModel.findByIdAndUpdate(id, { name });

        return res.status(200).send({
            success: true,
            updatedCategory
        });
    } catch (error) {
        res.status(500).send({
            msg: error,
        });
    }
};

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const removedCategory = await categoryModel.findByIdAndDelete(req.params.id)
        console.log("this is id");

        if (!removedCategory) {
            return res.status(404).send({
                sucess: false,
                msg: "category cannot be found"
            })
        } else {
            return res.status(200).send({
                success: true,
                msg: "category is deleted successfully"
            })
        }

    } catch (error) {
        console.log("cannot not delete", error);
        res.status(500).send({
            success: false,
            msg: error
        })
    }
};