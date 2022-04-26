import React, { Component } from "react";
import StarIcon from "../Assets/SVG/star_icon";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: [],
    };
  }

  componentDidMount() {
    let tem = [];
    for (let i = 0; i < this.props.item.rating; i++) {
      tem.push(0);
    }
    this.setState({ stars: tem });
  }

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
        <div className="d-flex helped-btn" />
        <br />
        <div className="hr_line_2" />
      </div>
    );
  }
}

export default Review;
