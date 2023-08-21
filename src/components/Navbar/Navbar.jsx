import { Icon } from "@iconify/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { type } from "../../redux/action/index";

const Navbar = () => {
  const isTheme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const dark ="w-full shadow-xl h-16 bg-gray-800"
  const light ="w-full shadow-xl h-16 bg-white"
  if(isTheme){
    document.body.style.backgroundColor = "rgb(3, 7, 18)";
  }
  else{
    document.body.style.backgroundColor = "white";
  }

  return (
    <header className={isTheme ? dark : light}>
      <div className="flex flex-row justify-between m-auto">
        <div className="flex  ml-5 mt-2   bg-violet-500 justify-between w-12 h-12 rounded-full shadow-lg ">
          <span className="my-auto ml-[19px] text-white">A</span>
          <p className={isTheme ? "my-auto ml-6 text-white font-semibold" :"my-auto ml-6 text-slate-700"}>Admin</p>
        </div>
        <button className="mt-3 mr-3" onClick={() => dispatch(type())}>
          <Icon
            className={isTheme ? "text-violet-400" : "text-violet-500"}
            icon={
              isTheme ? "icon-park-twotone:moon" : "icon-park-twotone:moon"
            }
            width="30"
            height="30"
          />{" "}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
