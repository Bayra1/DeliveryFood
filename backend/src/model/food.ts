import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    image: String,
    ingredient: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    }
});


const foodModel = mongoose.model('foodNames', foodSchema);

export { foodModel }