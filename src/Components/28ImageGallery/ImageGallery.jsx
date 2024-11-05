import React, { useState } from 'react'

export const ImageGallery = () => {
    const [index, setIndex] = useState(0);
    const images = [
        'https://wallpapers.com/images/featured/beautiful-actress-hd-yy6cb4fn6wfemejj.jpg',
        'https://m.media-amazon.com/images/M/MV5BNzlkNjBmOWUtOTgzZS00OWIzLThkNWEtZTg5MGY2ODAyYzZjXkEyXkFqcGc@._V1_.jpg',
        'https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/4:3/w_1440,h_1080,c_limit/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg',
        'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/03/jw3.jpg'
    ]
    const currentImage = images[index];
  return (
    <>
        <h1 className='font-bold'>Task: Build a basic Image Gallery to allow users to navigate between Images and display the current Image</h1>
        <img className='h-96 w-96 object-cover' src={currentImage}/>
        <button className='bg-red-500 text-white px-2 py-1 rounded m-1' disabled={index===0} onClick={()=> setIndex(index-1)}>Previous</button>
        <button className='bg-red-500 text-white px-2 py-1 rounded' disabled={index===images.length-1} onClick={()=> setIndex(index+1)}>Next</button>
    </>
  )
}
