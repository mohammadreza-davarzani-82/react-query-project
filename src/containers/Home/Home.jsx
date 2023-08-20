import React, { useState } from "react";
import { useQuery } from "react-query";
import services from "../../shared/api/services";
import AddUser from "../../components/User/AddUser/AddUser";
import UsersDetail from "../../components/User/UserDetail/UsersDetail";
import Users from "../../components/Users/Users";
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(undefined);

  const options = {
    method: "GET",
  };
  const handleShowModal = (id) => {
    setShowModal(true);
    setId({
        id:id,
        type:null
    })  
};
  const getId = (id , type) =>{
    setId({
        id:id,
        type:type
    })
    console.log(id.type)
  }
  const { data, isError, error, isLoading, refetch } = useQuery(
    "users",
    () => services.requestService(options),
    {
      staleTime: 3000,
      keepPreviousData: true,
    }
  );
  return (
    <>
      <Users data={data} isError={isError} error={error} id={id} isLoading={isLoading} refetch={refetch} getId={getId}  handleShowModal={handleShowModal}/>
      <AddUser refetch={refetch} />
      <UsersDetail id={id?.id} setShow={setShowModal} showModal={showModal} />
    </>
  );
};

export default Home;
