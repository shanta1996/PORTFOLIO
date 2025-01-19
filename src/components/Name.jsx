import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const Name = () => {

      // const useName = useRef()
    // useGSAP(() => {
    //     gsap.to(useName.current, {
    //         y:100,
    //         stagger:true
    //     })
    // })
    useGSAP(() => {
        let tl=gsap.timeline()
        tl.to('.paragraph', {
            y:-30,
           rotateX:90,
           duration:0.4,
           delay:0.5,
            // opacity:0,
            stagger:0.2,
        })
        tl.to('.nameDiv',{
            y:'-100%',
            duration:0.8,
            // delay:2,
        })
        tl.to('.maindiv',{
            display:'none',
            duration:0.9,
            // delay:2,
              
        })
    })
  
    return (
        <>
            <div className='maindiv fixed z-[999] capitalize text-[#374151] text-[40px] font-semibold h-screen w-full gap-0 leading-[40px] flex flex-col items-center justify-center '>
                    <p className='paragraph p-1 z-10'>shanta</p>
                    <p className='paragraph p-1 z-10'>chaudhary</p>
                    <div className='nameDiv bg-[#cbd1d6] absolute h-full w-full'></div>
            </div>
        </>
    )
}

export default Name