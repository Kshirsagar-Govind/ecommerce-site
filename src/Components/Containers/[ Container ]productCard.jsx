import React, { Component } from "react";
import product_image from "../Assets/test.jpg";

import { useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {
  let history = useHistory();
  const show = () => {
    history.push(`/item-view-page/${product.product_id}`);
  };

  return (
    <div className="product_div" onClick={show}>
      <div className="ProductCard">
        <img src={product.product_images[0].imgURL} alt="" />

        <div className="product_data">
          <h3 style={{ marginLeft: "15px" }} className="heading_4_card">
            {product.product_Name}
          </h3>
          <div className="rnp">
            <div className="rating_container">
              <h6 className="heading_6">0</h6>
            </div>
            <h6 className="heading_6" style={{ marginLeft: "15px" }}>
              Price - {product.product_Price} /-
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

// <div className="ProductCard">
//   <img src="" alt="" />
//   <h3 style={{ marginLeft: "15px" }} className="heading_4_card" />
//   <div className="product_data">
//     <div className="rnp">
//       <div className="rating_container">
//         <h6 className="heading_6">0</h6>
//       </div>
//       <h6 className="heading_6" style={{ marginLeft: "15px" }}>
//         Price - /-
//       </h6>
//     </div>
//   </div>
// </div>
