import React, { Component } from "react";
import product_image from "../Assets/test.jpg";
import { useHistory, Link } from "react-router-dom";

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    console.log(this.props, "this.props");
  };

  goToItemView = () => {};

  render() {
    return (
      <div className="ProductCard">
        <img src="" alt="" />
        <h3 style={{ marginLeft: "15px" }} className="heading_4_card" />
        <div className="product_data">
          <div className="rnp">
            <div className="rating_container">
              <h6 className="heading_6">0</h6>
            </div>
            <h6 className="heading_6" style={{ marginLeft: "15px" }}>
              Price - /-
            </h6>
          </div>
        </div>
      </div>
      // <div className="ProductCard" onClick={this.goToItemView}>
      //   <img src={this.props.product.product_images[0].imgURL} alt="" />
      //   <h3 style={{ marginLeft: "15px" }} className="heading_4_card">
      //     {this.props.product.product_Name}
      //   </h3>
      //   <div className="product_data">
      //     <div className="rnp">
      //       <div className="rating_container">
      //         <h6 className="heading_6">0</h6>
      //       </div>
      //       <h6 className="heading_6" style={{ marginLeft: "15px" }}>
      //         Price - {this.props.product.product_Price} /-
      //       </h6>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default ProductCard;
