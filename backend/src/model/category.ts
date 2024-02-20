import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        midLength: 3,
        require: true
    }, 
    ref: 'food', 
    foodIds : [{
        type: mongoose.Schema.Types.ObjectId,
        require : true
    }]  
});

const categoryModel = mongoose.model('Category', categorySchema);

export { categoryModel }