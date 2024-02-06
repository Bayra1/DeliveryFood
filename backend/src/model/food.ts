import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        length: {
            min: 3
        },
        required: true
    },
    image: String,
    ingredient: String,
    price: Number
});

const foodModel = mongoose.model('foodNames', foodSchema);

export { foodModel }