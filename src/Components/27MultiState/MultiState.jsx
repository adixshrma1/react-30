import React, { useReducer, useState } from "react";

export const MultiState = () => {
  const [input, setInput] = useState("");

  function reducer(state, action) {
    switch (action.type) {
      case "INC":
        return { ...state, count: state.count + 1 };
      case "DEC":
        return { ...state, count: state.count - 1 };
      case "CHANGE-TXT":
        return { ...state, text: action.payload };
        case 'TOGGLE':
            return {...state, active: !state.active}
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello world!",
    active: true,
  });
  return (
    <>
      <h1 className="font-bold">Task: Multiple States in one State.</h1>
      <p>Count: {state.count}</p>
      <button
        className="text-white bg-blue-500"
        onClick={() => dispatch({ type: "INC" })}
      >
        Increase
      </button>
      <button
        className="text-white bg-blue-500 ml-1"
        onClick={() => dispatch({ type: "DEC" })}
      >
        Decrease
      </button>
      <br /> <br />
      <p>Text: {state.text}</p>
      <input
        className="border-2"
        type="text"
        value={input}
        placeholder="enter text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-2 py-1 rounded"
        onClick={() => dispatch({ type: "CHANGE-TXT", payload: input })}
      >
        Submit
      </button> <br /> <br />

      <p>Active: {state.active ? 'True' : 'False'}</p>
      <button className="bg-yellow-500 px-1 text-white rounded"
      onClick={()=>dispatch({type: 'TOGGLE'})}>Toggle</button>
      <br /> <br />
    </>
  );
};
