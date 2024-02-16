import React from "react";
import logo from "../assets/images/ailogo.webp";

const Preloader = () => {
  return (
    <div className="bg-[#001418] flex justify-center flex-col items-center fixed top-0 left-0 right-0 bottom-0 h-full z-50">
      <div className="flex items-center animate-bounce">
          <p className=" ff-rech text-[70px] font-bold text-center text-[#02CDCF]">
            Nex
          </p>
          <img src={logo} alt="lo" className="pl-3"  />
      </div>
    </div>
  );
};

export default Preloader;
