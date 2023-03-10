import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {

    createUser = async (input: any): Promise<void> => {
        try {
            const { name, email, phone, details } = input;
            const id: string = Date.now().toString();
            const userDatabase = new UserDatabase();

            await userDatabase.insertUser({
                id,
                name,
                email,
                phone,
                details
            });
        } catch (error: any) {
            throw new Error(error.message)
        }
    };
};