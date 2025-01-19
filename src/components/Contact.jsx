import React from 'react'
import ContactIcon from './ContactIcon';
import ContactForm from './ContactForm';
import { LuPhone } from "react-icons/lu";
import { GiRotaryPhone } from "react-icons/gi";

const Contact = () => {

  return (
    <>
      <div className='h-screen w-full bg-white text-[#17202a] '>
        <h2 className='relative text-[40px] md:text-[60px] 2xl:text-[70px] font-bold font-[Ubuntu] flex items-center justify-center border-b-[1px] border-[#17202a] py-10 md:py-7'>Contact Me
        <span className='tealTel h-[30px] w-[30px] bg-teal-700 absolute rounded-full  flex items-center justify-center top-0 left-0 text-white'><LuPhone size={20} />
        </span>
        <span className='redTel h-[30px] w-[30px] bg-red-500 absolute top-0 right-0 rounded-full flex items-center justify-center text-white'><GiRotaryPhone  size={20} /></span>
        </h2>
       
        <div className='h-[70%] 2xl:h-[75%] w-full flex-none md:flex items-center justify-between px-5 md:px-[120px] 2xl:px-[200px] mt-[40px] 2xl:mt-[30px] py-5 2xl:py-0'>
          <ContactIcon />
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default Contact