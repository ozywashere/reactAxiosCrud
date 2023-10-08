import { UserList } from "../features/users/UserList.jsx";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const navigate = useNavigate ();
  return ( <>
    <section className="py-24">
      <div className="max-w-screen-2xl mx-auto w-full rounded-md shadow-inner p-8 bg-gray-50 flex flex-col h-full justify-center gap-8">
        <div className="flex items-center font-semibold justify-between  bg-white">
          <h1 className="text-2xl">User List</h1>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center" onClick={ () => {
            navigate ( `/users/create` );
          } }>
            Create User
          </button>
        </div>
        <div>
          <UserList/>
        </div>
      </div>
    </section>
  </> )
}