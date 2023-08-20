import React from "react";
import { Icon } from "@iconify/react";

const EditUser = ({ styles, id,setShow , getId  }) => {
    const handleShowModal = (id ) =>{
        setShow(true)
        getId({
            id:id,
            type: "edit"
        })
      }
  return (
    <button onClick={()=>handleShowModal(id)}>
    <Icon
        className={styles}
        icon="bx:edit"
        color="green"
        width="30"
        height="30"
      />
    </button>
  );
};

export default EditUser;
