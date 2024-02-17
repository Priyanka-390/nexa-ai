import React from "react";
import { Facebook, Telegram, Twitr } from "./Icons";

const Footer = () => {
  return (
    <div className="bg-[url(./assets/images/footbg.webp)] relative z-[1] overflow-x-clip lg:mt-20 lg:pt-36 md:pt-28 sm:pt-20 pt-10  bg-cover bg-center bg-no-repeat">
      <div className="container x:max-w-[1140px]  xl:px-3 px-6 mx-auto">
        <div className="flex flex-row flex-wrap -mx-3 ">
          <div className="md:w-1/2 w-full px-3">
            <p className="ff-rech font-bold md:pt-10 text-white sm:text-base text-sm opacity-[70%] max-w-[356px]">
              Nullam viverra natoque amet et sed scelerisque viverra fringilla
              platea. Ullamcorper.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <a target="blank" className="hover:-translate-y-2 duration-300" href="https://www.facebook.com/login/">
                <Facebook />
              </a>
              <a target="blank"  className="hover:-translate-y-2 duration-300" href="https://twitter.com/i/flow/login">
                <Twitr />
              </a>
              <a target="blank"  className="hover:-translate-y-2 duration-300" href="https://telegr.am/user_mgt/login">
                <Telegram />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-full px-3 pb-8 max-md:pt-4 ">
            <div className="flex flex-row flex-wrap -mx-3 max-md:pt-4 ">
              <div className="w-1/2 px-3 flex md:justify-end">
                <ul>
                                  <li className="ff-rech font-bold text-white sm:text-lg text-base">Quick links</li>
                                  <li className="md:pt-5 sm:pt-4 pt-3"><a href="" className="ff-rech hover:opacity-[100%] duration-300 sm:text-base text-sm text-white opacity-[70%] font-bold ">Home</a></li>
                                  <li className="md:pt-5 sm:pt-4 pt-3"><a href="" className="ff-rech hover:opacity-[100%] duration-300 sm:text-base text-sm text-white opacity-[70%] font-bold ">Features</a></li>
                                  <li className="md:pt-5 sm:pt-4 pt-3"><a href="" className="ff-rech hover:opacity-[100%] duration-300 sm:text-base text-sm text-white opacity-[70%] font-bold ">Marketplace</a></li>
                                  <li className="md:pt-5 sm:pt-4 pt-3"><a href="" className="ff-rech hover:opacity-[100%] duration-300 sm:text-base text-sm text-white opacity-[70%] font-bold ">Tokens</a></li>
                                  <li className="md:pt-5 sm:pt-4 pt-3"><a href="" className="ff-rech hover:opacity-[100%] duration-300 sm:text-base text-sm text-white opacity-[70%] font-bold ">NexChat</a></li>
                                  <li className="md:pt-5 sm:pt-4 pt-3"><a href="" className="ff-rech hover:opacity-[100%] duration-300 sm:text-base text-sm text-white opacity-[70%] font-bold ">About</a></li>
                </ul>
                          </div>
                           <div className="w-1/2 px-3 flex md:justify-end">
                <ul>
                                  <li className="ff-rech font-bold text-white sm:text-lg text-base">Information's</li>
                                  <li className="md:pt-5 sm:pt-4 pt-3"><a href="" className="ff-rech sm:text-base hover:opacity-[100%] duration-300 text-sm text-white opacity-[70%] font-bold ">Contact</a></li>
                                  <li className="md:pt-5 sm:pt-4 pt-3"><a href="" className="ff-rech sm:text-base hover:opacity-[100%] duration-300 text-sm text-white opacity-[70%] font-bold ">Phone</a></li>
                                  <li className="md:pt-5 sm:pt-4 pt-3"><a href="" className="ff-rech sm:text-base hover:opacity-[100%] duration-300 text-sm text-white opacity-[70%] font-bold ">terms</a></li>
                                  <li className="md:pt-5 sm:pt-4 pt-3"><a href="" className="ff-rech sm:text-base hover:opacity-[100%] duration-300 text-sm text-white opacity-[70%] font-bold ">Privacy</a></li>
                                  
                </ul>
              </div>
            </div>
          </div>
              </div>
              <div className="w-full border-b h-[2px] border-[#FCFCFC] opacity-[40%]"></div>
              <p className="md:py-5 sm:py-4 py-3 text-center mx-auto ff-rech text-base font-bold text-white opacity-[70%] ">@Copyright.nexai</p>
          </div>
                    <div className="w-[228px] h-[228px] blur-[200px] bg-[#02CDCF] rounded-full absolute z-[-1] top-0 right-0"></div>

    </div>
  );
};

export default Footer;
