import React, { useState } from "react";

export const ColorPicker = () => {
    const[color, setColor] = useState('#fff');
  return (
    <>
      <h1 className="font-bold">
        Task: Build a Color Picker that allows a user to pick a color.
      </h1>
      <input type="color" onChange={(e)=> setColor(e.target.value)}/>
      <div className="w-28 h-28" style={{background: color}}>{color}</div> <br />
    </>
  );
};
