import logo from './logo.svg';
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

    <div className="App bg-black">
       {preloader&& <Preloader/>}
      <div className='container md:max-w-[1380px] px-3 mx-auto'>
        <div className='bg-[url(./assets/images/herosection.gif)] flex  flex-col sm:min-h-screen bg-no-repeat bg-cover bg-center'>
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
