import React, { Component } from "react";
import product_image from "../Assets/test.jpg";

import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { AverageRating } from "../../Services/services";
import { useState } from "react";

const ProductCard = ({ product }) => {
  let history = useHistory();
  const [ rating, _setAvgRating ] = useState(0);
  const show = () => {
    history.push(`/item-view-page/${product.product_id}`);
  };

  useEffect(
    () => {
      getProductReviews();
    },
    [ rating ]
  );

  const getProductReviews = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_HOST}/get-product-review/${product.product_id}`
    );
    if (!res.data) return;
    console.log(res.data);
    const readyRating = AverageRating(res.data);
    _setAvgRating(readyRating.final_rating?readyRating.final_rating:0);
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
              <h6 className="heading_6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-star"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#7f5345"
                  fill="#7f5345"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>

                {rating.toString().length == 1 ? (
                  rating.toString() + ".0"
                ) : (
                  rating.toString().substr(0, 3)
                )}
              </h6>
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
