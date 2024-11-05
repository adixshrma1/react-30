import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../routes/Home";
import Contact from "../../routes/Contact";
import About from "../../routes/About";

export const SimpleRouter = () => {
  return (
    <>
      <h1 className="font-bold">Task: Create a Simple Browser Router Setup</h1>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
