import { FormRow } from "../../ui/FormRow.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const CreateUser = () => {
  const [ values , setValues ] = useState ( {
    name : '' , email : '' , phone : '' ,
  } )
  
  const navigate = useNavigate ();
  const handleChange = ( event ) => {
    const { name , value } = event.target;
    setValues ( {
      ...values ,
      [ name ] : value ,
    } );
  }
  const handleSubmit = ( event ) => {
    event.preventDefault ();
    axios.post ( 'http://localhost:3001/users' , values )
      .then ( response => {
        console.log ( response );
        navigate ( `/users` );
      } )
      .catch ( error => {
        console.log ( error );
      } )
    
  }
  console.log ( values );
  return ( <>
    <section className="flex items-center w-full justify-center h-screen">
      <div className="relative w-full max-w-2xl rounded-md shadow px-6 py-6 lg:px-8">
        <h1 className="mb-4 text-2xl font-medium text-gray-900 ">Create User</h1>
        <form onSubmit={ handleSubmit }>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <FormRow label='Name' name='name' type='text'  onChange={ handleChange }/>
            <FormRow label='Username' name='username' type='text' onChange={ handleChange }/>
            <FormRow label='Email' name='email' type='email' onChange={ handleChange }/>
            <FormRow label='Phone' name='phone' type='tel' onChange={ handleChange }/>
          </div>
          <FormRow label='Website' name='website' type='url' onChange={ handleChange }/>
          <div className="flex gap-4 mt-4">
            <button type='submit'
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center">Create
            </button>
            <button type='button'
                    onClick={ () => navigate ( - 1 ) }
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center">Back
            </button>
          </div>
        </form>
      </div>
    </section>
  </> );
};
