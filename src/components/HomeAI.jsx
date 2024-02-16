import React from "react";
import homeimg from "../assets/images/ai-powered.webp";
import Button from "./Button";

const HomeAI = () => {
  return (
    <div className="lg:pt-[86px] lg:pb-[75px] md:py-16 sm:py-12 z-[1] py-4 relative overflow-x-clip" id="home">
      <div className="container max-w-[1246px] px-3 mx-auto">
        <div className="flex flex-row flex-wrap -mx-3 items-end">
          <div className="lg:w-1/2 w-full px-3 flex justify-center "data-aos="fade-right">
            <div className="relative z-[1]">
              <img src={homeimg} alt="home" className="hover:scale-95 duration-300" />
              <div className="w-[231px] h-[231px] z-[-1] bg-[#02CDCF] blur-[250px]  absolute left-[15%] top-[2%]  rounded-full"></div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full px-3" data-aos="fade-left">
            <h2 className="ff-rech text-[#02CDCF] lg:text-start text-center max-lg:mx-auto md:leading-[50.4px] font-bold lg:text-[40px] md:text-4xl text-3xl">
              Ai-Powered Home Assistant
            </h2>
            <p className="sm:pt-4 pt-2 font-poppins max-w-[517px] lg:text-start text-center max-lg:mx-auto text-white font-normal opacity-[70%]">
              Nexai is an advanced AI-powered home assistant that brings the
              future to your fingertips. With its ability to engage in natural,
              fluent conversations in over 15 languages,
            </p>
            <p className="sm:pt-1.5 font-poppins max-w-[517px] lg:text-start text-center max-lg:mx-auto text-white font-normal opacity-[70%]">
              Nexai offers an incredibly futuristic experience. It can take the
              initiative to ask about your day, schedule meetings, provide
              timely reminders
            </p>
            <p className="sm:pt-1.5 font-poppins max-w-[517px] text-white lg:text-start text-center max-lg:mx-auto font-normal opacity-[70%]">
              assist with cooking by suggesting ingredients, track your fitness
              and nutrition goals, and even handle bill payments.
            </p>
            <div className="flex max-lg:justify-center ">
              <Button name="!lg:mt-10 md:mt-8 sm:mt-6 mt-4" text="Learn More" />
            </div>
          </div>
        </div>
      </div>
                <div className="w-[228px] h-[228px] blur-[200px] bg-[#02CDCF] rounded-full absolute z-[-1] top-[30%] right-0"></div>

    </div>
  );
};

export default HomeAI;
