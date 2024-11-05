import React from 'react'
import { useTranslation } from './TranslationContext'

export const Translation = () => {
  const {language, setLanguage, displayContent} = useTranslation();
  return (
    <>
        <h1 className='font-bold'>Task: Create a localisation system using useContext to provide Translation for the entire App.</h1>
        <button className="px-2 py-1 bg-green-500 text-white" onClick={()=> setLanguage('en')}>English</button>
        <button className="px-2 py-1 bg-green-500 text-white ml-1" onClick={()=>setLanguage('es')}>Spanish</button> <br />
        {displayContent("greeting")} <br />
        {displayContent("welcome")}
        <br /> <br />
    </>
  )
}
