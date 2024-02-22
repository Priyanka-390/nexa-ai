import React from "react";
import Button from "./Button";
import aiimg from "../assets/images/AI-img.webp";

const Whatsec = () => {
  return (
    <div className="xl:pt-40 lg:pt-32 md:pt-20 sm:pt-16 px-3 pt-12">
      <div className="container relative z-20 overflow-hidden xl:py-40 lg:py-30 md:py-20 sm:py-16 pb-10 pt-4 border border-solid border-[#FCFCFC] rounded-[24px]  bg-[url(./assets/images/aiimg.webp)] xl:max-w-[1340px] mx-auto  xl:px-3 px-6">
        <div className="flex md:flex-row items-center flex-col-reverse xl:px-24 lg:px-20 md:px-16 sm:px-12  flex-wrap -mx-3">
          <div
            className="md:w-7/12 w-full max-md:pt-4 px-3"
            data-aos="fade-right"
          >
            <h2 className="ff-rech lg:text-[40px] max-md:text-center max-md:mx-auto md:text-4xl text-3xl font-bold text-[#02CDCF] ">
              What is NexAi?
            </h2>
            <p className="md:pt-4 sm:pt-3 pt-2 font-poppins sm:text-base max-md:text-center max-md:mx-auto text-sm text-white opacity-[70%] font-normal max-w-[564px]">
              Beyond its convenience, Nexai revolutionizes the way you interact
              with your home environment. It enhances productivity, efficiency,
              and overall well-being. From managing your schedules to
              transforming the way you experience smart living, Nexai opens up a
              world of possibilities.
            </p>
            <p className="sm:pt-2 pt-1 font-poppins sm:text-base text-sm text-white opacity-[70%] max-md:text-center max-md:mx-auto font-normal max-w-[564px]">
              Nexai's software can be installed on all your smart devices,
              including smartphones, computers, smart TVs, and kitchen
              appliances. It acts as a centralized control hub, allowing you to
              manage and interact with all your devices seamlessly. Whether it's
              adjusting the temperature, turning on appliances, or even
              accessing files on your home computer from anywhere, Nexai
              empowers you with effortless control.
            </p>
            <div className="flex md:justify-start justify-center">
              <Button name="!lg:mt-10 md:mt-8 sm:mt-6 mt-4" text="Learn More" />
            </div>
          </div>
          <div
            className="md:w-5/12 w-full px-3 relative z-[1]"
            data-aos="fade-left"
          >
            <img
              src={aiimg}
              alt="img"
              className="mix-blend-hue hover:scale-95 duration-300 z-[2]"
            />
            <div className="absolute inset-0 bg-[#02CDCF] rounded-[500px] blur-[400px] z-[2]"></div>
            <div className="w-[228px] h-[228px] blur-[200px] bg-[#02CDCF] rounded-full absolute z-[1] bottom-[20%] left-[20%]"></div>
          </div>
        </div>
        <div className="w-[228px] h-[228px] blur-[400px] bg-[#02CDCF] rounded-full absolute z-[-1] bottom-0 left-0"></div>
      </div>
    </div>
  );
};

export default Whatsec;
