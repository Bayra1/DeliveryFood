import { Request, Response } from "express";
import { categoryModel } from "../model/category";
import mongoose from "mongoose";
import { orderModel } from "../model/order";

export const createOrder = async (req: Request, res: Response) => {
    try {
        const makeOrder = await orderModel.create(req.body)
        // res.status(201).send({
        //     success: true,
        //     makeOrder
        // })
        res.status(201).json(makeOrder);
        console.log('this is make order', makeOrder);
        
    } catch (error) {
        console.log('failed to create a order', error);
        res.status(400).json({ error });
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