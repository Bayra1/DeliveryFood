import { Request, Response } from "express";
import { foodModel } from "../model/food";
import { v2 as cloudinary } from "cloudinary";
import { Cloud } from "../utils/cloudinary";

Cloud();

export const postFood = async (req: Request, res: Response) => {
  try {
    const resFromCloud = await cloudinary.uploader.upload(req.body.image, {
      folder: "DeliveryImg",
    });
    const makeFood = await foodModel.create({
      name: req.body.name,
      ingredient: req.body.ingredient,
      price: req.body.price,
      image: resFromCloud.secure_url,
      discount: req.body.discount,
      sale: req.body.sale,
    });
    res.status(201).json(makeFood);
    console.log("make food is here:", makeFood);
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

export const updateFood = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const { name, ingredient, discount, image, price } = req.body;
    const updatedFood = await foodModel.findByIdAndUpdate(id, {
      name,
      ingredient,
      discount,
      image,
      price,
    });

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
    const { id } = req.body;
    console.log("this is id", id);

    const removedItem = await foodModel.findByIdAndDelete(id);

    if (removedItem) {
      res.send({
        success: true,
        msg: "item has been deleted successfully",
      });
    } else {
      res.send({
        success: false,
        msg: "cannot find item",
      });
    }
  } catch (error) {
    console.log("cannot find", error);
    res.status(500).send({
      success: false,
      msg: error,
    });
  }
};

export const retAllFoods = async (req: Request, res: Response) => {
  try {
    const allFoods = await foodModel.find();
    return res.status(200).send({
      success: true,
      allFoods,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "unavailable accessing all Foods",
    });
  }
};
