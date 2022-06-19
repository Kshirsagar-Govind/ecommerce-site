import React, { Component } from "react";
import { GetAllProducts, GetAllUsers } from "../../Services/UserAPIcalls";
import ProductDataForm from "../Helper/product_data_form";

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      products: [],
      view_user: true,
      view_add_products: false,
      view_products: false,
    };
  }
  componentDidMount() {
    this.GetUser();
    this.GetProducts();
  }

  GetUser = async () => {
    // const t = await GetAllUsers();

    const list = await fetch(`${process.env.REACT_APP_HOST}/get-users-list`);
    const t = await list.json();
    this.setState({
      users: t,
    });
  };

  GetProducts = async () => {
    // const t = await GetAllProducts();

    const list = await fetch(`${process.env.REACT_APP_HOST}/get-product-data`);
    const t = await list.json();
    this.setState({
      products: t.data,
    });
  };

  render() {
    return (
      <div>
        <div className="jumbotron  mt-5 py-4 bg-light">
          <div className="container">
            <h1 className="display-4">Admin Panel</h1>
            <div className="">
              <button
                onClick={() =>
                  this.setState({
                    view_add_products: false,
                    view_user: true,
                    view_products: false,
                  })}
                className="btn btn-primary"
                style={{ fontSize: "16px" }}
              >
                Users
              </button>
              <button
                onClick={() =>
                  this.setState({
                    view_add_products: false,
                    view_user: false,
                    view_products: true,
                  })}
                className="m-2 btn btn-primary"
                style={{ fontSize: "16px" }}
              >
                Products
              </button>

              <button
                className="m-2 btn btn-outline-success"
                style={{ fontSize: "16px" }}
                onClick={() =>
                  this.setState({
                    view_add_products: true,
                    view_user: false,
                    view_products: false,
                  })}
              >
                Add Products +
              </button>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }} className="">
          {this.state.view_user ? (
            <UserTables Users={this.state.users} />
          ) : this.state.view_products ? (
            <ProductTables Products={this.state.products} />
          ) : this.state.view_add_products ? (
            <div style={{ padding: "20px 0" }}>
              <ProductDataForm />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default AdminPanel;

// ---------------------------------------------------------------------------------------------|

const UserTables = ({ Users }) => {
  return (
    <div className="" style={{ padding: "20px 100px" }}>
      <h1>Users</h1>
      <table class="table">
        <thead>
          <tr className="px-4">
            <th style={{ fontSize: "16px" }}>Name</th>
            <th style={{ fontSize: "16px" }}>Registered On</th>
            <th style={{ fontSize: "16px" }}>Action</th>
          </tr>
        </thead>
        <tbody>{Users.map(item => <UserRow user={item} />)}</tbody>
      </table>
    </div>
  );
};

//

const UserRow = ({ user }) => {
  return (
    <tr>
      <td className="lek-16-regular">{user.full_name}</td>
      <td className="lek-16-regular">{user.reg_date.split(",")[0]}</td>
      <td className="lek-16-regular">
        <button
          style={{ fontSize: "16px" }}
          className="mx-3 lek-16-regular btn btn-outline-primary"
        >
          View
        </button>
        <button
          style={{ fontSize: "16px" }}
          className="mx-3 lek-16-regular btn btn-outline-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

// ---------------------------------------------------------------------------------------------|

const ProductTables = ({ Products }) => {
  return (
    <div className="" style={{ padding: "20px 100px" }}>
      <h1>Products</h1>
      <table class="table">
        <thead>
          <tr>
            <th style={{ fontSize: "16px" }}>Product</th>
            <th style={{ fontSize: "16px" }}>Name</th>
            <th style={{ fontSize: "16px" }}> Added On</th>
            <th style={{ fontSize: "16px" }}> Action</th>
          </tr>
        </thead>
        <tbody>{Products.map(item => <ProductRow Product={item} />)}</tbody>
      </table>
    </div>
  );
};

// ---------------------------------------------------------------------------------------------|

const ProductRow = ({ Product }) => {
  return (
    <tr>
      <td className="lek-16-regular" style={{ width: "25px" }}>
        {Product.product_id}
      </td>

      <td className="lek-16-regular" style={{ width: "25px" }}>
        {Product.product_Name}
      </td>
      <td className="lek-16-regular" style={{ width: "25px" }}>
        {Product.product_AddedDate}
      </td>
      <td className="lek-16-regular" style={{ width: "25px" }}>
        <button
          style={{ fontSize: "16px" }}
          className="mx-3 lek-16-regular btn btn-outline-primary"
        >
          View
        </button>
        <button
          style={{ fontSize: "16px" }}
          className="mx-3 lek-16-regular btn btn-outline-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

// ---------------------------------------------------------------------------------------------|
