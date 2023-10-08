import PropTypes from 'prop-types';
export const FormRow = (props) => {
  const { label, name, type, onChange,value } = props;

  return (
    <div>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700 mb-2'>
        {label}
      </label>
      <input
   
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        autoComplete={name}
        value={value}
 
        className='mb-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
      />
    </div>
  );
};

FormRow.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

};
