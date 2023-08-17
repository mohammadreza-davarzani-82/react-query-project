import React, { useEffect } from 'react'
import Modal from '../../shared/Modal/Modal'
import services from '../../api/services';
import { useQuery } from 'react-query';
import CardUsersDetail from '../../shared/Card/CardUsersDetail';

const UsersDetail = (props ) => {
  const {showModal , id,setShowModal} = props
  const options = {
    method:"GET",
    apiRoute : `/${id}` 
  }
  
  const { data, isError, error, refetch,isLoading } =
  useQuery(
      ["userDetails",id],
       ()=>services.requestService(options),
      { 
      
        staleTime:3000,
        keepPreviousData : true,
        enabled:false
       }
    );
    console.log(data?.data)
    useEffect(() => {
      if(showModal) refetch()
    }, [showModal])
    
  if (isLoading) return <div className="loading">Data Loading.....</div>;
  if (isError) return <div className="loading">Error? {error.toString()}</div>;

  return (
    <>
      {showModal ? (
          <Modal title="Users Detail" setShowModal={setShowModal}>
            <CardUsersDetail result={data?data?.data:{}}/>
          </Modal>
        ) : null}
      
    </>
  )
}

export default UsersDetail