import React, { Component } from "react";
import ProductCard from "./Containers/[ Container ]productCard";
import "./CSS/item-view.css";
import RateMeter from "./Helper/RateMeter";
import Review from "./Helper/review";

class ItemViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "10",
      star: "1",
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div id="view_n_feature">
          <div className="img-section">
            <h1 className="heading_5">Product Images</h1>
            <img src="" alt="" />
          </div>
          <div className="features-section">
            <br />
            <div className="d-flex">
              <h1 className="heading_2">Product Name</h1>
              <button
                className="secondary_button"
                style={{ marginLeft: "300px" }}
              >
                Add to Wishlist
              </button>
            </div>

            <br />
            <div className="hr_line_1" />
            <br />
            <div className="features-list">
              <h3 className="heading_5">RAM</h3>
              <h3 className="heading_6">Feature</h3>
              <h3 className="heading_5">ROM </h3>
              <h3 className="heading_6">Feature</h3>
              <h3 className="heading_5">Battery </h3>
              <h3 className="heading_6">Feature</h3>
              <h3 className="heading_5">Camera </h3>
              <h3 className="heading_6">Feature</h3>
              <h3 className="heading_5">Camera </h3>
              <h3 className="heading_6">Feature</h3>
            </div>
          </div>
        </div>
        <h3
          className="heading_2"
          style={{
            paddingLeft: "20px",
            marginBottom: "10px",
            color: "#380000",
          }}
        >
          Related Suggestions
        </h3>

        <div className="realted-suggestions-section">
          <div className="suggestions">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="line_1" />

        <div className="rating-and-review-section">
          <div className="rating-section">
            <h3
              className="heading_2"
              style={{
                marginBottom: "10px",
                marginTop: "20px",

                color: "#380000",
              }}
            >
              Rating and Reviews
            </h3>
            <RateMeter rating={"80"} star={"5"} />
            <RateMeter rating={"69"} star={"4"} />
            <RateMeter rating={"30"} star={"3"} />
            <RateMeter rating={"80"} star={"2"} />
            <RateMeter rating={"50"} star={"1"} />
            <br />
            <div>
              <button className="primary_button">Write a Review...</button>
            </div>
          </div>

          <div className="reviews">
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemViewScreen;
