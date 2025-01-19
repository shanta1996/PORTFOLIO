import React from 'react'
import Routes from './routes/Routes'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-mainBg text-white'>
    <Routes/>
    </div>
  )
}

export default App