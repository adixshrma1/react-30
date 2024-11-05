import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0);
    const increase = () =>{
        setCount(count + 1);
    }
    const decrease = () =>{
      if(count > 0) setCount(count - 1);
    }
  return (
    <>
      <h1 className='font-bold'>Task: Make a counter.</h1>
      Count is: {count} <br />
      <button className='border-2' onClick={()=>(increase())}>Increase</button>
      <button className='border-2' onClick={()=>(decrease())}>Decrease</button> <br /> <br />
    </>
  )
}
