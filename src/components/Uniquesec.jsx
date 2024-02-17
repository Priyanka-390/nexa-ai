import React from "react";
import { Clock } from "./Icons";

const Uniquesec = () => {
  return (
    <div className="bg-black xl:pt-32 lg:py-30 md:py-20 sm:py-16 py-10 xl:pb-40" id="market">
      <div className="container xl:max-w-[1340px]  xl:px-3 px-6 mx-auto">
        <div className="bg-[url(./assets/images/serviceimg.webp)] rounded-[24px] border-solid border-[2px] border-[#FCFCFC] bg-center bg-no-repeat bg-cover xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 xl:pt-20 lg:pt-16 md:pt-12 sm:pt-10 pt-8  overflow-y-scroll w-full">
          <h2 className="text-white lg:text-[40px] md:text-4xl text-3xl ff-rech font-bold text-center">
            Unique features
          </h2>
          <p className="max-w-[397px] text-center  font-poppins sm:text-base text-sm text-white md:pt-4 sm:pt-3 pt-2 mx-auto ">
            ability to engage in natural, fluent conversations in over 15
            languages,
          </p>
          <div className="flex flex-row flex-wrap lg:py-20 md:py-16 sm:py-10 py-6 -mx-3 max-h-[512px] overflow-y-scroll"data-aos="zoom-in">
            <div className="md:w-1/2 w-full px-3 md:h-[1200px] flex flex-col max-md:items-center">
              <div className="card xl:px-6 lg:px-5 md:px-3 px-2 max-w-[364px] rounded-[16px] lg:py-[30px] md:py-6 py-4 bg-white">
                <Clock />
                <h2 className="lg:pt-[30px] md:pt-3 pt-2 ff-rech font-bold text-[#0B0A0A] lg:text-[20px] text-base  max-w-[304px]">
                  Remote Access and File Management
                </h2>
                <p
                  className="font-poppins lg:pt-2.5 pt-1 shadow-[1px_1px_24px_1px_#0000001A border-[#FCFCFC66] border-solid
 font-normal lg:text-base text-sm  text-[#0B0A0A] pb-3  max-w-[316px]"
                >
                
                  Imagine you're at work, and you realize you forgot to bring an
                  important file stored on your desktop computer at home. No
                  worries! Simply open the Nexai app on your phone, initiate a
                  call with Nexai, and request access to your computer.{" "}
                </p>
              </div>
                <div className="card xl:px-6 lg:px-5 md:px-3 px-2 lg:mt-36 md:mt-20 sm:mt-10 mt-8 max-w-[364px] rounded-[16px] lg:py-[30px] md:py-6 py-4 bg-white">
                <Clock />
                <h2 className="lg:pt-[30px] md:pt-3 pt-2 ff-rech font-bold text-[#0B0A0A] lg:text-[20px] text-base  max-w-[304px]">
                  Remote Access and File Management
                </h2>
                <p
                  className="font-poppins lg:pt-2.5 pt-1 shadow-[1px_1px_24px_1px_#0000001A border-[#FCFCFC66] border-solid
 font-normal lg:text-base text-sm  text-[#0B0A0A] pb-3  max-w-[316px]"
                >
                
                  Imagine you're at work, and you realize you forgot to bring an
                  important file stored on your desktop computer at home. No
                  worries! Simply open the Nexai app on your phone, initiate a
                  call with Nexai, and request access to your computer.{" "}
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full px-3 max-md:mt-10 flex lg:justify-end justify-center flex-col items-center md:items-end">
              <div className="card xl:px-6 lg:px-5 md:px-3 px-2 max-w-[364px] rounded-[16px] lg:py-[30px] md:py-6 py-4 bg-white">
                <Clock />
                <h2 className="lg:pt-[30px] md:pt-3 pt-2 ff-rech font-bold text-[#0B0A0A] lg:text-[20px] text-base  max-w-[304px]">
                  Real-time Home Monitoring
                </h2>
                <p
                  className="font-poppins lg:pt-2.5 pt-1 shadow-[1px_1px_24px_1px_#0000001A border-[#FCFCFC66] border-solid
 font-normal lg:text-base text-sm  text-[#0B0A0A] pb-3  max-w-[316px]"
                >
                  While you're out with your family, you may wonder if you
                  remembered to turn off the stove. Thanks to Nexai, this is no
                  longer a concern. Using the Nexai app, you can initiate a
                  video call with Nexai and activate the mini drone stationed in
                  your home.{" "}
                </p>
                          </div>
                           <div className="card xl:px-6 lg:px-5 md:px-3 px-2 lg:mt-36 md:mt-20 sm:mt-10 mt-8 max-w-[364px] rounded-[16px] lg:py-[30px] md:py-6 py-4 bg-white">
                <Clock />
                <h2 className="lg:pt-[30px] md:pt-3 pt-2 ff-rech font-bold text-[#0B0A0A] lg:text-[20px] text-base  max-w-[304px]">
                  Real-time Home Monitoring
                </h2>
                <p
                  className="font-poppins lg:pt-2.5 pt-1 shadow-[1px_1px_24px_1px_#0000001A border-[#FCFCFC66] border-solid
 font-normal lg:text-base text-sm  text-[#0B0A0A] pb-3  max-w-[316px]"
                >
                  While you're out with your family, you may wonder if you
                  remembered to turn off the stove. Thanks to Nexai, this is no
                  longer a concern. Using the Nexai app, you can initiate a
                  video call with Nexai and activate the mini drone stationed in
                  your home.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uniquesec;
