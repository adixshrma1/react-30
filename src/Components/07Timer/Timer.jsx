import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const [seconds, setSeconds] = useState(20);
    useEffect(()=>{
        if(seconds > 0){
            const timer = setTimeout(()=>{ setSeconds(seconds-1)}, 1000)
            return ()=> clearTimeout(timer);
        }
    }, [seconds])
  return (
    <>
        <h1 className='font-bold'>Title: Build a timer that count down from a specific time.</h1>
        <p>Time Left: {seconds} seconds</p>
        <br />
    </>
  )
}
