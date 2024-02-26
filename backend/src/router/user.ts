import express from "express";
import { Login, fetchAllUSers, signUp, updateUser } from "../controller/user";

const user = express.Router();

user.route('/signUp')
    .post(signUp)

user.route('/getAllUsers')
    .get(fetchAllUSers)

user.route('/login')
    .post(Login)

user.route('/:id')
    .put(updateUser)


export { user }
