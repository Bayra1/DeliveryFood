import { Request, Response } from "express";
import { userModel } from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req: Request, res: Response) => {
    try {
        const { name, email, address, password, phoneNumber, role } = req.body;

        const saltRounds = 10;
        const hash = await bcrypt.hash(password, saltRounds);

        const response = await userModel.create({
            name,
            email,
            password: hash,
            phoneNumber,
            role,
        });

        console.log('this is response', response);

        res.status(200).send({
            success: true,
            data: response,
        });
    } catch (error) {
        console.log('error at signing up', error);
        res.status(500).send({
            success: false,
            msg: 'can not create',
        });
    }
};

export const fetchAllUSers = async (req: Request, res: Response) => {
    try {
        const allUsers = await userModel.find();
        return res.status(200).send({
            success: true,
            data: allUsers
        })
    } catch (error: any) {
        console.log("error at fetching all users", error);
        res.status(500).send({
            success: false,
            msg: "cannot get all Users"
        })
    }
};

export const Login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        console.log(req.body);

        const desiredUser: any = await userModel.findOne({ email })

        if (!desiredUser) {
            return res.status(404).send({ msg: 'user cannot be found' });
        }

        const legi = bcrypt.compare(password, desiredUser.password)
        console.log(legi);
        
        if (!legi) {
            return res.status(404).send({
                msg: 'Email or PassWord Incorrect'
            })
        }

        const token = jwt.sign({ desiredUser }, 'MY_SECRET_KEY');

        return res.status(200).send({
            success: true,
            token
        })


    } catch (error) {
        console.log('error at login', error);
        res.status(500).send({
            success: false,
            msg: "failed to validate"
        })
    }
};
