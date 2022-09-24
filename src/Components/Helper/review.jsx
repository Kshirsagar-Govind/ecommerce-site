import React, { Component } from "react";
import StarIcon from "../Assets/SVG/star_icon";
import liked_icon from "../Assets/like_icon.png";
import axios from "axios";
class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: [],
      isLiked: false,
    };
  }

  componentDidMount() {
    let tem = [];
    for (let i = 0; i < this.props.item.rating; i++) {
      tem.push(0);
    }
    this.setState({ stars: tem });
  }
  isUserLikedThisReview = () => {
    const found = this.props.item.likes.find(
      item => item.user_id == this.props.userData.id
    );
    this.setState({
      isLiked: found ? true : false,
    });
  };
  onLikingTheReview = async () => {
    try {
      if (this.props.userData.name == "") {
        return alert("You must be logged in");
      }
      const addLike = await axios.post(
        `${process.env.REACT_APP_HOST}/like-the-review/${this.props.item
          .review_id}`,
        {
          product_id: this.props.product_id,
          user_id: this.props.item.user_id,
        }
      );
      console.log(addLike);
      this.props.reload();
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <div id="review">
        <div className="review_header">
          <div className="">
            <h4 className=" lek-18-semi"> {this.props.item.user_name}</h4>
            <h5 className="heading_6 ">
              Purchased On - {this.props.item.purchased_date}
            </h5>
          </div>

          <div className="stars d-flex-ac">
            {this.state.stars.map(item => <StarIcon fill={true} />)}
          </div>
        </div>
        <br />
        <h3 className="lek-16-semi"> {this.props.item.title}</h3>
        <h5 className="lek-16-regular">{this.props.item.review}</h5>
        <div className="d-flex helped-btn">
          <img
            onClick={() => this.onLikingTheReview()}
            className={this.state.isLiked ? "" : "unliked"}
            src={liked_icon}
            alt=""
            height="24"
          />
          <p className="lek-18-regular">{this.props.item.likes.length}</p>
        </div>
        <br />
        <div className="hr_line_2" />
      </div>
    );
  }
}

export default Review;
