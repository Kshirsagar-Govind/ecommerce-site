import axios from "axios";
import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FormError from "./Containers/[ Container]form-error";

// import { getAllNotes } from "../Services/Actions/[ NOTES ]";
// import { getAllPassword } from "../Services/Actions/[ PASSWORD ]";

// import { isUserValid } from "../Services/Actions/[ AUTH ] userValidity";
// import {
//   getAllCategories,
//   getAllExpenses,
// } from "../Services/Actions/[ EXPENSE ]";
// import { getAllTasks } from "../Services/Actions/[ TASKS ]";

class RegistrationWrapper extends Component {
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

            <div className="registration-page">
              <center>
                <h1 className="heading_2">Register</h1>
              </center>
              <Registration />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [ isUserValid_, setUserValid ] = useState(false);
  const navigate = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (data, e) => {
    // e.preventDefault();
    // reset();
    // try {
    //   const res = await axios.post(
    //     `${process.env.REACT_APP_HOST}/login-user`,
    //     data
    //   );
    //   console.log(res.data);
    //   if (res.data.status == 200) {
    //     setUserValid(true);
    //     const data = await axios.get(
    //       `${process.env.REACT_APP_HOST}/get-all-notes/${res.data.data.user_id}`
    //     );
    //     let arr = data.data.notes.Notes;
    //     dispatch(
    //       isUserValid({
    //         loggedIn: true,
    //         name: res.data.data.name,
    //         email: res.data.data.email,
    //         reg_on: res.data.data.reg_on,
    //         user_id: res.data.data.user_id,
    //         app_mode: "light-mode",
    //       })
    //     );
    //     dispatch(getAllNotes(arr));
    //     dispatch(getAllPassword(res.data.data.user_id));
    //     dispatch(getAllCategories(res.data.data.user_id));
    //     dispatch(getAllExpenses(res.data.data.user_id));
    //     dispatch(getAllTasks(res.data.data.user_id));
    //   }
    //   //   navigate("/home");
    // } catch (error) {
    //   console.log(error);
    // }
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
              type="email"
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
              type="text"
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

const Registration = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data, e) => {
    console.log(data);

    const object = {
      full_name: data.name,
      email: data.email,
      password: data.password,
      contact: data.contact,
    };

    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_HOST}/user-registration`,
        object
      );
      console.log(res);
      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registration-section just-center">
      <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-div-2 m-yy-20">
          <label htmlFor="input-label-2">Name</label>
          <div className="d-flex-ac">
            <input
              type="text"
              {...register("name", { required: true })}
              className={errors.name ? "error_input" : ""}
              placeholder="enter your full name"
            />
            {errors.name && <FormError />}
          </div>
        </div>

        <div className="input-div-2 m-yy-20">
          <label htmlFor="input-label-2">Email</label>
          <div className="d-flex-ac">
            <input
              type="email"
              {...register("email", { required: true })}
              className={errors.email ? "error_input" : ""}
              placeholder="enter your email"
            />
            {errors.email && <FormError />}
          </div>
        </div>

        <div className="input-div-2 m-yy-20">
          <label htmlFor="input-label-2">Contact</label>
          <div className="d-flex-ac">
            <input
              type="text"
              {...register("contact", { required: true })}
              className={errors.contact ? "error_input" : ""}
              placeholder="enter your contact"
            />
            {errors.contact && <FormError />}
          </div>
        </div>

        <div className="input-div-2 m-yy-20">
          <label htmlFor="input-label-2">Password</label>
          <div className="d-flex-ac">
            <input
              type="password"
              {...register("password", { required: true })}
              className={errors.password ? "error_input" : ""}
              placeholder="enter password"
            />
            {errors.password && <FormError />}
          </div>
        </div>

        <div className="input-div-2">
          <label htmlFor="input-label-2">Confirm Password</label>
          <div className="d-flex-ac">
            <input
              type="password"
              {...register("c_password", { required: true })}
              className={errors.c_password ? "error_input" : ""}
              placeholder="confirm password"
            />
            {errors.c_password && <FormError />}
          </div>
        </div>

        <div className="input-div-2 submit-btn m-yy-20">
          <input
            type="submit"
            className="head-16-semi primary_button_2"
            // onCLick={()=>}
            value="Register"
          />
        </div>
      </form>
    </div>
  );
};

export default RegistrationWrapper;
