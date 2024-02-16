import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ring from "../assets/images/right.webp"
import ring2 from "../assets/images/left.webp"

const slidercard = [
  {
    head: 1,
    text: "Security and Privacy",
    class: "pb-[145px] ",
    aos:"fade-up"
  },
  {
    head: 2,
    text: "Transparent and Reliable Data Management",
    class: "!translate-y-20",
    aos:"fade-down"
  },
  {
    head: 3,
    text: "Self-learning and Personalization",
    aos:"fade-up"
  },
  {
    head: 4,
    text: "Automated and Transparent Transactions",
    class: "!translate-y-20",
    aos:"fade-down"
  },
];
const Blockchain = () => {
  const hexa = slidercard.map((slidercard, e) => (
    <div
      key={e} data-aos={`${slidercard.aos}`}
      className={`${slidercard.class} max-w-[327px] min-h-[367px] pt-[70px] md:mt-[60px] sm:mt-10 mt-8  w-full bg-[url(./assets/images/Polygon.webp)] bg-full bg-center bg-no-repeat`}
    >
      <div className="flex justify-center">
        <div
          className="w-[58px] h-[58px] rounded-full bg-[#040404]  shadow-[inset_0px_4px_16px_0px#02CDCF99] flex justify-center items-center
                "
        >
          <span className="text-white sm:text-[32px] text-2xl ff-rech font-bold text-center">
            {slidercard.head}
          </span>
        </div>
      </div>
      <p className="text-white sm:text-xl text-base ff-rech font-bold sm:leading-[32px] text-center max-w-[212px] mx-auto pt-[30px]">
        {slidercard.text}
      </p>
    </div>
  ));
  var slider1 = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-2 overflow-x-clip blockchain z-[3] relative">
      <div className="container max-w-[1140px] mx-auto  px-3 relative " id="nex">
        <h2 className="text-center lg:text-[40px] md:text-4xl text-3xl ff-rech font-bold text-[#02CDCF]">
          Blockchain & AI technology
        </h2>
        <p className=" font-poppins sm:text-base text-sm text-center  font-normal text-white max-w-[997px] opacity-[70%] md:pt-4 sm:pt-2 pt-1 mx-auto">
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by sophisticated
          artificial intelligence, it leverages blockchain technology to offer a
          secure and efficient user experience.
        </p>
        <p className=" ff-rech font-bold lg:text-[20px] text-base leading-[32px] text-white max-w-[684px] xl:pt-24 lg:pt-20 md:pt-16 sm:pt-8 pt-4 text-center mx-auto">
          By building the software on blockchain, Nexai provides the following
          advantages
        </p>
        <Slider {...slider1}>
          {hexa}
        </Slider>
      </div>
                <div className="w-[228px] h-[228px] blur-[200px] bg-[#02CDCF] rounded-full absolute z-[1] top-[20%] left-0"></div>
                <div className="w-[228px] h-[228px] blur-[200px] bg-[#02CDCF] rounded-full absolute z-[1] top-0 right-0"></div>
      <img src={ring} alt="r" className="absolute md:block hidden  right-0 top-[-10%]" />
      <img src={ring2} alt="r2" className="absolute md:block hidden  left-0 bottom-[-50%]" />
    </div>
  );
};

export default Blockchain;
