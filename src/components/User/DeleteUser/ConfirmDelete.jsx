import React from "react";
import Button from "../../Button/Button";
import { useMutation } from "react-query";
import services from "../../../shared/api/services";
const ConfirmDelete = ({setShow  , id , refetch}) => {
    const options = {
        method: "DELETE",
        apiRoute: `/${id?.id}`,
      };
      const deleteData = useMutation({
        mutationFn: (data) => {
          return services.requestService(options, data);
        },
      });
      const handleDelete = (id) => {
        deleteData.mutate(id, {
          onSuccess: () => {
            refetch();
            setShow(false)
          },
        });
      };
    
  return (
    <div className="my-5 flex justify-between">
      <Button
        styles="w-1/2  mx-3 bg-green-600 p-2 flex text-white  rounded-md   mt-4 justify-center shadow-xl h-auto"
        text="Cancel"
        onClick={()=>setShow(false)}
      />
      <Button
        styles="w-1/2  mx-3 bg-red-600 p-2 flex text-white  rounded-md   mt-4 justify-center shadow-xl h-auto"
        text="Delete"
        onClick={()=>{handleDelete(id)}}
      />
    </div>
  );
};

export default ConfirmDelete;
