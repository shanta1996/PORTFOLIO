import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const ForeGround = () => {
  useGSAP(()=>{
    let tl=gsap.timeline()
    tl.from('.below',{
      y:-100,
      rotateX:90,
      duration:0.5,
      delay:1,
      stagger:-1
    })
    tl.from('.text',{
      opacity:0,
      // y:-100,
      duration:0.4,
    })
    gsap.to('.mainDiv',{
      opacity:0,
      duration:0.4,
      scrollTrigger:{
        trigger:'.mainDiv',
        scroller:'body',
        // markers:true,
        start:'top 0%',
        end:'top -100%',
        scrub:1,
        pin:true,
      }
    })
  })

  return (
    <>
      <div className='mainDiv md:h-screen h-[80vh] w-full flex flex-col gap-[10px] md:gap-0  justify-center items-center tracking-[1px] px-10 md:px-auto pt-[100px]'>
        <h2 className='text text-[40px] md:text-[60px] 2xl:text-[70px] font-bold mx-[300px] font-[Ubuntu] text-center leading-[50px] md:leading-[90px] '>
          Transforming Creative Ideas Into Reality</h2>
        <span className='below loader'></span>
        <h3 className='below text-[18px] md:text-[20px] 2xl:text-[25px] text-center'>Code with Imagination, Build with Innovation</h3>
        <div className='absolute w-full h-full flex items-center justify-end'>
          <div className='hidden md:block'>
            <p className='rotate-[90deg] mt-24'>Scroll down</p>
            <span className='scroller  rotate-[90deg] mt-[80px]'></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForeGround