import { useEffect, useState } from "react";
import axios from "axios";

import Test from "../Assets/test.jpg";
import Loader from "../Alerts/loader";
import { useHistory } from "react-router-dom";
import AlertPopup from "../Alerts/alert-popup";
const WishListItem = ({ product, user_id, reload }) => {
  const [ productData, _setProductData ] = useState({});
  const [ loading, _setLoading ] = useState(false);
  const [ productImage, _setProductImage ] = useState("");
  const [ showAlert, _setShowAlert ] = useState(false);

  const [ myAlert, _setAlert ] = useState({
    a_header: "",
    a_msg: "",
    a_type: "",
  });
  const navigate = useHistory();
  useEffect(
    () => {
      getProduct();
    },
    [ loading ]
  );
  const getProduct = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_HOST}/get-product-data/${product.product_id}`
    );
    console.log(res.data.data.product_images[0]);
    // productData.product_images[0].imgURL
    _setProductImage(res.data.data.product_images[0].imgURL);
    _setProductData(res.data.data);
  };

  const alert_popup = (header, msg, type) => {
    _setAlert({
      a_header: header,
      a_msg: msg,
      a_type: type,
    });
    _setShowAlert(true);
  };

  const removeFromWishlist = async () => {
    _setLoading(true);
    const res = await axios.post(
      `${process.env.REACT_APP_HOST}/remove-from-wishlist/${user_id}`,
      { product_id: product.product_id }
    );

    alert_popup("SUCCESS", "Item Removed From the wishlist", "danger");
    _setLoading(false);
  };

  const AddToCartlist = async () => {
    //
    _setLoading(true);
    const res = await axios.post(
      `${process.env.REACT_APP_HOST}/add-to-cart/${user_id}`,
      { product_id: product.product_id }
    );

    alert_popup("SUCCESS", "Item added to your cart successfully", "success");

    _setLoading(false);
  };

  const show = () => {
    window.open(`/item-view-page/${productData.product_id}`);
  };

  return (
    <div className="wish-list-wrapper">
      <div className="left-section pointer" onClick={show}>
        <img src={productImage} alt="" />
        <span className="desc">
          <h1 className="heading_4">{productData.product_Name}</h1>
          <h3 className="lek-20-regular">
            Price -{productData.product_Price}{" "}
          </h3>
        </span>
      </div>
      {loading ? (
        <div className="right-section">
          <div className="just-center">
            <Loader />
          </div>
        </div>
      ) : (
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
      )}

      {showAlert ? (
        <div className="dark-back">
          <AlertPopup
            heading={myAlert.a_header}
            message={myAlert.a_msg}
            ok={() => {
              _setShowAlert(false);
              reload();
            }}
            type={myAlert.a_type}
          />
        </div>
      ) : null}
    </div>
  );
};

export default WishListItem;
