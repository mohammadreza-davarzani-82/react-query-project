import React from "react";

const CardUsersDetail = ({result}) => {
    const {name , lastName , img, email, phoneNumber} = result;
  return (
    <>
      <section className=" drop-shadow-xl rounded-md w-80 h-auto flex mx-auto  ">
        <article className="flex  mt-5 justify-start w-16 h-16 rounded-full shadow-lg">
          <img src={img} className="rounded-full" alt={name + lastName} />
        </article>
        <article className="mt-20 ml-2 ">
          <section>
            <h2 className="mb-2"><span className="text-violet-500">Name:</span> {name}</h2>
            <p className=" mb-2"><span className="text-violet-500">Last name:</span> {lastName}</p>
            <p className=" mb-2"><span className="text-violet-500">Phone number: </span> {phoneNumber}</p>
            <p className=" mb-2"><span className="text-violet-500">Email:</span> <a href="mailto:email">{email}</a></p>
          </section>
        </article>
      </section>
    </>
  );
};

export default CardUsersDetail;
