import { Request, Response } from "express";
import { foodModel } from "../model/food";
import { userModel } from "../model/user";
import { v2 as cloudinary } from "cloudinary";
import { Cloud } from "../utils/cloudinary";

Cloud();

export const postFood = async (req: Request, res: Response) => {
    try {
        const resFromCloud = await cloudinary.uploader.upload(req.body)
    } catch (error) {
        res.status(400).send({ msg: error })
    }
};


export const updateFood = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const { name, ingredient, discount } = req.body;
        const updatedFood = await foodModel.findByIdAndUpdate(id, { name, ingredient, discount });

        return res.status(200).send({
            success: true,
            updatedFood,
        });
    } catch (error) {
        res.status(500).send({
            msg: error,
        });
    }
};

export const deleteFood = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const removedItem = await foodModel.findByIdAndDelete(id)

        if (!removedItem) {
            res.send({
                success: false,
                msg: 'cannot find item'
            })
        } else {
            res.send({
                success: true,
                msg: 'item has been deleted successfully'
            })
        }

    } catch (error) {
        console.log('cannot find', error);
        res.status(500).send({
            success: false,
            msg: error
        })
    }
};

export const retAllFoods = async (req: Request, res: Response) => {
    try {
        const allFoods = await userModel.find();
        return res.status(200).send({
            success: true,
            allFoods
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            msg: "unavailable accessing all Foods"
        })
    }
}