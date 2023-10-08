import axios from 'axios';

const apiUsers = axios.create ( {
  baseURL : 'http://localhost:3001/users' , headers : {
    'Content-type' : 'application/json'
  }
} );

export const getUsers = async () => {
  const response = await apiUsers.get ( '/' );
  return response.data;
}


export const getUser = async ( id ) => {
  const response = await apiUsers.get ( `/${ id }` );
  return response.data;
}

export const createUser = async ( data ) => {
  const response = await apiUsers.post ( '/' , data );
  return response.data;
}

export const updateUser = async ( id , data ) => {
  const response = await apiUsers.put ( `/${ id }` , data );
  return response.data;
}

export const deleteUser = async ( id ) => {
  const response = await apiUsers.delete ( `/${ id }` );
  return response.data;
}




