import React, { useState } from "react";

export const ChangeBg = () => {
  const [color, setColor] = useState("white");
  return (
    <>
      <h1 className="font-bold">Task: Change background on Button Click</h1>
      <div className={`w-full h-[200px] bg-${color}-500 border border-black`}>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => {
            if( color === 'red') setColor("white");
            else setColor("red")
          }}
        >
          Change
        </button>
      </div> <br />
    </>
  );
};
