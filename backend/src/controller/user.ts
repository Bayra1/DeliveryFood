import { Request, Response } from "express";
import { userModel } from "../model/user";
import bcrypt from "bcrypt";

const userType = {
    name: String,
    email: String,
    password: { type: [String, Number] },
    phoneNumber: Number
}


export const signUp = async (req: Request, res: Response) => {
    try {
        const { name, email, password, phoneNumber, role } = req.body;

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

        const desiredUser: any = await userModel.findOne({ email })

        const hashPassWord = bcrypt.compare(password, desiredUser.password, (err, result) => {
            console.log(err, result)
            if (!result) {
                res.status(500).send({
                    success: false,
                    msg: "Wrong Email or Password"
                });
            } else {
                res.status(200).send({
                    success: true,
                    msg: "Promising"
                });
            }
        })
        console.log("this is hashpassword", hashPassWord);


    } catch (error) {
        console.log('error at login', error);
        res.status(500).send({
            success: false,
            msg: "failed to validate"
        })
    }
};
