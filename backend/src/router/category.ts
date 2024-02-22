import express from "express";
import { createCategory, deleteCategory, retAllCategories, updateCategory } from "../controller/category";

const category = express.Router();

category.route('/createCategory')
        .post(createCategory)

category.route('/retAll')
        .get(retAllCategories)

category.route('/updateCatrgory/:id')
        .put(updateCategory)
        
category.route('/deleteCategory/:id')
        .delete(deleteCategory)



export { category }