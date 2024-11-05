import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
        <nav className='h-auto bg-red-600 flex justify-around'>
            <Link className='bg-blue-500 text-white' to={'contact'}>Contact</Link>
            <Link className='bg-blue-500 text-white' to={'about'}>About</Link>
        </nav>
        Welcome to Home
        <br /> <br />
    </>
  )
}

export default Home