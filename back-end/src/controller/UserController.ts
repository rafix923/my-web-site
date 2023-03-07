import { Request, Response } from "express";
import { UserBusiness } from "../buniness/UserBusiness";

export class UserController {
    static createUser(arg0: string, createUser: any) {
        throw new Error("Method not implemented.");
    }

    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                details: req.body.details
            };

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(201).send({ message: "Suas informações foram recebidas. Logo entraremos em contato!" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    };
};