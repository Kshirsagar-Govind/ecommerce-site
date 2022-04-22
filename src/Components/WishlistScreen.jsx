import React, { Component } from "react";
import ProductCard from "./Containers/[ Container ]productCard";
import "../Components/CSS/master-css.scss";
import WishListItem from "./Containers/[Container]wishList";
import { connect } from "react-redux";

class WishListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      auth: false,
    };
  }
  componentDidMount() {
    if (this.state.userData.name == "") {
      return alert("Login First");
    }
    this.setState({ auth: true });
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

  render() {
    if (!this.state.auth) {
      return (
        <div>
          <a href="/registration">Please Login</a>
        </div>
      );
    } else
      return (
        <div>
          <WishListItem />
          <WishListItem />
          <WishListItem />
          <WishListItem />
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
export default connect(mapStateToProps, null)(WishListScreen);
