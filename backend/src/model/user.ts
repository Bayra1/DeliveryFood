import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    phoneNumber: Number,
    password: String,

    email: {
        type: String,
        required: true,
        unique: true
    },
    
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
});

const userModel = mongoose.model("deliveryUser", userSchema);

export { userModel };