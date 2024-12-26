import React from "react";
import { ThemeProvider } from "./Components/18DarkTheme/ThemeContext";
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
      <ThemeProvider>
        <DarkTheme />
      </ThemeProvider>
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
