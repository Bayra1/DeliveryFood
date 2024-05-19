import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";

async function hashPassword(password: string) {
  try {
    const SALT = 10;
    const salt = await bcrypt.genSalt(SALT);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export const encrypt = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const { password } = req.body;
  const hash = await hashPassword(password);

  req.body = hash;
  next();
};
