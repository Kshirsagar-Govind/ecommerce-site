import { Component } from "react";
import CartIcon from "../Assets/SVG/my_cart_icon";
import ProfileIcon from "../Assets/SVG/profile_icon";
import SearchIcon from "../Assets/SVG/search_icon";
import WishlistIcon from "../Assets/SVG/wishlist_icon";
import "../CSS/header.css";
import "../CSS/master-css.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#ffffff",
    };
  }

  render() {
    return (
      <div id="navbar_wrapper">
        <div class="brand">GameShop</div>
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
          <div className="option">
            <ProfileIcon />
          </div>

          <div className="option">
            <WishlistIcon />
          </div>

          <div className="option">
            <CartIcon />
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
