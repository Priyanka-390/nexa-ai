import React from "react";
import Button from "./Button";
import gradient from "../assets/images/gradient.webp";

const Herosec = () => {
  return (
    <div
      className="flex-grow max-sm:py-20 flex relative justify-center items-center z-[1]"
      id="home"
      data-aos="fade-right"
      data-aos-delay="3000"
    >
      <div className="container xl:max-w-[1140px] xl:px-3 px-6 mx-auto">
        <h1 className="lg:text-6xl  md:text-[55px]  sm:text-5xl text-4xl  ff-rech font-bold text-white md:!leading-[75.6px] max-w-[606px]">
          {" "}
          <span className="text-[#02CDCF]">Nexai</span> is an advanced
          AI-powered home assistant
        </h1>
        <p className=" font-poppins sm:text-base  text-sm font-normal opacity-[70%] text-white md:pt-4 pt-3 leading-[127%]">
          Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla
          odio.
        </p>
        <Button name="!lg:mt-[51px] md:mt-10 sm:mt-7 mt-4 " text="Know More" />
      </div>
      <div className="w-[228px] h-[228px] blur-[200px] bg-[#02CDCF] rounded-full absolute z-[-1] top-[30%] left-[10%]"></div>
   
    </div>
    
  );
};

export default Herosec;

