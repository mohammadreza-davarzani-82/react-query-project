import React, { useEffect } from "react";
import Card from "../../shared/Card/CardUsers";
import InfiniteScroll from "react-infinite-scroller";
import { useQuery } from "react-query";
import services from "../../api/services";
import UsersDetail from "./UsersDetail";
import AddUser from "../AddUser/AddUser";
const Users = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [id, setId] = React.useState("");

  const options = {
    method: "GET",
  };
  const handleShowModal = (id) => {
    setShowModal(true);
    setId(id);
  };
  const { data, isError, error, isLoading } = useQuery(
    "users",
    () => services.requestService(options),
    {
      staleTime: 3000,
      keepPreviousData: true,
    }
  );
  console.log(data);

  if (isLoading) return <div className="loading">Data Loading.....</div>;
  if (isError) return <div className="loading">Error? {error.toString()}</div>;

  return (
    <>
      <article className="grid grid-cols-5">
        {data.data.map((res) => {
          return (
            <Card
              key={res.id}
              data={res}
              showModal={showModal}
              onClick={handleShowModal}
            />
          );
        })}
      </article>
      <AddUser setShowModal={setShowModal} showModal={showModal}/>
      <UsersDetail id={id} setShowModal={setShowModal} showModal={showModal} />
    </>
  );
};

export default Users;
