import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    image: String,
    ingredient: String,
    price: Number,
    sale: Boolean,

    name: {
        type: String,
        minlength: 3,
        required: true
    },

    discount: {
        type: Number,
        default: 0
    }
});


const foodModel = mongoose.model('food', foodSchema);

export { foodModel }