import "./App.css";
import Herosec from "./components/Herosec";
import Mynav from "./components/Mynav";
import HomeAI from "./components/HomeAI";
import Uniquesec from "./components/Uniquesec";
import Blockchain from "./components/Blockchain";
import Footer from "./components/Footer";
import Ready from "./components/Ready";
import Utilitysec from "./components/Utilitysec";
import Whatsec from "./components/Whatsec";
import Mnexa from "./components/Mnexa";
import Backtop from "./components/Backtop";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
document.body.classList.add("overflow-hidden");

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  const [preloader, setpreloader] = useState(true);
  setTimeout(() => {
    setpreloader(false);
    document.body.classList.remove("overflow-hidden");
  }, 3000);
  return (
    <div className=" bg-[#040404] ">
      {preloader && <Preloader />}
      <div className="sm:px-[30px] px-[10px]  py-3 relative">
        <div className="bg-[url(./assets/images/bgimg.webp)] flex lg:bg-size flex-col max-w-[1440px] w-full mx-auto sm:min-h-[740px] bg-no-repeat bg-cover lg:bg-center bg-right relative z-10">
          <Mynav />
          <Herosec />
        </div>
        <div className="bg-gradient-to-b to-[#040404] from-[rgba(4,4,4,0)] absolute bottom-[-5%] w-full left-0 right-0 z-[1] h-[106px]"></div>
      </div>
      <HomeAI />
      <Uniquesec />
      <Blockchain />
      <Mnexa />
      <Whatsec />
      <Utilitysec />
      <Ready />
      <Footer />
      <Backtop />
    </div>
  );
}

export default App;
