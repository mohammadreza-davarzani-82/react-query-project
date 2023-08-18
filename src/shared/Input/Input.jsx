import React from "react";

const Input = (props) => {
  const { disabled, required, dir, type, placeholder, id, label, handleChange} = props;

  return (
    <>
      <section>
      {label ? (
        <label
          className="block text-gray-700 text-sm font-bold mb-1 mt-2"
        >
          {label}
        </label>
      ) : (
        ""
      )}

      <input
        disabled={disabled}
        required={required}
        type={type}
        dir={dir}
        id={type}
        onChange={(e)=>handleChange(e.target.name)}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      />
      </section>
    </>
  );
};

export default Input;
