import { User } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    insertUser = async (user: User): Promise<void> => {
        try {
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                details: user.details
            }).into('webpage_user')
        } catch (error: any) {
            throw new Error(error.message)
        }
    };
};