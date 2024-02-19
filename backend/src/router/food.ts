import express from "express";
import { postFood, updateFood } from "../controller/food";

const food = express.Router();

food.route('/postFood')
    .post(postFood)
        
food.route('/:id')
    .patch(updateFood)
    

export { food }