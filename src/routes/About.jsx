import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
      Welcome to About page <br />
      <Link className='bg-blue-500 text-white' to={'/'}>Home</Link>
      <br /> <br />
    </>
  )
}

export default About