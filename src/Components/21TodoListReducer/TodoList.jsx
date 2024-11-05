import React, { useReducer, useState } from "react";

export const TodoList = () => {

  const [input, setInput] = useState("");

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [ ...state, {id: Date.now(), value: action.payload, completed: false} ];
      case "REMOVE":
        return state.filter((item)=> item.id !== action.payload)
      case "COMPLETE":
        return state.map((item)=> item.id === action.payload ? {...item, completed: !item.completed} : item)
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, []);
  return (
    <>
      <h1 className="font-bold">
        Task: Create a simple Todo List using useReducer.
      </h1>
      <div>
        <input
          className="border-2 "
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="px-3 py-1 rounded bg-blue-500 text-white"
          onClick={() => {
            dispatch({ type: "ADD", payload: input })
            setInput("")
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          {state.map((item) => (
            <li key={item.id}>
              <span className={`${item.completed? "line-through" : ""}`}
                onClick={()=> dispatch({type: "COMPLETE", payload: item.id})}>
                {item.value}{" "}
              </span>
              <button
                onClick={()=>{dispatch({type: "REMOVE", payload: item.id})}}
                className="px-2 bg-red-500 text-white rounded">
                delete
              </button>
            </li>
          ))}
        </ul>
      </div> <br />
    </>
  );
};
