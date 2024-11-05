import React, { useReducer, useState } from "react";

export const Draggable = () => {
  const boxReducer = (state, action) => {
    switch (action.type) {
      case "MOVE":
        return { ...state, left: action.payload.left, top: action.payload.top };
      default:
        return state;
    }
  };
  const [boxState, dispatch] = useReducer(boxReducer, { left: 0, top: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialX(e.clientX - boxState.left);
    setInitialY(e.clientY - boxState.top);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleMouseMove = (e) => {
    if (isDragging) {
      const left = e.clientX - initialX;
      const top = e.clientY - initialY;
      dispatch({ type: "MOVE", payload: { left, top } });
    }
  };
  return (
    <>
      <h1 className="font-bold">
        Task: Build a draggable component using useReducer to manage its
        position
      </h1>
      <div className="relative">
        <span
          className="bg-red-500 hover:cursor-pointer w-20 h-10"
          style={{
            position: "absolute",
            top: boxState.top,
            left: boxState.left,
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          
        </span>
      </div>
      <br /> <br />
    </>
  );
};
