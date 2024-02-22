import express from "express";
import { createOrder, deleteOrder, retAllOrders, updateOrder } from "../controller/order";

const order = express.Router()

order.route('/postOrder')
    .post(createOrder)

order.route('/retAll')
    .get(retAllOrders)

order.route('/updateOrder/:id')
    .put(updateOrder)

order.route('/deleteOrder/:id')
    .delete(deleteOrder)

export { order }   