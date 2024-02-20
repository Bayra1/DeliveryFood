import express from "express";
import { createCategory } from "../controller/category";

const category = express.Router();

category.route('/createCategory')
        .post(createCategory)

export { category }