import { FormRow } from "../../ui/FormRow.jsx";
import { useNavigate , useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import axios from "axios";

export const UpdateUser = () => {
  
  const [ values , setValues ] = useState ( {
    name : '' , email : '' , phone : '' ,
  } )
  const [ user , setUser ] = useState ( [] );
  const { id } = useParams ();
  const navigate = useNavigate ();
  const handleChange = ( event ) => {
setValues({...values,[event.target.name]:event.target.value})
  }
  
  useEffect ( () => {
    const response = axios.get ( "http://localhost:3001/users/" + id ).then ( ( response ) => {
      setValues ( response.data );
    } )
    console.log ( response);
    
  } , [] );
  
  console.log ( values );
  
  
  const handleUpdate = ( event ) => {
    event.preventDefault ();
    axios.put ( `http://localhost:3001/users/` + id , values )
      .then ( response => {
        console.log ( response );
        navigate ( `/users` );
      } )
      .catch ( error => {
        console.log ( error );
      } )
    
  }
  
  
  return ( <>
    <section className="flex items-center w-full justify-center h-screen">
      <div className="relative w-full max-w-2xl rounded-md shadow px-6 py-6 lg:px-8">
        <h1 className="mb-4 text-2xl font-medium text-gray-900 ">Update User</h1>
        <form onSubmit={ handleUpdate }>
          <div className="grid gap-6 mb-6 md:grid-cols-2" key={ id }>
            <FormRow label='Name' name='name' type='text'
                     onChange={ handleChange }
                     value={ values.name }
            
            />
            <FormRow label='Username' name='username' type='text'
                     onChange={ handleChange }
                     value={ values.username }
            />
            <FormRow label='Email' name='email' type='email'
                     onChange={ handleChange }
                     value={ values.email }
            
            />
            <FormRow label='Phone' name='phone' type='tel'
                     onChange={ handleChange }
                      value={ values.phone }
            />
          </div>
          <FormRow label='Website' name='website' type='url'
                   onChange={ handleChange }
                    value={ values.website }
          />

          
          
          <div className="flex gap-4 mt-4">
            <button type='submit'
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center">Update
            </button>
            <button type='button'
                    onClick={ () => navigate ( - 1 ) }
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center">Back
            </button>
          </div>
        </form>
      </div>
    </section>
  </> );
};
