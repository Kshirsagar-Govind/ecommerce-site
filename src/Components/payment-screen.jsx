import React, { Component } from "react";
import "./CSS/master-css.scss";
import Test from "./Assets/test.jpg";
import { Link } from "react-router-dom";
class PaymentScreen extends Component {
  render() {
    return (
      <div className="payment-screen">
        <div className="product-section">
          <img src={Test} alt="" />
          <span>
            <h3 className="lek-20-bold">Title</h3>
            <p className="lek-16-regular">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit, hic.
            </p>
          </span>
        </div>
        <div className="table-section">
          <h3 className="lek-20-bold">Cart Item Details</h3>
          <table>
            <tbody>
              <tr className="t-heads">
                <th className="lek-18-bold">Item Name</th>
                <th className="lek-18-bold">Item Quantity</th>
                <th className="lek-18-bold">Item Cost</th>
              </tr>

              <tr className="t-data">
                <th className="lek-16-regular">Item Name</th>
                <th className="lek-16-regular">Item Quantity</th>
                <th className="lek-16-regular">Item Cost</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pay-n-address-section">
          <div className="address-section">
            <label className="lek-20-bold" htmlFor="">
              Your Delivery Address
            </label>
            <p className="lek-14-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              obcaecati sed culpa reprehenderit error vitae, velit saepe cumque
              eum in!
            </p>
            <Link className="primary_button lek-16-regular" to="/user-account">
              Edit Address
            </Link>
          </div>
          <div className="payment-section">
            <label className="lek-20-bold" htmlFor="">
              Payment
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentScreen;
