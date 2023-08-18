import React from "react";
import { Icon } from "@iconify/react";
import Modal from "../../shared/Modal/Modal";
import Button from "../../shared/Button/Button";
import FormAddUser from "./FormAddUser";
const AddUser = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const icon = (
    <Icon
      className="text-white text-3xl justify-center m-auto "
      icon="typcn:plus"
    />
  );
  return (
    <>
        <Button
          text={icon}
          styles=" w-15 absolute bottom-5 right-5 h-20  p-2 text-white  rounded-full  bg-violet-600  shadow-xl h-auto"
          onClick={handleShowModal}

        />
      {showModal ? (
        <Modal classModal="w-[30rem]"  title="Add User" setShowModal={setShowModal}>
          <FormAddUser/>
        </Modal>
      ) : null}
    </>
  );
};

export default AddUser;
