import { useEffect, useState } from "react";
import axios from "axios";

import Test from "../Assets/test.jpg";
const WishListItem = ({ product, user_id }) => {
  const [ productData, _setProductData ] = useState({});
  const [ productImage, _setProductImage ] = useState("");
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_HOST}/get-product-data/${product.product_id}`
    );
    console.log(res.data.data.product_images[0]);
    // productData.product_images[0].imgURL
    _setProductImage(res.data.data.product_images[0].imgURL);
    _setProductData(res.data.data);
  };

  const removeFromWishlist = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_HOST}/remove-from-wishlist/${user_id}`,
      { product_id: product.product_id }
    );
    console.log(res);
  };

  const AddToCartlist = async () => {
    //
    const res = await axios.post(
      `${process.env.REACT_APP_HOST}/add-to-cart/${user_id}`,
      { product_id: product.product_id }
    );
    console.log(res);
  };

  return (
    <div className="wish-list-wrapper">
      <div className="left-section">
        <img src={productImage} alt="" />
        <span className="desc">
          <h1 className="heading_4">{productData.product_Name}</h1>
          <h3 className="lek-20-regular">
            Price -{productData.product_Price}{" "}
          </h3>
        </span>
      </div>

      <div className="right-section">
        <button className="primary_button" onClick={() => AddToCartlist()}>
          Add To Cart
        </button>
        <button
          className="secondary_button"
          onClick={() => removeFromWishlist()}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
