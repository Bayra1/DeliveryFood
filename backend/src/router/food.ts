import express from "express";
import { deleteFood, postFood, retAllFoods, updateFood } from "../controller/food";

const food = express.Router();

food.route('/postFood')
    .post(postFood)

food.route('/:id')
    .patch(updateFood)

food.route('/deleteFood')
    .delete(deleteFood)
 
food.route('/retAllfoods')
    .get(retAllFoods)


export { food }