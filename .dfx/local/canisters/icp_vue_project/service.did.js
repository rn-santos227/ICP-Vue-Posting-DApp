export const idlFactory = ({ IDL }) => {
  const User = IDL.Record({
    'name' : IDL.Text,
    'principal_id' : IDL.Principal,
  });
  const Post = IDL.Record({
    'id' : IDL.Float64,
    'content' : IDL.Text,
    'votes' : IDL.Float64,
    'date' : IDL.Text,
    'poster' : User,
  });
  return IDL.Service({
    'addPost' : IDL.Func([IDL.Text], [], []),
    'addVote' : IDL.Func([IDL.Float64], [], []),
    'authenticateUser' : IDL.Func([IDL.Text], [], []),
    'getAuth' : IDL.Func([], [IDL.Text], ['query']),
    'getPosts' : IDL.Func([], [IDL.Vec(Post)], ['query']),
    'getUser' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'getUsers' : IDL.Func([], [IDL.Vec(User)], ['query']),
    'registerUser' : IDL.Func([IDL.Text, IDL.Principal], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
