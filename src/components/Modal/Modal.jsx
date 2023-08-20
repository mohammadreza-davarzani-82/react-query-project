import Button from "../Button/Button";
import React from "react";
const Modal = ({ setShow, children, title, classModal, showModal, footer }) => {
  return showModal ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className={"relative h-auto  my-6 mx-auto " + classModal}>
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <header className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold">{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShow(false)}
              >
                <span className="bg-transparent w- text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </header>
            {children}
            {footer ? (
              footer
            ) : (
              <footer className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                <Button
                  styles=" w-64 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 p-2 text-white  rounded-md  bg-red-600  shadow-xl h-auto"
                  text="Close"
                  onClick={() => setShow(false)}
                />
              </footer>
            )}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null;
};

export default Modal;
