import React, { useState } from "react";

export const Pagination = () => {
  const items = [
    "Apple","Banana","Orange","Mango","Pineapple","Grapes",
    "Strawberry","Blueberry","Watermelon","Kiwi","Papaya",
    "Peach","Cherry","Lemon","Lime","Pomegranate","Coconut",
    "Pear","Plum","Dragonfruit"
  ];
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <h1 className="font-bold">
        Task: Build a Pagination Component to navigate through large list of
        items.
      </h1>
      <h2 className="font-medium">Page Content</h2>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <span className="font-medium">Page Number</span>
      {pageNumbers.map((item, index) => (
        <button
          className="cursor-pointer p-1 font-medium text-blue-500"
          key={index}
          onClick={() => setCurrentPage(item)}
        >
          {item}
        </button> 
      ))} <br /> <br />
    </>
  );
};
