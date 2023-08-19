import React from "react";
import { Icon } from "@iconify/react";
import { useMutation } from "react-query";
import services from "../../../shared/api/services";
const DeleteUser = ({styles , id, refetch}) => {
    const options = {
        method: "DELETE",
        apiRoute: `/${id}`,
      };
    const deleteData = useMutation({
        mutationFn: (data) => {
          return services.requestService(options, data);
        },
      });
    const handleDelete = (id) =>{
        deleteData.mutate(id, {
            onSuccess: () => {
              refetch();
            },
          });
    }
  return (
    <button onClick={()=> handleDelete(id)}>
      <Icon className={styles} icon="ic:twotone-delete" color="red" width="35" height="35" />
    </button>
  );
};

export default DeleteUser;
