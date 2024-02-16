import React from "react";
import Button from "./Button";
import rightrings from "../assets/images/right.webp"

const Ready = () => {
  return (
    <div className="pb-2 xl:pt-72 lg:pt-40 md:pt-24 sm:pt-16 pt-12 relative z-[1] overflow-x-clip" id="about">
      <div className="container max-w-[1140px] px-3 mx-auto">
        <div className="md:flex items-center flex-wrap justify-between">
                  <h2 className="text-[#FCFCFC] ff-rech lg:text-[40px] md:text-4xl text-3xl font-bold max-w-[517px]">Ready to get started <span className="text-[#02CDCF]">Talk to us Today</span>  </h2>
                  <Button name="!mt-3 md:mt-0" text="Get Started" />
        </div>
          </div>
      <div className="w-[228px] h-[228px] blur-[200px] bg-[#02CDCF] rounded-full absolute z-[-1] top-[50%] left-[-20%]"></div>
      <img src={rightrings} alt="ring" className=" absolute md:block hidden top-[50%] right-0"/>
    </div>
  );
};

export default Ready;
