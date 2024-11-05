import React, {useEffect, useState} from "react";
import { ThemeContext } from "./Components/18DarkTheme/ThemeContext";
import { CartProvider } from "./Components/19AddToCart/CartContext";
import { AuthProvider } from "./Components/23Authentification/AuthContext";
import { TranslationProvider } from "./Components/25Translation/TranslationContext";
import {
  Comp,
  Counter,
  UserInput,
  DisplayList,
  ToggleSwitch,
  FetchData,
  Timer,
  ChangeBg,
  SimpleRouter,
  RandomQuote,
  ImgUploader,
  Auth,
  DisplayWeather,
  SearchBar,
  Pagination,
  ColorPicker,
  ResponsiveMenu,
  DarkTheme,
  AddToCart,
  Counter2,
  TodoList,
  Pagination2,
  Auth2,
  Draggable,
  Translation,
  FetchMultiple,
  MultiState,
  ImageGallery,

} from "./Components/index";


const App = () => {

  const [themeMode, setThemeMode] = useState('light');     // It belongs to 18th Project (Dark Theme)

  const toggleTheme = () =>{
    if(themeMode === 'light') setThemeMode('dark');
    else if(themeMode === 'dark') setThemeMode('light');
  }

  useEffect(()=>{
    let elem = document.querySelector('html')
    elem.classList.remove("light", "dark")
    elem.classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <Comp />
      <Counter />
      <UserInput />
      <DisplayList />
      <ToggleSwitch />
      <FetchData />
      <Timer />
      <ChangeBg />
      <SimpleRouter />
      <RandomQuote />
      <ImgUploader />
      <Auth />
      <DisplayWeather />
      <SearchBar />
      <Pagination />
      <ColorPicker />
      <ResponsiveMenu />
      <ThemeContext.Provider value={{themeMode, toggleTheme}}>
        <DarkTheme />
      </ThemeContext.Provider>
      <CartProvider>
        <AddToCart />
      </CartProvider>
      <Counter2 />
      <TodoList />
      <Pagination2 />
      <AuthProvider>
        <Auth2 />
      </AuthProvider>
      <Draggable />
      <TranslationProvider>
        <Translation />
      </TranslationProvider>
      <FetchMultiple />
      <MultiState />
      <ImageGallery />
    </>
  );
};

export default App;
