import React, { useState } from "react";
import Card from "../Card/CardUsers";
import Modal from "../Modal/Modal";
import ConfirmDelete from "../User/DeleteUser/ConfirmDelete";
import FormAddUser from "../User/AddUser/FormAddUser/FormAddUser";
const Users = ({
  isLoading,
  isError,
  error,
  getId,
  data,
  refetch,
  id,
  handleShowModal,
}) => {
  const [showModal, setShowModal] = useState(false);
  const checkType = id?.id.type === "delete" 
  return isLoading ? (
    <div className="loading">Data Loading.....</div>
  ) : isError ? (
    <div className="loading">Error? {error?.toString()}</div>
  ) : (
    <>
      <article className="grid grid-cols-5">
        {data.data.map((res) => {
          return (
            <Card
              setShow={setShowModal}
              id={id}
              key={res.id}
              data={res}
              getId={getId}
              onClick={handleShowModal}
            />
          );
        })}
        <Modal
          footer={checkType ? true : null}
          title={checkType ? "Are you sure to edit this user?":"Are you sure to delete this user?"}
          setShow={setShowModal}
          showModal={showModal}
        >
          {checkType ? (
            <ConfirmDelete refetch={refetch} setShow={setShowModal} id={id?.id} />
          ) : (
            <FormAddUser id={id?.id} refetch={refetch} setShow={setShowModal} method="PUT" />
          )}
        </Modal>
      </article>
    </>
  );
};

export default Users;
