import React from 'react'
import { Link} from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import workImage from '../utils/workdata.json'

gsap.registerPlugin(ScrollTrigger)
const Works = () => {
  useGSAP(() => {
    gsap.to('.heading', {
      y: -50,
      duration: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.heading',
        scroller: 'body',
        start: 'top 30%',
        end: 'top 90%',
        scrub: 2,

      }
    }
    )


    gsap.to('.link',{
      // opacity:0,
      duration:3,
      scrollTrigger:{
        trigger:'.link',
        scroller:'body',
        // markers:true,
        start: 'top 10%',
        end: 'top -150%',
        scrub:1,
      }
    })
    

  })
  return (
    <>
   
      <div className='workbody min-h-screen w-full  py-[80px] md:py-0 bg-mainBg'>
      <h2 className='heading text-[40px] md:text-[60px] 2xl:text-[70px] font-bold font-[Ubuntu] text-center text-white pb-16 md:pb-0 pt-2'>Works/Practices</h2>
        <div  className='workDiv w-full h-full grid-cols-1  grid md:grid-cols-4 justify-items-center items-center md:gap-[10px] gap-5 '>

          {/* {workImage.map((item, i) => (
          <Link key={i} to={item.link} className='linkImage h-[300px] md:h-[60%]  w-[300px] 2xl:w-[400px] relative top-0 rounded-3xl overflow-hidden bg-teal-600 hover:translate-y-[-20px] duration-[0.2s] ease-linear flex flex-col items-center justify-center' target='_blank'>
           
            <img src={item.image} className='image h-[100%] w-full object-cover bg-center duration-[1s] ease-linear' alt={item.text} />
            <p className='textPara text-emeraldText bg-mainBg capitalize text-2xl md:text-3xl font-semibold flex items-center justify-center absolute top-0 h-full w-full opacity-0 duration-300 ease-linear'>{item.text}</p>

          </Link>
        ))} */}

          <Link to="https://shanta1996.github.io/insta_love_react/" className='link h-[300px] md:h-[80%] w-[300px] 2xl:w-[400px] rounded-3xl overflow-hidden relative bg-teal-700' target='_blank'>
            <p className='text-white p-8 text-xl md:text-2xl font-semibold text-center '>Instagram love react</p>
            <img src="/lovereact.webp" className='workImage h-full w-full object-cover ' alt="instagram love react" />
            <p className='textPara opacity-0 duration-300 ease-linear h-full w-full bg-teal-700 absolute top-0 flex flex-col items-center justify-center text-2xl md:text-3xl font-semibold'>Instagram love react
              <span className='text-xl font-normal mt-6'>Click here</span>
            </p>
          </Link>
          <Link to="https://shanta1996.github.io/Add-remove-button/" className='link h-[300px] md:h-[80%] w-[300px] 2xl:w-[400px] rounded-3xl overflow-hidden relative bg-teal-700 ' target='_blank'>
            <p className='text-white p-8 text-xl md:text-2xl font-semibold text-center '>Add-remove button</p>
            <img src="/friends.webp" className='workImage h-full w-full object-cover ' alt="add-removepage" />
            <p className='textPara opacity-0 duration-300 ease-linear h-full w-full bg-teal-700 absolute top-0 flex flex-col items-center justify-center text-2xl md:text-3xl font-semibold'>Add-remove button
              <span className='text-xl font-normal mt-6'>Click here</span>
            </p>
          </Link>
          <Link to="https://shanta1996.github.io/cursor-js/" className='link h-[300px] md:h-[80%] w-[300px] 2xl:w-[400px] rounded-3xl overflow-hidden relative bg-teal-700 ' target='_blank'>
            <p className='text-white p-8 text-xl md:text-2xl font-semibold text-center '>Cursor</p>
            <img src="/cursor.png" className='workImage h-full  object-cover' alt="cursorpage" />
            <p className='textPara opacity-0 duration-300 ease-linear h-full w-full bg-teal-700 absolute top-0 flex flex-col items-center justify-center text-2xl md:text-3xl font-semibold'>Cursor
              <span className='text-xl font-normal mt-6'>Click here</span>
            </p>
          </Link>
          <Link to="https://tharu-culture.vercel.app/" className='link h-[300px] md:h-[80%] w-[300px] 2xl:w-[400px] rounded-3xl overflow-hidden relative bg-teal-700 ' target='_blank'>
            <p className='text-white p-8 text-xl md:text-2xl font-semibold text-center '>Tharu-culture</p>
            <img src="https://d34vm3j4h7f97z.cloudfront.net/optimized/4X/0/8/0/0801b0d30238a77b70d28b5db37848ee58350afd_2_333x500.jpeg" className=' h-full  object-cover' alt="sidcupclone" />
            <p className='textPara opacity-0 duration-300 ease-linear h-full w-full bg-teal-700 absolute top-0 flex flex-col items-center justify-center text-2xl md:text-3xl font-semibold'>Tharu-culture
              <span className='text-xl font-normal mt-6'>Click here</span>
            </p>
          </Link>
        </div>
      </div>

    </>
  )
}

export default Works