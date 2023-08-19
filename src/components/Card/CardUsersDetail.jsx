import React from "react";

const CardUsersDetail = ({result}) => {
    const {name , lastName , img, email, phone} = result;
  return (
    <>
      <div className=" drop-shadow-xl rounded-md w-80 h-auto flex mx-auto  ">
        <div className="flex  mt-5 justify-start w-16 h-16 rounded-full shadow-lg">
          <img src={img} className="rounded-full" alt={name} />
        </div>
        <div className="mt-20 ml-2 ">
          <header>
            <h2 className="mb-2"><span className="text-violet-500">Name:</span> {name}</h2>
            <p className=" mb-2"><span className="text-violet-500">Last name:</span> {lastName}</p>
            <p className=" mb-2"><span className="text-violet-500">Phone number: </span> {phone}</p>
            <p className=" mb-2"><span className="text-violet-500">Email:</span> <a href="mailto:email">{email}</a></p>
          </header>
        </div>
      </div>
    </>
  );
};

export default CardUsersDetail;
