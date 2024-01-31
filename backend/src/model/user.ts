import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: Number,
    password: String,
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
});

const userModel = mongoose.model("deliveryUser", userSchema);

export { userModel };