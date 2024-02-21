import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'deliveryUser',
        required: true
    },

    orderNumber: Number,
    foods: {
        type: mongoose.Types.ObjectId,
        ref: 'food',
        required: true
    },
    totalPrice: Number,

    process: {
        type: String,
        enum: ['Progress', 'Active', 'Waiting', 'Delivered'],
        default: 'progress'
    },

    createdDate: Date,
    district: String,
    Khoroo: String,
    Apartment: String,

    Payment: {
        type: String,
        enum: ['Paid', 'Not Paid'],
        default: 'Not PAid'
    }
});

const orderModel = mongoose.model('Order', orderSchema);

export { orderModel }