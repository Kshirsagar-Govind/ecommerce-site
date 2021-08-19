import React, { Component, useState } from "react";

const WishlistIcon = () => {
  const [ color, setColor ] = useState("#380000");

  return (
    <div
      className=""
      onMouseEnter={() => {
        setColor("#592E2E");
      }}
      onMouseLeave={() => {
        setColor("#380000");
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-heart"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={color}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
    </div>
  );
};

export default WishlistIcon;
