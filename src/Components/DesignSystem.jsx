import React, { Component } from "react";
import ProductCard from "./Containers/[ Container ]productCard";
import "../Components/CSS/master-css.scss";
import WishListItem from "./Containers/[Container]wishList";

class DesignSystem extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0, star: 5 };
  }

  render() {
    return (
      <div>
        <h1 className="lek-64-regular">Lektop 64</h1>
        <h1 className="lek-48-regular">Lektop 64</h1>
        <h1 className="lek-40-regular">Lektop 64</h1>
        <h1 className="lek-36-regular">Lektop 64</h1>
        <h1 className="lek-32-regular">Lektop 64</h1>
        <h1 className="lek-28-regular">Lektop 64</h1>
        <h1 className="lek-24-regular">Lektop 64</h1>
        <h1 className="lek-20-regular">Lektop 64</h1>
        <h1 className="lek-18-regular">Lektop 64</h1>
        <h1 className="lek-16-regular">Lektop 64</h1>

        <h1 className="lek-64-bold">Lektop 64</h1>
        <h1 className="lek-48-bold">Lektop 64</h1>
        <h1 className="lek-40-bold">Lektop 64</h1>
        <h1 className="lek-36-bold">Lektop 64</h1>
        <h1 className="lek-32-bold">Lektop 64</h1>
        <h1 className="lek-28-bold">Lektop 64</h1>
        <h1 className="lek-24-bold">Lektop 64</h1>
        <h1 className="lek-20-bold">Lektop 64</h1>
        <h1 className="lek-18-bold">Lektop 64</h1>
        <h1 className="lek-16-bold">Lektop 64</h1>
        {/* <WishListItem />
        <WishListItem />
        <WishListItem />
        <WishListItem /> */}
      </div>
    );
  }
}

export default DesignSystem;
