import React from "react";
import Button from "../Button/Button";

const Card = ({data ,  onClick }) => {
    const {id,name,lastName,img} = data
   
  return (
    <>
      <section className=" bg-slate-50 drop-shadow-xl rounded-md w-80 h-auto flex   mx-auto my-5 ">
        <article className="flex ml-5 mt-5 justify-start w-16 h-16 rounded-full shadow-lg">
          <img src={img} className="rounded-full" alt={name+lastName} />
        </article>
        <article className="mt-20 ml-4 ">
          <section>
            <h2 className="mb-2"><span className="text-violet-500">Name:</span> {name}</h2>
            <p className=" mb-2"><span className="text-violet-500">Last name:</span> {lastName}</p>
          </section>
          <section className="my-2">
            <Button
              onClick={()=>onClick(id)}
              styles="w-28 p-2 text-white  rounded-md  bg-violet-600  shadow-xl h-auto"
              text="User Detail"
            />
          </section>
        </article>
      </section>
    </>
  );
};

export default Card;
