import React, { Component } from "react";
import "../Components/CSS/master-css.scss";
import AddvertiseSection from "./Containers/[ Container ]addSection";
import ProductCard from "./Containers/[ Container ]productCard";
import axios from "axios";
import { connect, Connect } from "react-redux";
import { getAllProduct } from "../Services/Actions/[ Product ] getAllProductsData";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.props.getAllProductsData();

    if (this.props.all_products.data !== undefined) {
      console.log(this.props.all_products.data);
      this.setState({
        products: this.props.all_products.data,
      });
    }
  }

  componentDidUpdate(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        products: this.props.all_products.data,
      });
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
            "No Products"
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    all_products: state.AllProducts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllProductsData: () => {
      dispatch(getAllProduct());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
