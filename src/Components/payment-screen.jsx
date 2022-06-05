import React, { Component } from "react";
import "./CSS/master-css.scss";
import Test from "./Assets/test.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
class PaymentScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productData: {},
      userData: {},
      addressData: {},
      img: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.user !== state.userData) {
      //Change in props
      console.log(props.user);
      return {
        userData: props.user,
      };
    }
    return null; // No change to state
  }

  componentDidMount() {
    console.log(this.props.match.params.p_id);
    this.getAllDataFirst(this.props.match.params.p_id);
  }

  getAllDataFirst = async p_id => {
    try {
      const product = await axios.get(
        `${process.env.REACT_APP_HOST}/get-product-data/${p_id}`
      );
      const userAddress = await axios.get(
        `${process.env.REACT_APP_HOST}/get-user-address/${this.state.userData
          .id}`
      );

      this.setState({
        productData: product.data.data,
        addressData: userAddress.data.message,
        img: product.data.data.product_images[0].imgURL,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="payment-screen">
        <div className="product-section">
          <img src={this.state.img} alt="" />
          <span>
            <h3 className="lek-20-bold">
              {" "}
              {this.state.productData.product_Name}
            </h3>
            <p className="lek-16-regular">
              {" "}
              {this.state.productData.product_Decsription}
            </p>
          </span>
        </div>
        <div className="table-section">
          <h3 className="lek-20-bold">Cart Item Details</h3>
          <table className="">
            <tbody>
              <tr className="t-heads">
                <th className="lek-18-bold">Item Name</th>
                <th className="lek-18-bold">Item Quantity</th>
                <th className="lek-18-bold">Item Cost</th>
              </tr>

              <tr className="t-data">
                <th className="lek-16-regular">
                  {this.state.productData.product_Name}
                </th>
                <th className="lek-16-regular">1</th>
                <th className="lek-16-regular">
                  {this.state.productData.product_Price}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pay-n-address-section">
          <div className="address-section">
            <label className="lek-20-bold" htmlFor="">
              Your Delivery Address
            </label>
            <h4>
              {this.state.addressData.full_name} -{" "}
              {this.state.addressData.contact}{" "}
            </h4>
            <p className="lek-14-regular">{this.state.addressData.address}</p>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              className="secondary_button lek-16-regular"
              to="/user-account"
            >
              Edit Address
            </Link>
          </div>
          <div className="payment-section">
            <label className="lek-20-bold" htmlFor="">
              Payment
            </label>
            <div className="mx-auto">
              <button className="primary_button lek-14-regular py-3 px-3">
                PLACE MY ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.setUserData,
  };
};
export default connect(mapStateToProps, null)(PaymentScreen);
