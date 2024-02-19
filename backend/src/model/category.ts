import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        midLength: 3,
        required : true
    },    
});

const categoryModel = mongoose.model('Category', categorySchema);

export { categoryModel }