import { createContext, useContext, useState } from "react";

const TranslationContext = createContext();

export const TranslationProvider = ({children})=>{
    const [language, setLanguage] = useState('en');
    const localLanguages = {
        en: {
            greeting: 'hello world!',
            welcome: 'welcome to my app.'
        },
        es: {
            greeting: 'hola mundo!',
            welcome: 'beinvenido a mi aplicacion'
        }
    }
    const displayContent = (key) =>{
        return localLanguages[language][key];
    }
    
    return (
        <TranslationContext.Provider value={{language, setLanguage, displayContent}}>
            {children}
        </TranslationContext.Provider>
    )
}

export function useTranslation(){
    return useContext(TranslationContext);
}