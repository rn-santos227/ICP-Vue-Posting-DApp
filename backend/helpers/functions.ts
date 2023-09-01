import { Principal } from 'azle';
import User from "../types/user";

export function getUserByPrincipalID(principal_id: string, users: User[]): any {
    users.forEach((item) => {
        if(item.principal_id == Principal.fromText(principal_id)) {
            return item;
        }
    });
}