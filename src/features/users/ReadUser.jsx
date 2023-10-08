import { useEffect , useState } from "react";
import axios from "axios";
import { useParams , useNavigate } from "react-router-dom";

export const ReadUser = () => {
  const navigate = useNavigate ();
  const { id } = useParams ();
  const [ user , setUser ] = useState ();
  
  
  useEffect ( () => {

      const response =  axios.get ( "http://localhost:3001/users/" + id ).then(
        ( response ) => {
          setUser ( response.data );
        }
      )
      console.log ( response );
      
  

  } , [] );
  console.log ( user );
  return ( <>
    <div className="flex items-center w-full justify-center h-screen">
      <div className="w-full max-w-2xl rounded-md shadow px-6 py-6 lg:px-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">User Details</h3>
        <div className="mb-2">
          <strong>Name:</strong> { user?.name }
        </div>
        <div className="mb-2">
          <strong>Username:</strong> { user?.username }
        </div>
        <div className="mb-2">
          <strong>Email:</strong> { user?.email }
        </div>
        <div className="mb-2">
          <strong>Phone:</strong> { user?.phone }
        </div>
        <div className="mb-2">
          <strong>Website:</strong> { user?.website }
        </div>
        <div className="flex gap-4 mt-4 w-full">
          <button type='button'
                  onClick={ () => navigate ( - 1 ) }
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center">Back
          </button>
          <button type='button'
                  onClick={ () => navigate ( `/users/${ user?.id }/update` ) }
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center">Update
          </button>
          
        </div>
      </div>
    
    </div>
  </> )
}
