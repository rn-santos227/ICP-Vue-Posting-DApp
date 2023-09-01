import { Record, Principal } from 'azle';

type User = Record<{
    name: string,
    principal_id: Principal,
}>;

export default User;