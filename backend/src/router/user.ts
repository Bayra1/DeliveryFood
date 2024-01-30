import express from "express";
import { Login, fetchAllUSers, signUp } from "../controller/user";

const user = express.Router();

user.route('/signUp')
    .post(signUp)

user.route('/getAllUsers')
    .get(fetchAllUSers)

user.route('/login')
    .post(Login)


export { user }