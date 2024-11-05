import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: '',
    toggleTheme: ()=>{},
});

export const useTheme = ()=>{
    return useContext(ThemeContext);
}
