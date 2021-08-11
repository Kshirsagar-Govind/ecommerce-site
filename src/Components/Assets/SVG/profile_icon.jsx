import React, { Component, useState } from "react";

const ProfileIcon = () => {
  const [ color, setColor ] = useState("#ffffff");
  const [ flag, setFlag ] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setColor("#0f044c");
        setFlag(true);
      }}
      onMouseLeave={() => {
        setColor("#ffffff");
        setFlag(false);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-user"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke={color}
        fill={flag ? color : "none"}
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
