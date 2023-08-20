import React from "react";
import { Icon } from "@iconify/react";
import Modal from "../../Modal/Modal";
import Button from "../../Button/Button";
import FormAddUser from "./FormAddUser/FormAddUser";
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
          styles=" w-15 fixed bottom-5 right-5 h-20  p-2 text-white  rounded-full  bg-violet-600  shadow-xl h-auto animate-bounce transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110"
          onClick={handleShowModal}

        />
        <Modal classModal="w-[30rem]"  title="Add User" setShow={setShowModal} showModal={showModal}>
          <FormAddUser   refetch={props.refetch}  setShow={setShowModal}/>
        </Modal>
    </>
  );
};

export default AddUser;
