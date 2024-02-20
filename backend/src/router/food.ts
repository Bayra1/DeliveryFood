import express from "express";
import { deleteFood, postFood, retAllFoods, updateFood } from "../controller/food";

const food = express.Router();

food.route('/postFood')
    .post(postFood)

food.route('/:id')
    .patch(updateFood)

food.route('/:id')
    .delete(deleteFood)
 
food.route('/getAllfoods')
    .get(retAllFoods)


export { food }