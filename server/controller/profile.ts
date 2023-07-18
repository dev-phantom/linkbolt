import { Request, Response } from "express";
import { StatusCode } from "../enums/staus_code";
import { PrismaClient } from "@prisma/client";
import { signJwt } from "../utils/jwt";

const prisma = new PrismaClient();

const get_profile = async (req: Request, res: Response) => {
	
	//@ts-ignore
	const reqSession = req?.session
	//@ts-ignore
	if (req?.isAuthenticated()) {
		//@ts-ignore
		const userId = reqSession.passport?.user?.id

		const fetchProfile = await prisma.user.findUnique({
			where: {
				sub: userId
			}
		});

		if ( fetchProfile ) {

			const { email , id , sub } = fetchProfile
			const data = {
				email: email,
				id: id,
				sub: sub
			}
			const jwt =  signJwt(data);

			res.cookie("_auth_token",  jwt, {
				httpOnly: true,
				secure: true,
				maxAge: 86400000
			});

			res.status(StatusCode.Found).json({
				message: 'Profile retrived',
				data: fetchProfile,
				jwt_token: jwt
			})
		}

		else {
			res.status(StatusCode.NotFound).send("User not found")
		}

	} else {
		res.status(StatusCode.Unauthorized).json({ error: "Unauthenticated" });
	}
};

export { get_profile };
