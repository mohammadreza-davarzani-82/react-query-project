import Button from "../Button/Button";

const Modal = ({ setShowModal,children ,title}) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative h-auto  my-6 mx-auto w-[22rem]">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold">{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent w- text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
                {children}
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <Button
              styles=" w-64 p-2 text-white  rounded-md  bg-red-600  shadow-xl h-auto"
              text="Close"
                onClick={() => setShowModal(false)}
              />
            
              
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  
  );
};

export default Modal;
