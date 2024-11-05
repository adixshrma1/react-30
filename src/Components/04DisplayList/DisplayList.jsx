import React from 'react'

export const DisplayList = () => {
    const items = ['aata', 'chawal', 'cheeni', 'daaru', 'chakna'];
  return (
    <>
        <h1 className='font-bold'>Task: Build a list Component to display list of items.</h1>
        <p>Ye saaman lekar aao.</p>
        <ul className='list-inside list-decimal'>
            { items.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        <br />
    </>
  )
}
