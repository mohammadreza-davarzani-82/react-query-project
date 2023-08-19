import React from "react";

const Input = ({ disabled, required, dir, type, placeholder, label, handleChange , name ,value}) => {
  return (
    <>
      {label ? (
        <label
          className=" flex mx-auto justify-center text-gray-700 text-sm font-bold my-2"
        >
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        name={name}
        value={value}
        disabled={disabled}
        required={required}
        type={type}
        dir={dir}
        id={type}
        onChange={(e)=>handleChange(e)}
        placeholder={placeholder}
        className="flex justify-center mx-auto shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      />
    </>
  );
};

export default Input;
