import express from "express";
import { createOrder } from "../controller/order";

const order = express.Router()

order.route('/postOrder')
    .post(createOrder)

 export { order }   