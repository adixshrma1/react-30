import React, { useState } from "react";

export const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <h1 className="font-bold">
        Task: Implement a basic toggle switch component.
      </h1>
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={()=>setIsChecked(!isChecked)}
          />
          <div
            className={`w-14 h-8 rounded-full ${
              isChecked ? "bg-blue-500" : "bg-gray-600"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 bg-white h-6 w-6 rounded-full transition-transform duration-300 ease-in-out ${
              isChecked ? "translate-x-full" : null
            }`}
          ></div>
        </div>
        <div>Change</div>
      </label>
      <div className={`w-24 h-24 rounded-full ${isChecked? ' bg-red-500' : 'bg-yellow-500'}`}></div>
    </>
  );
};
