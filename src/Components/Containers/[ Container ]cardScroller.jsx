import React, { Component, useEffect, useState } from "react";
import { connect, Connect } from "react-redux";
import { useHistory } from "react-router-dom";

import "../CSS/master-css.scss";
import { getAllProduct } from "../../Services/Actions/[ Product ] getAllProductsData";

class CardScroller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      type: "laptop",
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
      <div>
        <div className="scroller-wrapper">
          {this.state.products.length > 0 ? (
            this.state.products.map((item, index) => (
              <ScrollingCard data={item} />
            ))
          ) : (
            "No Products"
          )}
        </div>
      </div>
    );
  }
}

export const ScrollingCard = ({ data }) => {
  const [ img, setImg ] = useState();
  const [ link, setLink ] = useState(window.location.href);
  let history = useHistory();

  useEffect(
    () => {
      console.log(window.location.href);
      setImg(data.product_images[0].imgURL);
      setLink(window.location.href);
    },
    [ img, link ]
  );

  const show = () => {
    window.open(`/item-view-page/${data.product_id}`);
  };

  return (
    <div>
      <div className="scrolling_card_wrapper" onClick={show}>
        <div className="img-section">
          <img src={img} alt="" />
        </div>
        <div className="footer-section">
          <h1>{data.product_Name} </h1>
          <h1>{data.product_Price} </h1>
        </div>
      </div>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(CardScroller);
