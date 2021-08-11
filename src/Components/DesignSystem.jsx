import React, { Component } from "react";
import ProductCard from "./Containers/[ Container ]productCard";

class DesignSystem extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0, star: 5 };
  }

  render() {
    return (
      <div>
        <div>
          <h1>FONTS STYLING PART</h1>
          <h1 className="heading_1">Heading 1</h1>
          <h1 className="heading_1_medium">Heading 1 medium</h1>
          <h1 className="heading_1_small_grey">Heading 1 Small Grey</h1>

          <h1 className="heading_2">Heading 2</h1>
          <h1 className="heading_3">Heading 3</h1>

          <h1 className="heading_4">Heading 4</h1>
          <h1 className="heading_4_card">Heading 4</h1>

          <h1 className="heading_4_light">Heading 4 Light</h1>

          <h1 className="heading_5">Heading 5</h1>

          <h1 className="heading_6">Heading 6</h1>
          <hr />
        </div>
        {/* <div>
          <h1>BUTTONS STYLING PART</h1>
          <button className="primary_button heading_5">Text</button> <br />{" "}
          <br />
          <button className="secondary_button heading_5">Text</button> <br />{" "}
          <br />
          <button className="close_button heading_5">X</button> <br /> <br />
          <button className="special_button">Text</button> <br /> <br />
        </div>

        <div>
          <h1>TEXT INPUT BOX STYLING PART</h1>
          <input type="text" className="text_box" placeholder="placeholder" />
          <br /> <br />
          <input
            type="text"
            className="invalid_input"
            placeholder="invalid input"
          />
        </div> */}
        <div>
          <button
            className="primary_button heading_5"
            onClick={() => {
              this.setState({
                rating: this.state.rating + 10,
              });
            }}
          >
            Text
          </button>{" "}
          <br /> <h1 className="heading_1">Product Card STYLING PART</h1>
          <ProductCard />
        </div>
      </div>
    );
  }
}

export default DesignSystem;
