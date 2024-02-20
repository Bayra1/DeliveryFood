import express from "express";
import { createCategory } from "../controller/category";

const category = express.Router();

category.route('/makeCategory')
    .post(createCategory)

export { category }