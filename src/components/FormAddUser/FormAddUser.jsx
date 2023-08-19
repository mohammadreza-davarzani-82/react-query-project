import React, { useState } from "react";
import Input from "../../../Input/Input";
import { useMutation } from "react-query";
import services from "../../../../shared/api/services";
import Button from "../../../Button/Button";
const FormAddUser = ({ setShow, refetch }) => {
  const [data, setData] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
    img: "",
  });
  const options = {
    method: "POST",
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pervState) => ({
      ...pervState,
      [name]: value,
    }));
  };
  const postData = useMutation({
    mutationFn: (data) => {
      return services.requestService(options, data);
    },
  });
  const handleSumbit = (e) => {
    postData.mutate(data, {
      onSuccess: () => {
        refetch();
      },
    });
    e.preventDefault();
  };
  if(postData.isSuccess){
   return setShow(false)
  }
  return (
    <div>
      <form
        onSubmit={handleSumbit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mx-4 my-4"
      >
        <Input
          handleChange={handleChange}
          label="Name:"
          type="text"
          placeholder="User name:"
          required={true}
          name="name"
          value={data.name}
        />
        <Input
          handleChange={handleChange}
          label="Last name:"
          type="text"
          placeholder="Last name:"
          required={true}
          name="lastName"
          value={data.lastName}
        />
        <Input
          handleChange={handleChange}
          label="Email:"
          type="email"
          placeholder="Email:"
          required={true}
          name="email"
          value={data.email}
        />
        <Input
          handleChange={handleChange}
          label="Phone number:"
          type="text"
          placeholder="Phone number:"
          required={true}
          name="phone"
          value={data.phone}
        />
        <Input
          handleChange={handleChange}
          label="Image:"
          type="url"
          placeholder="Image:"
          required={true}
          name="img"
          value={data.img}
        />
        <Button
          styles="w-80 mx-auto bg-green-400 p-2 flex text-white  rounded-md   mt-4 justify-center shadow-xl h-auto"
          text="Submit"
        ></Button>
      </form>
    </div>
  );
};

export default FormAddUser;
