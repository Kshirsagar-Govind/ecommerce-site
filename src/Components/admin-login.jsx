import axios from "axios";
import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { UserValid } from "../Services/Actions/[Auth]userData";
import FormError from "./Containers/[ Container]form-error";

export default class AdminLogin extends Component {
  render() {
    return (
      <div className="registration-page just-center">
        <div className="">
          <div className="registration-forms">
            <div className="login-page">
              <center>
                <h1 className="heading_2">Login</h1>
              </center>
              <Login />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const AdminAccount = {
  name: "admin",
  password: "admin@123",
};
const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [ isUserValid_, setUserValid ] = useState(false);
  const navigate = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    reset();
    try {
      if (
        AdminAccount.name == data.email &&
        AdminAccount.password == data.password
      ) {
        navigate.push("/admin-panel");
      }
      // alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-section just-center">
      <form onSubmit={handleSubmit(onSubmit)} className="reg-form">
        <div className="input-div-2 m-yy-20">
          <label htmlFor="input-label-2" className="text_label">
            Username
          </label>{" "}
          <div className="d-flex-ac">
            <input
              {...register("email", { required: true })}
              type="text"
              placeholder="enter your email"
              className={errors.email ? "error_input" : ""}
            />{" "}
            {errors.email && <FormError />}
          </div>
        </div>

        <div className="input-div-2 m-yy-20">
          <label htmlFor="input-label-2" className="text_label">
            Password
          </label>
          <div className="d-flex-ac">
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="enter password"
              className={errors.password ? "error_input" : ""}
            />
            {errors.password && <FormError />}
          </div>
        </div>

        <div className="input-div-2 m-yy-20">
          <input
            type="submit"
            className="head-16-semi primary_button_2"
            value="Login"
          />
        </div>
      </form>
    </div>
  );
};
