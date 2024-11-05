import React, { useState } from 'react'


export const UserInput = () => {
    const [input, setInput] = useState("");
  return (
    <>
        <h1 className='font-bold'>Task: Show user input in real time.</h1>
        <input
        className='border-2 outline-none'
        type="text"
        placeholder='type anything.'
        onChange={(e)=>setInput(e.target.value)} /> 
        <p>User Input: {input}  </p>
        <br />
    </>
  )
}
