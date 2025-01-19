import React from 'react'
import About from '../components/About'
import ForeGround from '../components/ForeGround'
import Name from '../components/Name'
import Works from '../components/Works'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
import Cursor from '../components/Cursor'

const HomePage = () => {
  return (
    <>
    <Cursor/>
    <Name/>
    <ForeGround/>
    <About/>
    <Works/>
    <Skill/>
    <Contact/>
    </>
  )
}

export default HomePage