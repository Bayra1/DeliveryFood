import { Request, Response } from "express";
import { categoryModel } from "../model/category";

export const createCategory = async (req : Request, res : Response) => {
    try {
        const {name, id} = req.body;
        
    

        const madeCategory = await categoryModel.create({name, id})
        return res.status(201).send({
            success: true, 
            madeCategory
        });

    } catch (error) {
        console.log('error at creating Category', error);
        res.status(500).send({
            success: false,
            msg : error
        });
    }   
};