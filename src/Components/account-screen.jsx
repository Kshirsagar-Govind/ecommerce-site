import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";

class AccountScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddressForm: false,
      newAddress: "",
      userData: {},
    };
  }

  submitNewAddress = async () => {
    console.log(this.state.newAddress);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_HOST}/update-user-address/${this.state.userData
          .id}`,
        {
          address: this.state.newAddress,
        }
      );
      this.setState({
        showAddressForm: false,
        newAddress: "",
      });
      if (res.data.code !== 200) {
        throw new Error("Something went wrong");
      }
      alert("Success");
      console.log(res.data.code);
    } catch (error) {
      console.log(error);
    }
  };

  static getDerivedStateFromProps(props, state) {
    if (props.user !== state.userData) {
      //Change in props
      console.log(props.user);
      return {
        userData: props.user,
      };
    }
    return null; // No change to state
  }

  render() {
    return (
      <div>
        {/* <h1>User Profile</h1> */}
        <div className="jumbotron  mt-5 py-4 bg-light">
          <div className="container">
            <h1 className="display-4">Your Profile Details</h1>
            <p className="lead">All your information</p>
          </div>
        </div>
        <div className="card mt-5 mx-auto" style={{ width: "50%" }}>
          <div className="card-body">
            <div className="">
              <p className="lek-14-regular">Name</p>
              <h3>Govind Kshirsagar</h3>
            </div>
            <hr className="mt-4" />

            <div className="mt-4">
              <p className="lek-14-regular">Email</p>
              <h3>govind@gmail.com</h3>
            </div>
            <hr className="mt-4" />

            <div className="mt-4">
              <div className="just-space">
                <div className="">
                  <p className="lek-14-regular">Delivery Address</p>
                  {this.state.showAddressForm ? (
                    <textarea
                      cols={40}
                      type="text"
                      className="lek-14-regular px-2 py-2"
                      placeholder="new address"
                      value={this.state.newAddress}
                      onChange={e =>
                        this.setState({ newAddress: e.target.value })}
                    />
                  ) : (
                    <h3>govind@gmail.com</h3>
                  )}
                </div>
                <div className="">
                  {!this.state.showAddressForm ? (
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        this.setState({
                          showAddressForm: !this.state.showAddress,
                        })}
                    >
                      Edit
                    </button>
                  ) : (
                    <div className="">
                      <button
                        className="btn btn-warning mx-2"
                        onClick={() => this.submitNewAddress()}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() =>
                          this.setState({
                            showAddressForm: false,
                          })}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.setUserData,
  };
};
export default connect(mapStateToProps, null)(AccountScreen);

// export default AccountScreen;
