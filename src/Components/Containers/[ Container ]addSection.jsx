import React, { Component } from "react";
import "../CSS/master-css.scss";
import Img from "../Assets/add_section.png";
export default class AddvertiseSection extends Component {
  render() {
    return (
      <div id="ad_section_wrapper">
        <div id="ad_section">
          <img src={Img} alt="" />
          <div className="testing-header">
            <h1>New Arrivals</h1>
          </div>
        </div>
      </div>
    );
  }
}
