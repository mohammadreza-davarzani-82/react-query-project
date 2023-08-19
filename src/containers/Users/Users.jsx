import React from "react";
import Card from "../../components/Card/CardUsers";
import { useQuery } from "react-query";
import services from "../../shared/api/services";
import UsersDetail from "../../components/User/UserDetail/UsersDetail";
import AddUser from "../../components/User/AddUser/AddUser";
const Users = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [id, setId] = React.useState(undefined);

  const options = {
    method: "GET",
  };
  const handleShowModal = (id) => {
    setShowModal(true);
    setId(id);
  };
  const { data, isError, error, isLoading, refetch } = useQuery(
    "users",
    () => services.requestService(options),
    {
      staleTime: 3000,
      keepPreviousData: true,
    }
  );

  return isLoading ? (
    <div className="loading">Data Loading.....</div>
  ) : isError ? (
    <div className="loading">Error? {error?.toString()}</div>
  ) : (
    <>
      <article className="grid grid-cols-5">
        {data.data.map((res) => {
          return <Card refetch={refetch} id={id} key={res.id} data={res} onClick={handleShowModal} />;
        })}
      </article>
      <AddUser  refetch={refetch}/>
      <UsersDetail id={id} setShowModal={setShowModal} showModal={showModal} />
    </>
  );
};

export default Users;
