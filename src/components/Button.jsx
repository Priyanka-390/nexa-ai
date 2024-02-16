import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className={`${props.name} ff-rech hover:border-white border-transparent border-[3px] duration-300 hover:text-white font-bold md:text-lg text-base text-[#0B0A0A] md:py-[18px] sm:py-4 py-3 md:px-8 sm:px-6 px-5 bg-[#02CDCF] rounded-[12px]`}>
       {props.text}
      </button>
    </div>
  );
};

export default Button;
