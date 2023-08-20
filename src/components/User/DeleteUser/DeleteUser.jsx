import React from "react";
import { Icon } from "@iconify/react";
const DeleteUser = ({ styles, id,setShow , getId }) => {
  const handleShowModal = (id , type) =>{
    setShow(true)
    getId({
      id:id,
      type:type
    })
  }
  return (
    <>
      <button onClick={()=>handleShowModal(id , "delete")}>
        <Icon
          className={styles}
          icon="ic:twotone-delete"
          color="red"
          width="35"
          height="35"
        />
      </button>
      
    </>
  );
};

export default DeleteUser;
