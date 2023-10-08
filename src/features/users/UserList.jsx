import { User } from "./User.jsx";
import { useEffect , useState } from "react";

import axios from "axios";

export const UserList = () => {
  const [ users , setUsers ] = useState ( [] );
  
  
  useEffect ( () => {
    const fetchUsers = async () => {
      const response = await axios.get ( "http://localhost:3001/users" );
      setUsers ( response.data );
    }
    fetchUsers ();
  } , [] );
  console.log ( users );
  return ( <>
      <table className="w-full text-sm text-center text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 ">ID</th>
          <th scope="col" className="px-6 py-3">Name</th>
          <th scope="col" className="px-6 py-3">Username</th>
          <th scope="col" className="px-6 py-3">Email</th>
          <th scope="col" className="px-6 py-3">Phone</th>
          <th scope="col" className="px-6 py-3">Website</th>
          <th scope="col" className="text-center">Action</th>
        </tr>
        </thead>
        <tbody>
        { users.map ( user => ( <User key={ user.id } user={ user }/> ) ) }
        </tbody>
      </table>
  </> )
}