import React, { useState } from 'react'

const Cursor = () => {
    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()
    window.addEventListener('mousemove',(val)=>{
       setCursorX(val.pageX)
       setCursorY(val.pageY)
    })
  return (
    <>
    <div style={{left:cursorX+'px',top:cursorY+'px'}} className='absolute h-[30px] w-[30px] bg-teal-700 rounded-full mix-blend-difference blur-lg'></div>

    <div style={{left:cursorX+'px',top:cursorY+'px'}} className='absolute h-[100px] w-[100px] blur-[100px] bg-teal-500 rounded-full mix-blend-difference'></div>
    </>
  )
}

export default Cursor