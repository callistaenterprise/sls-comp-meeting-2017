import * as service from './service';

export default async action => {
  console.log('--- REDUCER', JSON.stringify(action, null, 2));
  switch(action.type) {
    case 'CREATE_USER':
      console.log('--- reducer create user', action);
      return service.createUser(action).then(
        user => ({type:'ADD_USER', user})
      );
     case 'UPDATE_USER':
      return service.updateUser(action).then(
        user => ({type:'UPDATE_USER', user})
      );
     case 'DELETE_USER':
      return service.deleteUser(action).then(() => ({...action, remote:false}));
     case 'LIST_USERS':
       console.log("---- list_users");
       invokeLambda()
      return service.getUsers(action).then(
        users => ({type:'RECEIVE_USERS', users})
  ); 
     case 'GET_USER':
      const user = service.getUser(action);

      return user;
     default:
      return action;
  }
}

