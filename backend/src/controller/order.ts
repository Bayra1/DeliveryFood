import { Request, Response } from "express";
import { categoryModel } from "../model/category";
import mongoose from "mongoose";
import { orderModel } from "../model/order";

export const createOrder = async (req: Request, res: Response) => {
    try {
        const makeOrder = await orderModel.create(req.body)

        res.status(201).json(makeOrder);
        console.log('this is make order', makeOrder);

    } catch (error) {
        console.log('failed to create a order', error);
        res.status(400).json({ error });
    }
};

export const retAllOrders = async (_: Request, res: Response) => {
    try {
        const allOrders = await orderModel.find().populate('foods');
        return res.status(200).send({
            success: true,
            allOrders
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            msg: "unavailable to all"
        })
    }
};

export const updateOrder = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const updatedOrder = await orderModel.findByIdAndUpdate(id, (req.body), { new: true });
        console.log("this is req.body", req.body);

        console.log("this is updateorder", updatedOrder);

        return res.status(200).send({
            success: true,
            updatedOrder
        });

    } catch (error) {
        res.status(500).send({
            msg: error,
        });
    }
};

export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const removedOrder = await orderModel.findByIdAndDelete(req.params.id)

        if (!removedOrder) {
            return res.status(404).send({
                sucess: false,
                msg: "removedOrder cannot be found"
            })
        } else {
            return res.status(200).send({
                success: true,
                msg: "order is just deleted successfully"
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