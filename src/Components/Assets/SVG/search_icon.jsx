import React, { Component, useEffect, useState } from "react";

const SearchIcon = () => {
  const [ color, setColor ] = useState("#380000");

  return (
    <div
      className=""
      onMouseEnter={() => {
        setColor("#ffffff");
      }}
      onMouseLeave={() => {
        // color = "#ffffff"
        setColor("#380000");
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-search"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke={color}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="10" cy="10" r="7" />
        <line x1="21" y1="21" x2="15" y2="15" />
      </svg>
    </div>
  );
};

export default SearchIcon;
