import { $query, $update, Principal, Vec } from 'azle';
import { getUserByPrincipalID } from './helpers/functions';
import Post from './types/post';
import User from './types/user';

const posts: Post[] = [];
const users: User[] = [];

$query;
export function getPosts(): Vec<Post> {
    return posts;
}

$query;
export function getUsers(): Vec<User> {
    return users;
}

$query;
export function getUser(principal_id: string): string {
    const item = getUserByPrincipalID(principal_id, users);
    return item.name;
}

$update;
export function addPost(principal_id: string, content: string): void {
    const now: Date = new Date();
    const item = getUserByPrincipalID(principal_id, users);
    if(item) {
        posts.push({
            id: posts.length,
            poster: item,
            content: content,
            date: now.toString(),
            votes: 0
        });
    }
}

$update;
export function addVote(id: number, principal_id: string): void {
    const item = getUserByPrincipalID(principal_id, users);
    if(item) {
        posts.forEach(item => {
            if(item.id == id) {
                item.votes += 1;
            }
        })
    }
}

$update;
export function registerUser(name: string, principal_id: Principal): void {
    users.push({
        name: name,
        principal_id: principal_id,
    });
}

