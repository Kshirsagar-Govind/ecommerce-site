import React, { Component } from "react";
import ProductCard from "./Containers/[ Container ]productCard";
import "../Components/CSS/master-css.scss";
import StarIcon from "../Components/Assets/SVG/star_icon";
import RateMeter from "./Helper/RateMeter";
import Review from "./Helper/review";
import { getSingleProduct } from "../Services/Actions/[ Product ] getSingleProductData";

import { connect } from "react-redux";
import axios from "axios";
import CardScroller, {
  ScrollingCard,
} from "./Containers/[ Container ]cardScroller";
import { AverageRating } from "../Services/services";

class ItemViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "10",
      star: "1",
      product_id: this.props.match.params.product,
      product_data: {},
      userData: {},
      showReviewForm: false,
      rating: 0,
      one_star: 0,
      two_star: 0,
      three_star: 0,
      four_star: 0,
      five_star: 0,
      max_count: 0,
      reviews: [],
      final_rating: 0,
    };
  }
  // const {}= this.props.singleProduct.data;

  componentDidMount() {
    this.props.getSingleProduct(this.state.product_id);
    this.getReviews();
    this.setState({
      reviews: [],
    });
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.all_products != this.props.all_products) {
      this.setState({
        product_data: nextProps.all_products.data.find(
          item => item.product_id == this.state.product_id
        ),
      });

      return false;
    } else return true;
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

  getReviews = async (req, res) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_HOST}/get-product-review/${this.state
          .product_id}`
      );

      this.setState({ reviews: res.data.reviews });
      // let one = 0;
      // let two = 0;
      // let three = 0;
      // let four = 0;
      // let five = 0;

      // res.data.reviews.map(item => {
      //   if (item.rating == 1) {
      //     one = one + 1;
      //   } else if (item.rating == 2) {
      //     two = two + 1;
      //   } else if (item.rating == 3) {
      //     three = three + 1;
      //   } else if (item.rating == 4) {
      //     four = four + 1;
      //   } else if (item.rating == 5) {
      //     five = five + 1;
      //   }
      // });

      // let temp = [ one, two, three, four, five ];

      // let max = 0;
      // for (let i = 0; i < temp.length; i++) {
      //   if (temp[i] > max) {
      //     max = temp[i];
      //   }
      // }

      // const t = 1 * one + 2 * two + 3 * three + 4 * four + 5 * five;
      // const ar = one + two + three + four + five;
      // console.log(t / ar, "*/*/*/*/*/*");

      const readyRating = AverageRating(res.data.reviews);

      this.setState({
        one_star: readyRating.one,
        two_star: readyRating.two,
        three_star: readyRating.three,
        four_star: readyRating.four,
        five_star: readyRating.five,
        max_count: readyRating.max,
        final_rating: readyRating.final_rating,
      });

      // console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  };

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
                  <button
                    className="special_button"
                    onClick={() => {
                      window.open(
                        `/pay-now/${this.props.singleProduct.data.product_id}`
                      );
                    }}
                  >
                    Buy
                  </button>
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
                  Rating and Reviews {this.state.final_rating}.0
                </h3>
                <RateMeter
                  rating={this.state.five_star / this.state.max_count * 100}
                  rate_count={this.state.five_star}
                  star={"5"}
                />
                <RateMeter
                  rating={this.state.four_star / this.state.max_count * 100}
                  rate_count={this.state.four_star}
                  star={"4"}
                />
                <RateMeter
                  rating={this.state.three_star / this.state.max_count * 100}
                  rate_count={this.state.three_star}
                  star={"3"}
                />
                <RateMeter
                  rating={this.state.two_star / this.state.max_count * 100}
                  rate_count={this.state.two_star}
                  star={"2"}
                />
                <RateMeter
                  rating={this.state.one_star / this.state.max_count * 100}
                  rate_count={this.state.one_star}
                  star={"1"}
                />
                <br />
                <div>
                  <button
                    className="primary_button"
                    onClick={() => {
                      if (this.state.userData.id) {
                        this.setState({ showReviewForm: true });
                      } else alert("You Must Login First to review");
                    }}
                  >
                    Write a Review...
                  </button>
                </div>
                {this.state.showReviewForm ? (
                  <div className="dark-back">
                    <ReviewPopup
                      data={{
                        user: this.state.userData,
                        product_id: this.state.product_id,
                      }}
                      close={() => {
                        this.setState({ showReviewForm: false });
                      }}
                    />
                  </div>
                ) : null}
              </div>

              <div className="reviews">
                {this.state.reviews.length > 0 ? (
                  this.state.reviews.map(item => <Review item={item} />)
                ) : (
                  <h1 className="lek-20-semi">No reviews</h1>
                )}
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

class ReviewPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      review: "",
      title: "",
    };
  }

  onSubmit = async () => {
    if (!this.state.one) {
      return alert("Please Give a Star");
    }
    const dataToSend = {
      rating: this.state.five
        ? 5
        : this.state.four ? 4 : this.state.three ? 3 : this.state.two ? 2 : 1,
      title: this.state.title,
      review: this.state.review,
      user_id: this.props.data.user.id,
      user_name: this.props.data.user.name,
      product_id: this.props.data.product_id,
    };

    const res = await axios.post(
      `${process.env.REACT_APP_HOST}/submit-product-review`,
      dataToSend
    );
    console.log(res, "responce");
  };
  render() {
    return (
      <div className="review-form">
        <div className="review-form-popup">
          <div className="input-div-2 m-yy-20">
            <label htmlFor="rating" className="text_label">
              Rating
            </label>
            <div className="just-space">
              <div
                onClick={() => {
                  this.setState(
                    {
                      one: true,
                      two: false,
                      three: false,
                      four: false,
                      five: false,
                    },
                    () => {
                      console.log(this.state);
                    }
                  );
                }}
              >
                <StarIcon fill={this.state.one} />
              </div>

              <div
                id="str_2"
                onClick={() => {
                  this.setState({
                    one: true,
                    two: true,
                    three: false,
                    four: false,
                    five: false,
                  });
                }}
              >
                <StarIcon fill={this.state.two} />
              </div>

              <div
                id="str_3"
                onClick={() => {
                  this.setState({
                    one: true,
                    two: true,
                    three: true,
                    four: false,
                    five: false,
                  });
                }}
              >
                <StarIcon fill={this.state.three} />
              </div>

              <div
                id="str_4"
                onClick={() => {
                  this.setState({
                    one: true,
                    two: true,
                    three: true,
                    four: true,
                    five: false,
                  });
                }}
              >
                <StarIcon fill={this.state.four} />
              </div>

              <div
                id="str_5"
                onClick={() => {
                  this.setState({
                    one: true,
                    two: true,
                    three: true,
                    four: true,
                    five: true,
                  });
                }}
              >
                <StarIcon fill={this.state.five} />
              </div>
            </div>
          </div>

          <div className="input-div-2 m-yy-20">
            <label htmlFor="input-label-2" className="text_label">
              Title
            </label>{" "}
            <div className="d-flex-ac">
              <input
                type="text"
                placeholder="review title"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
              />{" "}
            </div>
          </div>

          <div className="input-div-2 m-yy-20">
            <label htmlFor="input-label-2" className="text_label">
              Review
            </label>{" "}
            <div className="d-flex-ac">
              <textarea
                value={this.state.review}
                onChange={e => {
                  this.setState({ review: e.target.value });
                }}
                placeholder="review"
              />{" "}
            </div>
          </div>

          <button className="primary_button" onClick={() => this.onSubmit()}>
            Save
          </button>
          <button
            className="secondary_button"
            onClick={() => {
              this.props.close();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemViewScreen);
