import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext";

export const DarkTheme = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(()=>{
    const elem = document.querySelector('html')
    elem.classList.remove('light', 'dark')
    elem.classList.add(theme);
  })

  return (
    <>
      <div className="dark:bg-gray-800 dark:text-gray-300">
        <h1 className="font-bold ">
          Task: Build a context provider that allows users to switch between
          light and dark themes, and use the context in different parts of the
          app to apply the selected theme.
        </h1>
        <label>Switch Theme</label>
        <input type="checkbox" onChange={() => toggleTheme()} />
      </div> <br />
    </>
  );
};
