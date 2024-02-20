import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        midLength: 3,
        required: true
    }, 

    foodIds : [{    
        type: mongoose.Schema.Types.ObjectId,
        ref : 'food',
        required : true,
    }]  
});

const categoryModel = mongoose.model('Category', categorySchema);

export { categoryModel }