import { Request, Response } from "express";
import { StatusCode } from "../enums/staus_code";

export const signup = async (req: Request, res: Response) => {
	const { name, email } = req.body;
	res.status(StatusCode.OK).json({ name, email });
};

export const login = async (req: Request, res: Response) => {
	const { name, email } = req.body;
	res.status(StatusCode.OK).json({ name, email });
};
