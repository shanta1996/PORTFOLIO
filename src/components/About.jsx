import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const About = () => {

useGSAP(()=>{

  
  gsap.from('.about ',{
    x:100,
    opacity:0,
    duration:2,
    scrollTrigger:{
      trigger:'.about',
      scroller:'body',
      start:'top 100%',
      scrub:1,
    }
  })

})


  return (
    <>
    <div  className='headIng h-[70vh] md:h-screen w-full bg-slate-800 flex items-center justify-center'>
      <div  className='main w-full h-full flex flex-col items-center justify-center gap-[20px] md:gap-[40px] border-t-[1px] px-0 md:px-[100px] '>
        <h2 className='about text-[40px] md:text-[60px] 2xl:text-[70px] font-bold font-[Ubuntu] pr-16 md:pr-0'>About Me</h2>
        <p className='text-white w-[300px] md:w-auto max:h-[300px] md:max-h-auto  text-[25px] md:text-[30px] 2xl:text-[35px]  md:px-1 leading-[35px] md:leading-[50px] md:text-center'>As a passionate developer, I am dedicated to transforming ideas into seamless, user friendly applications. My goal is to bring ideas to life with precision, creativity, and a strong attention to detail.</p>
      </div>
      </div>
    </>
  )
}

export default About