import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import images from '../utils/skillLogoImages.json'

const Skill = () => {
  useGSAP(() => {
    gsap.from('.skillHeading', {
      x: -50,
      opacity:0,
      scrollTrigger:{
        trigger:'.skillHeading',
        // markers:true,
        scroller:'body',
        start:'top 100%',
        // end:'top 100%',
        scrub:1
      }
    })
    gsap.from('.icons', {
      x: 50,
      opacity:0,
      scrollTrigger:{
        trigger:'.icons',
        scroller:'body',
        start:'top 100%',
        // markers:true,
        scrub:1
      }
    })
  })
  return (
    <>
      <div  className='skill h-[60vh] w-full bg-mainBg flex-col flex md:flex-row items-center justify-center gap-[50px] md:gap-[200px] border-t-[1px] border--[1px]'>
        <h2 className='skillHeading  text-[40px] md:text-[60px] 2xl:text-[70px] font-bold font-[Ubuntu] text-center'>Skills</h2>
        <div className='icons grid grid-cols-3 md:grid-cols-7 justify-items-center items-center md:pr-0 pr-12 gap-[10px] md:gap-0'>
          {images.map((image, index) => (
            <div key={index} className='skillImage h-[70px] flex items-center justify-center w-[70px] rounded-full overflow-hidden mx-3 relative '>
              <img src={image.src} alt="" className=' w-full h-full object-cover rounded-full border-2 p-3 mx-3' />
              <p className='skillPara ease-linear duration-[0.2s] absolute bg-white text-[#17202a] w-full h-full flex items-center justify-center font-semibold rounded-full opacity-0 left-[-100%]'>{image.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skill