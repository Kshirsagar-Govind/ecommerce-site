import React, { Component } from "react";
import ProductCard from "./Containers/[ Container ]productCard";
import "../Components/CSS/master-css.scss";
import WishListItem from "./Containers/[Container]wishList";
import { connect } from "react-redux";
import axios from "axios";
import CartListItem from "./Containers/[Container]cartItem";
import AlertPopup from "./Alerts/alert-popup";
import Loader from "./Alerts/loader";
class CartScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      auth: false,
      loading: false,
      cartlist: [],
    };
  }
  componentDidMount() {
    if (this.state.userData.name == "") {
      return alert("Login First");
    }
    this.setState({ auth: true, loading: true });
    this.getCartList();
    this.setState({ loading: false });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.user !== state.userData) {
      //Change in props
      return {
        userData: props.user,
      };
    }
    return null; // No change to state
  }
  getCartList = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_HOST}/get-user-cart/${this.state.userData.id}`
      );
      console.log(res.data.data.list);
      this.setState({ cartlist: res.data.data.list });
    } catch (error) {
      console.log(error);
    }
  };

  showAlert = () => {};

  render() {
    if (!this.state.auth) {
      return (
        <div>
          <a href="/registration">Please Login</a>
        </div>
      );
    } else if (this.state.loader) {
      return (
        <div className="dark-back">
          <Loader />
        </div>
      );
    } else
      return (
        <div>
          {this.state.cartlist.length > 0 ? (
            this.state.cartlist.map(item => (
              <CartListItem product={item} user_id={this.state.userData.id} />
            ))
          ) : (
            <div className="just-center">
              <Loader />
            </div>
          )}

          <div className="wish-list-bill" />
        </div>
      );
  }
}
const mapStateToProps = state => {
  return {
    user: state.setUserData,
  };
};
export default connect(mapStateToProps, null)(CartScreen);
