import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    text: "NexAi, Turn on light",
  },
  {
    text: "NexAi, set alarm of 5:00 am",
  },
  {
    text: "NexAi, measure this table",
  },
  {
    text: "NexAi, Turn on music",
  },
  {
    text: "NexAi, Turn on music",
  },
  {
    text: "NexAi, set alarm of 5:00 am",
  },
];

const datasec = [
  {
    text2: "NexAi, measure this table",
  },
  {
    text2: "NexAi, Turn on music",
  },
  {
    text2: "NexAi, Turn on light",
  },
  {
    text2: "NexAi, is the front door locked?",
  },
  {
    text2: "NexAi, is the front door locked?",
  },
];
const datathird = [
  {
    text3: "NexAi, Turn on TV",
  },
  {
    text3: "NexAi, Turn on music",
  },
  {
    text3: "NexAi, Turn of AC.",
  },
  {
    text3: "NexAi, Lock the front door",
  },

  {
    text3: "NexAi, Turn of AC.",
  },
];

const Mnexa = () => {
  const carddata = data.map((data, i) => (
    <div  key={i} className="px-3">
      <div
       
        className="card py-[72px]  md:max-h-[220px] max-h-[170px] h-full md:px-[43px] px-8 bg-[#090909] group hover:text-[#02CDCF] rounded-[16px] shadow-[0px_4px_20px_0px_#02CDCF29]
      "
      >
        <p className="text-white max-w-[240px] ff-rech md:text-2xl sm:text-lg text-base group-hover:text-[#02CDCF] duration-300 font-bold text-center">
          {data.text}
        </p>
      </div>
    </div>
  ));
  const carddatasec = datasec.map((datasec, i) => (
    <div  key={i} className="px-1.5">
    <div
     
      className="card py-[72px] md:max-h-[220px] max-h-[170px] h-full  group lg:mt-10 md:mt-8 sm:mt-6 mt-4 px-[43px] bg-[#090909]  mr-4 rounded-[16px] shadow-[0px_4px_20px_0px_#02CDCF29]
"
    >
      <p className="text-white max-w-[240px] ff-rech md:text-2xl  group-hover:text-[#02CDCF] duration-300 sm:text-lg text-base font-bold text-center">
        {datasec.text2}
      </p>
    </div>
    </div>
  ));
  const carddatthird = datathird.map((datathird, i) => (
    <div  key={i} className="px-1.5">
    <div
      className="card py-[72px] md:max-h-[220px] max-h-[170px] h-full group lg:mt-10 md:mt-8 sm:mt-6 mt-4 px-[43px] bg-[#090909]  mr-4 rounded-[16px] shadow-[0px_4px_20px_0px_#02CDCF29]
"
    >
      <p className="text-white max-w-[240px] ff-rech md:text-2xl group-hover:text-[#02CDCF] duration-300 sm:text-lg text-base font-bold text-center">
        {datathird.text3}
      </p>
      </div>
      </div>
  ));

  var settings = {
    dots: false,
    infine: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 4,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          autoplaySpeed: 0,
          speed: 4000,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 0,
          speed: 4000,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5,
          autoplaySpeed: 0,
          speed: 4000,
        },
      },
    ],
  };
  var slider2 = {
    dots: false,
    infine: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 4,
    pauseOnFocus: false,
    slidesToScroll: -1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };
  var slider3 = {
    dots: false,
    infine: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 4,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  return (
    <div className="md:pt-52 pt-28  overflow-x-clip relative z-[1]" id="about">
      <h2 className="text-center mx-auto ff-rech font-bold lg:text-[40px] md:text-4xl text-3xl text-[#02CDCF]">
        NexAi does all this. And more.
      </h2>
      <p className="font-poppins sm:text-base text-sm lg:pb-[90px] md:pb-16 sm:pb-10 pb-4 text-white opacity-[70%] font-normal text-center mx-auto sm:pt-4 pt-2 leading-[25.5px] max-w-[912px]">
        Nexai is an advanced home assistant that will revolutionize the way we
        interact with our smart devices at home. Powered by sophisticated
        artificial intelligence, it leverages blockchain technology to offer a
        secure and efficient user experience.
      </p>
      <Slider {...settings}>{carddata}</Slider>
      <Slider {...slider2}>{carddatasec}</Slider>
      <Slider {...slider3}>{carddatthird}</Slider>
                      <div className="w-[233px] h-[233px] blur-[200px] bg-[#02CDCF] rounded-full absolute z-[-1] top-[10%] right-[-5%]"></div>

    </div>
  );
};

export default Mnexa;
