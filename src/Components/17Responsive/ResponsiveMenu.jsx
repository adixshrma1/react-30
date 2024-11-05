import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1 className="font-bold">
        Task: Build a Responsive menu with hamburger icon.
      </h1>
      <nav className="flex items-center bg-gray-100">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="py-1 px-3 border"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
      <div className={`flex ${isOpen ? "" : "hidden"} `}>
        <ul className="bg-gray-800 text-white w-full cursor-pointer pl-3 py-1">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contacts</li>
        </ul>
      </div> <br />
    </>
  );
};
