import React, { useEffect } from "react";
import Modal from "../../Modal/Modal";
import services from "../../../shared/api/services";
import { useQuery } from "react-query";
import CardUsersDetail from "../../Card/CardUsersDetail";

const UsersDetail = (props) => {
  const { showModal, id, setShowModal } = props;
  const options = {
    method: "GET",
    apiRoute: `/${id}`,
  };

  const { data, isError, error, refetch, isLoading } = useQuery(
    ["userDetails", id],
    () => services.requestService(options),
    {
      staleTime: 3000,
      keepPreviousData: true,
      enabled: false,
    }
  );
  useEffect(() => {
    if (showModal) refetch();
  }, [showModal]);

  return (
    <div>
      {isLoading ? (
        "Data Loading....."
      ) : isError ? (
        "Error:" + error?.toString()
      ) : (
        <>
          <Modal
            classModal="w-[22rem]"
            title="Users Detail"
            setShow={setShowModal}
            showModal={showModal}
            hidden={showModal}
          >
            <CardUsersDetail result={data ? data?.data : {}} />
          </Modal>
        </>
      )}
    </div>
  );
};

export default UsersDetail;
