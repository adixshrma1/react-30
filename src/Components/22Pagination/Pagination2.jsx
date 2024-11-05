import React, { useReducer } from "react";

export const Pagination2 = () => {
  const items = Array.from(
    { length: 25 },
    (item, index) => `Item ${index + 1}`
  );

  const reducer = (state, action) => {
    switch (action.type) {
        case 'PREVIOUS':
            return {...state, currentPage: state.currentPage-1}
        case 'NEXT':
            return {...state, currentPage: state.currentPage+1}
        default:
            return state;
    }
  };

  const [paginationState, dispatch] = useReducer(reducer, {
    currentPage: 1,
  });

  const itemsPerPage = 5;

  const indexOfLastItem = paginationState.currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <h1 className="font-bold">
        Task: Create a pagination component using useReducer.
      </h1>
      <span className="font-bold">Page No. {paginationState.currentPage}</span>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button
        className="bg-blue-400 text-white"
        onClick={()=>dispatch({ type: "PREVIOUS" })}
        disabled={paginationState.currentPage === 1}
      >
        Previous
      </button>{" "}
      <button
        className="bg-blue-400 text-white"
        onClick={()=>dispatch({ type: "NEXT" })}
        disabled={indexOfLastItem >= items.length}
      >
        Next
      </button> <br /> <br />
    </>
  );
};
