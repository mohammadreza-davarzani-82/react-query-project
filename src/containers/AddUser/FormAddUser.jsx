import React, { useState } from "react";
import Input from "../../shared/Input/Input";

const FormAddUser = () => {
  const [data, setData] = useState({
    id:"",
    name:"",
    lastName:"",
    email:"",
    phone:"",
    img:"",
    


  });
  

  const handleChange = (e) => {
    console.log({[e]: e})    
  };
  console.log("name", data.name);
  console.log("lastName", data.lastName);
  console.log("email", data.email);
  console.log("phone", data.phone);
  console.log("name", data.img);

  return (
    <article>
      <section>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mx-4 my-4">
          <Input
            handleChange={handleChange}
            label="Name:"
            type="text"
            placeholder="User name:"
            required={true}
          />
          <Input
            handleChange={handleChange}
            label="Last name:"
            type="text"
            placeholder="Last name:"
            required={true}
          />
          <Input
            handleChange={handleChange}
            label="Email:"
            type="email"
            placeholder="Email:"
            required={true}
          />
          <Input
            handleChange={handleChange}
            label="Phone number:"
            type="text"
            placeholder="Phone number:"
            required={true}
          />
          <Input
            handleChange={handleChange}
            label="Image:"
            type="url"
            placeholder="Image:"
            required={true}
          />
        </form>
      </section>
    </article>
  );
};

export default FormAddUser;
