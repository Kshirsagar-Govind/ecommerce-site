import React, { Component, useState } from "react";

const ProfileIcon = () => {
  const [ color, setColor ] = useState("#380000");
  const [ flag, setFlag ] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setColor("#0f044c");
        setFlag(true);
      }}
      onMouseLeave={() => {
        setColor("#380000");
        setFlag(false);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-user"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke={color}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
    </div>
  );
};

export default ProfileIcon;
