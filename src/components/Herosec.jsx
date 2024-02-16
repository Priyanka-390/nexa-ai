import React from 'react'
import Button from './Button'

const Herosec = () => {
  return (
    <div className='flex-grow flex justify-center items-center' data-aos="fade-right"  data-aos-delay='3000'>
          <div className="container max-w-[1140px] px-3 mx-auto">
              <h1 className='lg:text-6xl  md:text-[55px] md:pl-10 pl-4 sm:text-5xl text-4xl  ff-rech font-bold text-white max-w-[606px]'> <span className='text-[#02CDCF]'>Nexai</span> is an advanced AI-powered home assistant</h1>
              <p className=' font-poppins sm:text-base md:pl-10 pl-4 text-sm font-normal text-white md:pt-4 pt-3'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
            <Button name="!lg:mt-[51px] md:mt-10 sm:mt-7 mt-4 md:!ml-10 ml-4" text="Know More"/>
       </div>
    </div>
  )
}

export default Herosec
