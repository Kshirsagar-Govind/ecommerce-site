import React, { Component, useEffect, useRef } from "react";
import "../CSS/alignment-css.css";

const RateMeter = props => {
  useEffect(() => {
    if (props.star === "1") {
      document.getElementById("rating_perc").style.width = props.rating + "%";
    } else if (props.star === "2") {
      document.getElementById("rating_perc_2").style.width = props.rating + "%";
    } else if (props.star === "3") {
      document.getElementById("rating_perc_3").style.width = props.rating + "%";
    } else if (props.star === "4") {
      document.getElementById("rating_perc_4").style.width = props.rating + "%";
    } else if (props.star === "5") {
      document.getElementById("rating_perc_5").style.width = props.rating + "%";
    }
  });

  return (
    <div className="RateMeter flex">
      <h3 className="heading_6 h10_margin">{props.star} Rating</h3>
      <div className="rating_bar h10_margin">
        {props.star === "1" ? (
          <div id="rating_perc" />
        ) : props.star === "2" ? (
          <div id="rating_perc_2" />
        ) : props.star === "3" ? (
          <div id="rating_perc_3" />
        ) : props.star === "4" ? (
          <div id="rating_perc_4" />
        ) : (
          <div id="rating_perc_5" />
        )}
      </div>
      <h3 className="heading_6 h10_margin">
        {props.rating < 100 ? props.rating : "100"}%
      </h3>
    </div>
  );
};

export default RateMeter;
