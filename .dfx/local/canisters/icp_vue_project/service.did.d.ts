import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Post {
  'id' : number,
  'content' : string,
  'votes' : number,
  'date' : string,
  'poster' : User,
}
export interface User { 'name' : string, 'principal_id' : Principal }
export interface _SERVICE {
  'addPost' : ActorMethod<[string], undefined>,
  'addVote' : ActorMethod<[number], undefined>,
  'authenticateUser' : ActorMethod<[string], undefined>,
  'getAuth' : ActorMethod<[], string>,
  'getPosts' : ActorMethod<[], Array<Post>>,
  'getUser' : ActorMethod<[string], string>,
  'getUsers' : ActorMethod<[], Array<User>>,
  'registerUser' : ActorMethod<[string, Principal], undefined>,
}
