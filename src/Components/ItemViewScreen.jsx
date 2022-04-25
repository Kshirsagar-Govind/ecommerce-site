import React, { Component } from "react";
import ProductCard from "./Containers/[ Container ]productCard";
import "../Components/CSS/master-css.scss";

import RateMeter from "./Helper/RateMeter";
import Review from "./Helper/review";
import { getSingleProduct } from "../Services/Actions/[ Product ] getSingleProductData";

import { connect } from "react-redux";
import axios from "axios";
import CardScroller, {
  ScrollingCard,
} from "./Containers/[ Container ]cardScroller";

class ItemViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "10",
      star: "1",
      product_id: this.props.match.params.product,
      product_data: {},
      userData: {},
    };
  }
  // const {}= this.props.singleProduct.data;

  componentDidMount() {
    this.props.getSingleProduct(this.state.product_id);

    // this.setState({
    //   product_data: this.props.singleProduct.data,
    // });
    // console.log(this.props);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.all_products != this.props.all_products) {
      this.setState({
        product_data: nextProps.all_products.data.find(
          item => item.product_id == this.state.product_id
        ),
      });

      return true;
    } else if (nextProps.singleProduct !== this.props.singleProduct) {
      return true;
    } else return false;
  }

  AddToWishlist = async () => {
    if (this.state.userData.name == "") {
      return alert("You Must Login First");
    }
    //
    const res = await axios.post(
      `${process.env.REACT_APP_HOST}/add-to-wishlist/${this.state.userData.id}`,
      { product_id: this.state.product_id }
    );
    console.log(res);
  };
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
    console.log(this.state.product_data);
    return (
      <div id="item-view-screen" className="item-view-section">
        {this.props.singleProduct.data !== undefined ? (
          <div>
            <div id="view_n_feature">
              <div className="img-section">
                <img
                  src={this.props.singleProduct.data.product_images[0].imgURL}
                  width="500px"
                  height="450px"
                  alt=""
                />
              </div>
              <div className="features-section">
                <br />
                <div className="just-space">
                  <h1 className="heading_3">Product Name</h1>
                  <button
                    className="special_button"
                    onClick={() => this.AddToWishlist()}
                  >
                    Add to Wishlist
                  </button>
                </div>

                <br />
                <div className="hr_line_1" />
                <br />
                <div className="features">
                  <div className="features-list">
                    <h3 className="heading_5">RAM</h3>
                    <h3 className="heading_6">
                      {this.props.singleProduct.data.product_features.RAM}GB
                    </h3>
                    <h3 className="heading_5">ROM </h3>
                    <h3 className="heading_6">
                      {this.props.singleProduct.data.product_features.ROM}GB
                    </h3>
                    <h3 className="heading_5">Battery </h3>
                    <h3 className="heading_6">
                      {
                        this.props.singleProduct.data.product_features.Battery
                      }mHz
                    </h3>
                    <h3 className="heading_5">Camera </h3>
                    <h3 className="heading_6">
                      {this.props.singleProduct.data.product_features.Camera}mp
                    </h3>
                    <h3 className="heading_5">Display </h3>
                    <h3 className="heading_6">
                      {this.props.singleProduct.data.product_features.Display}"
                    </h3>
                  </div>

                  <div className="features-list">
                    <h3 className="heading_5">Seller</h3>
                    <h3 className="heading_6">
                      {this.props.singleProduct.data.product_Seller}
                    </h3>
                    <h3 className="heading_5">Tag</h3>
                    <h3 className="heading_6">
                      {this.props.singleProduct.data.product_Tag}
                    </h3>
                    <h3 className="heading_5">Battery </h3>
                    <h3 className="heading_6">
                      {
                        this.props.singleProduct.data.product_features.Battery
                      }mHz
                    </h3>
                    <h3 className="heading_5">Camera </h3>
                    <h3 className="heading_6">
                      {this.props.singleProduct.data.product_features.Camera}mp
                    </h3>
                    <h3 className="heading_5">Display </h3>
                    <h3 className="heading_6">
                      {this.props.singleProduct.data.product_features.Display}"
                    </h3>
                  </div>
                </div>
                <br />

                <div className="description_section">
                  <h3 className="heading_5">Description </h3>
                  <h3 className="heading_6">
                    {this.props.singleProduct.data.product_Decsription}
                  </h3>
                </div>

                <div className="price_section just-space">
                  <div className="">
                    <div className="d-flex">
                      <h3 className="heading_4">Price - </h3>
                      <div className="price-box">
                        <h3 className="heading_4">
                          {" "}
                          {this.props.singleProduct.data.product_Price}/-{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <button className="special_button">Buy</button>
                </div>
              </div>
            </div>
            <h3
              className="heading_2"
              style={{
                paddingLeft: "20px",
                marginBottom: "10px",
                color: "#380000",
              }}
            >
              Related Suggestions
            </h3>

            <div className="realted-suggestions-section">
              <CardScroller />
            </div>
            {/* <div className="line_1" /> */}

            <div className="rating-and-review-section">
              <div className="rating-section">
                <h3
                  className="heading_2"
                  style={{
                    marginBottom: "10px",
                    marginTop: "20px",

                    color: "#380000",
                  }}
                >
                  Rating and Reviews
                </h3>
                <RateMeter rating={"80"} star={"5"} />
                <RateMeter rating={"69"} star={"4"} />
                <RateMeter rating={"30"} star={"3"} />
                <RateMeter rating={"80"} star={"2"} />
                <RateMeter rating={"50"} star={"1"} />
                <br />
                <div>
                  <button className="primary_button">Write a Review...</button>
                </div>
              </div>

              <div className="reviews">
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
              </div>
            </div>
          </div>
        ) : (
          "Loading...."
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    singleProduct: state.Product,
    all_products: state.AllProducts,
    user: state.setUserData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: product_id => {
      dispatch(getSingleProduct(product_id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemViewScreen);
