import React, { useState } from "react";

export const SearchBar = () => {
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Strawberry",
    "Blueberry",
    "Mango",
    "Pineapple",
  ];

  const [searchedTerm, setSearchedTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchedTerm.toLowerCase())
  );

  return (
    <>
      <h1 className="font-bold">
        Task: Build a Searchbar that filters list of items based on user input.
      </h1>
      <p>Search Fruits to buy.</p>
      <input
        className="border-2"
        type="text"
        onChange={(e) => setSearchedTerm(e.target.value)}
      />
       <ul>
          {(filteredItems.length > 0) ? (
            filteredItems.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <h3>item does not present</h3>
          )}
        </ul> <br />
    </>
  );
};
