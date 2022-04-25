import { useEffect, useState } from "react";
import axios from "axios";

import Test from "../Assets/test.jpg";
import AlertPopup from "../Alerts/alert-popup";
const CartListItem = ({ product, user_id }) => {
  const [ productData, _setProductData ] = useState({});
  const [ productImage, _setProductImage ] = useState("");
  const [ showAlert, _setShowAlert ] = useState(false);

  const [ myAlert, _setAlert ] = useState({
    a_header: "",
    a_msg: "",
    a_type: "",
  });

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

  const removeFromCartlist = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_HOST}/remove-from-cart/${user_id}`,
        { product_id: product.product_id }
      );
      console.log(res);

      getProduct();
      alert_popup("SUCCESS", "Item Removed From the cart", "success");
    } catch (error) {
      alert_popup("ERROR", "Something went wrong", "failed");
    }
  };

  const BuyNow = async () => {
    window.open("/pay-now");
  };

  const alert_popup = (header, msg, type) => {
    _setAlert({
      a_header: header,
      a_msg: msg,
      a_type: type,
    });
    _setShowAlert(true);
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
        <button className="primary_button" onClick={() => BuyNow()}>
          Buy Now
        </button>
        <button
          className="secondary_button"
          onClick={() => removeFromCartlist()}
        >
          Remove
        </button>
      </div>
      {showAlert ? (
        <div className="dark-back">
          <AlertPopup
            heading={myAlert.a_header}
            message={myAlert.a_msg}
            ok={() => {
              _setShowAlert(false);
              getProduct();
            }}
            type={myAlert.a_type}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CartListItem;
