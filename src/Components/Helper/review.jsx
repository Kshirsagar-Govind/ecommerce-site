import React, { Component } from "react";

class Review extends Component {
  render() {
    return (
      <div id="review">
        <div className="review_header">
          <div className="">
            <h3 className="heading_4 h10_margin">Review Title</h3>
            <h5 className="heading_6 h10_margin">Purchased On - 00/00/0000</h5>
          </div>
          <div className="stars">***</div>
        </div>
        <br />
        <h4 className="heading_1_small_grey h10_margin"> Reviewer Name</h4>
        <p className="heading_6">sadasdad</p>
        <div className="d-flex">
          <button className="primary_button">Agree</button>
          <button className="secondary_button" style={{ marginLeft: "20px" }}>
            Disagree
          </button>
        </div>
        <br />
        <div className="hr_line_2" />
      </div>
    );
  }
}

export default Review;
