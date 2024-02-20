import express from "express";
import { deleteFood, postFood, updateFood } from "../controller/food";

const food = express.Router();

food.route('/postFood')
    .post(postFood)

food.route('/:id')
    .patch(updateFood)

food.route('/:id')
    .delete(deleteFood)


export { food }