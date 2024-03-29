import React, { Component } from "react";
import ProductCard from "./Containers/[ Container ]productCard";
import "../Components/CSS/master-css.scss";
import WishListItem from "./Containers/[Container]wishList";
import { connect } from "react-redux";
import axios from "axios";
import Loader from "./Alerts/loader";
class WishListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      auth: false,
      loading: false,
      wishlist: [],
    };
  }
  componentDidMount() {
    if (this.state.userData.name == "") {
      return alert("Login First");
    }
    this.setState({ auth: true, loading: true });
    this.getWishlist();
    this.setState({ loading: false });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.user !== state.userData) {
      //Change in props
      return {
        userData: props.user,
        loading: false,
      };
    }
    return null; // No change to state
  }
  getWishlist = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_HOST}/get-user-wishlist/${this.state.userData
          .id}`
      );
      console.log(res.data.data.list);
      this.setState({ wishlist: res.data.data.list });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    if (!this.state.auth) {
      return (
        <div>
          <a href="/registration">Please Login</a>
        </div>
      );
    } else if (this.state.loading) {
      return (
        <div className="dark-back just-center">
          <Loader />
        </div>
      );
    } else
      return (
        <div>
          {this.state.wishlist.length > 0 ? (
            this.state.wishlist.map(item => (
              <WishListItem
                reload={this.getWishlist}
                product={item}
                user_id={this.state.userData.id}
              />
            ))
          ) : (
            <div className="just-center">
              <h1>Empty Wishlist</h1>
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
export default connect(mapStateToProps, null)(WishListScreen);
/*
return (
     
    );
*/
