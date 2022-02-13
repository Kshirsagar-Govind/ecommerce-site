import React, { Component } from "react";
import "../CSS/master-css.scss";

export default class CardScroller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "laptop",
    };
  }
  componentDidMount() {
    this.setState({ type: "laptop" });
  }

  render() {
    return (
      <div>
        <div className="scroller-wrapper">
          <ScrollingCard />
          <ScrollingCard />
          <ScrollingCard />
          <ScrollingCard />
          <ScrollingCard />
          <ScrollingCard />
          <ScrollingCard />
          <ScrollingCard />
          <ScrollingCard />
          <ScrollingCard />
        </div>
      </div>
    );
  }
}

export const ScrollingCard = ({ data }) => {
  return (
    <div>
      <div className="scrolling_card_wrapper">
        <div className="img-section" />
        <div className="footer-section">
          <h1>Item Name - </h1>
          <h1>2500/- </h1>
        </div>
      </div>
    </div>
  );
};
