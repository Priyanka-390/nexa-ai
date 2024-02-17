
import './App.css';
import Herosec from './components/Herosec';
import Mynav from './components/Mynav';
import HomeAI from './components/HomeAI';
import Uniquesec from './components/Uniquesec';
import Blockchain from './components/Blockchain';
import Footer from './components/Footer';
import Ready from './components/Ready';
import Utilitysec from './components/Utilitysec';
import Whatsec from './components/Whatsec';
import Mnexa from './components/Mnexa';
import Backtop from './components/Backtop';
import Preloader from './components/Preloader';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
document.body.classList.add("overflow-hidden");


function App() {
   useEffect(() => {
    AOS.init(
      {
         once: true,
         duration:2000,
      }
        );
      }, [])
    const [preloader, setpreloader] = useState(true)
  setTimeout(() => {
    setpreloader(false)
    document.body.classList.remove("overflow-hidden")
  }, 3000);
  return (

    <div className="App bg-[#040404] ">
       {preloader&& <Preloader/>}
      <div className=' sm:px-[30px] px-[10px] bg-[#040404] py-3'>
        <div className='bg-[url(./assets/images/herosection.gif)] flex lg:bg-size flex-col md:min-h-screen bg-no-repeat bg-cover bg-center'>
          <Mynav/>
          <Herosec/>
        </div>
       
      </div>
       <HomeAI />
        <Uniquesec />
      <Blockchain />
    <Mnexa/>
      <Whatsec/>
        <Utilitysec/>
        <Ready/>
      <Footer />
      <Backtop/>
    </div>
  );
}

export default App;
