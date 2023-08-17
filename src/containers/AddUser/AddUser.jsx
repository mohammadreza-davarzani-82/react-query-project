import React from "react";
import { Icon } from "@iconify/react";
import Modal from "../../shared/Modal/Modal";
import Button from "../../shared/Button/Button";
const AddUser = (props) => {
  const { showModal, setShowModal } = props;
  const icon = <Icon className="text-white text-3xl justify-center m-auto " icon="typcn:plus" />;
  return (
    <>
      <Button
        text={icon}
        styles="w-20 absolute bottom-0 right h-20  p-2 text-white  rounded-full  bg-violet-600  shadow-xl h-auto"
      />
      {showModal ? (
        <Modal title="Add User" setShowModal={setShowModal}></Modal>
      ) : null}
    </>
  );
};

export default AddUser;
