import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: Number,
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
});

const userModel = mongoose.model("deliveryUser", userSchema);

export { userModel };