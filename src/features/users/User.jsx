import { useNavigate } from "react-router-dom";
import axios from "axios";
export const User = ( { user } ) => {
  const navigate = useNavigate ();
  
  const { id , name , username , email , phone , website } = user;
  return ( <>
    <tr className="bg-white border-b text-center">
      <td scope="row">{ id }</td>
      <td scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">{ name }</td>
      <td scope="row" className=" px-6 py-2">{ username }</td>
      <td scope="row" className=" px-6 py-2">{ email }</td>
      <td scope="row" className=" px-6 py-2">{ phone }</td>
      <td scope="row" className=" px-6 py-2">{ website }</td>
      <td scope="row" className=" px-6 py-2 ">
        <div className="flex gap-2 justify-center">
          <button onClick={ () => navigate ( `/users/${ id }` ) }
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center">
            Read
          </button>
          <button onClick={ () => navigate ( `/users/${ id }/update` ) }
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300  rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center">
            
            Update
          </button>
          <button
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center"
            onClick={ () => handleDelete ( id ) }
          
          >
            Delete
          </button>
        </div>
      
      </td>
    </tr>
  </> )
  
  function handleDelete ( id ) {
    const confirm = window.confirm ( 'Are you sure you want to delete this user?' );
    if ( ! confirm ) {
      return;
    }
    axios.delete ( `http://localhost:3001/users/${ id }` )
      .then ( response => {
        console.log ( response );
        window.location.reload();
        navigate ( `/users` );
      } )
      .catch ( error => {
        console.log ( error );
      } )
  }

}
