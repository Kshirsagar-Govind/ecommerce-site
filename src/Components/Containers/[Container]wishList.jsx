import Test from "../Assets/test.jpg";
const WishListItem = ({ err }) => {
  return (
    <div className="wish-list-wrapper">
      <div className="left-section">
        <img src={Test} alt="" />
        <span className="desc">
          <h1 className="heading_4">Product Name</h1>
          <h3 className="lek-20-regular">Price - </h3>
        </span>
      </div>

      <div className="right-section">
        <button className="primary_button">Add To Cart</button>
        <button className="secondary_button">Remove</button>
      </div>
    </div>
  );
};

export default WishListItem;
