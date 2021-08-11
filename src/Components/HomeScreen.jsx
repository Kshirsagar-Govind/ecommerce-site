import React, { Component } from "react";
import "../Components/CSS/home-screen.css";
import "../Components/CSS/master-css.css";
import AddvertiseSection from "./Containers/[ Container ]addSection";
import ProductCard from "./Containers/[ Container ]productCard";
import axios from "axios";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount = async () => {
    const result = await axios.get(
      "http://localhost:5500/gameshop/get-product-data"
    );
    console.log(result.data.data);
    this.setState({
      products: result.data.data,
    });
  };

  shouldComponentUpdate() {
    if (this.state.products !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div id="home_screen">
        <div className="advertise_section">
          <AddvertiseSection />
        </div>

        <div className="cards_section">
          {this.state.products.length > 0 ? (
            this.state.products.map((item, index) => (
              <ProductCard product={item} key={index} />
            ))
          ) : (
            // console.log(this.state.products)
            "No Products"
          )}
        </div>
      </div>
    );
  }
}

export default HomeScreen;
