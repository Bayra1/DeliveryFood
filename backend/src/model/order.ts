import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'deliveryUser',
        required: true
    },

    foods: [{
        type: mongoose.Types.ObjectId,
        ref: 'food',
        required: true
    }],

    process: {
        type: String,
        enum: ['Progress', 'Active', 'Waiting', 'Delivered'],
        default: 'progress'
    },

    Payment: {
        type: String,
        enum: ['Paid', 'Not Paid'],
        default: 'Not Paid'
    },

    orderNumber: Number,
    createdDate: Date,
    District: String,
    Khoroo: String,
    Apartment: String,
    totalPrice: Number   
});

const orderModel = mongoose.model('Order', orderSchema);

export { orderModel }