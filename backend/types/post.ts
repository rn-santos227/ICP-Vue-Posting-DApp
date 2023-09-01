import { Record } from 'azle';
import User from './user';

type Post = Record<{
    id: number,
    poster: User,
    content: string,
    date: string,
    votes: number,
}>;

export default Post;