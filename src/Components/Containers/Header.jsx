import { Component } from "react";
import CartIcon from "../Assets/SVG/my_cart_icon";
import ProfileIcon from "../Assets/SVG/profile_icon";
import SearchIcon from "../Assets/SVG/search_icon";
import WishlistIcon from "../Assets/SVG/wishlist_icon";
import ProfileSVG from "../Assets/SVG/profile.svg";
import LoginSVG from "../Assets/SVG/login.svg";
import LogoutSVG from "../Assets/SVG/logout.svg";

import { connect } from "react-redux";
import "../CSS/master-css.scss";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#ffffff",
      showPopup: false,
      userData: {},
      auth: false,
    };
  }

  componentDidMount() {
    console.log(this.state.userData);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.user !== state.userData) {
      //Change in props
      return {
        userData: props.user,
        auth: true,
      };
    }
    return null; // No change to state
  }

  render() {
    return (
      <div id="navbar_wrapper">
        <div class="brand">
          <a
            href="/home-page"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            GameShop
          </a>
        </div>
        <div id="search_bar">
          <input type="text" id="search_bar_input" placeholder="search" />
          <div
            id="searchIcon"
            onMouseEnter={() => {
              this.setState({
                color: "#00cd90",
              });
            }}
            onMouseLeave={() => {
              this.setState({
                color: "#ffffff",
              });
            }}
          >
            <SearchIcon />
          </div>
        </div>
        <div id="options">
          <div
            className="option"
            onClick={() => this.setState({ showPopup: !this.state.showPopup })}
          >
            <ProfileIcon />
          </div>

          <div className="option">
            <a href="/wish-list">
              <WishlistIcon />
            </a>
          </div>

          <div className="option">
            <a href="/cart-list">
              <CartIcon />
            </a>
          </div>
        </div>
        {this.state.showPopup ? (
          <Profile user={this.state.userData.name !== ""} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.setUserData,
  };
};
export default connect(mapStateToProps, null)(Header);

// export default ;
const Profile = ({ user }) => {
  const history = useHistory();
  const logout = () => {
    // alert("logout");
    localStorage.removeItem("persist:root");
  };
  return (
    <div className="acc-popup">
      <ul>
        <li>
          <a href="/user-account">
            <img src={ProfileSVG} alt="" />
            Account
          </a>
        </li>
        {user ? (
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="/registration"
          >
            <li onClick={() => logout()}>
              <img src={LogoutSVG} alt="" />
              Logout
            </li>
          </a>
        ) : (
          <li>
            <a href="/registration">
              <img src={LoginSVG} alt="" />
              Log In
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
