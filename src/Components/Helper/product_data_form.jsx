import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import axios from "axios";
import "../CSS/master-css.css";
/*
const detail = {
  product_Name,
  product_Price,
  product_Tag,
  product_Decsription,
  product_Seller,
  product_Priority,
  product_buyCount,
  imgURL,
  RAM,
  ROM,
  Battery,
  isTouchScreen,
  Camera,
  Display,
  OS,
  product_onBluetooth,
};
*/

const ProductDataForm = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const [ fileUrl, setFileUrl ] = useState(null);

  const fileUpload = event => {
    console.log("asd");
    setFileUrl(event.target.textContent);
    // console.log(URL.createObjectURL(event.target.files[0]));
  };

  const onSubmit = async data => {
    if (data.product_Name === "") {
      return alert("Required");
    }
    console.log(data);
    const result = await axios.post(
      "http://localhost:5500/gameshop/add-product-data",
      data
    );
    console.log(result);
  };

  return (
    <div>
      <h1 className="heading_3 t_center">ADD PRODUCT FORM</h1>
      <br /> <br />
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart">
        <div className="input-div submit-div">
          <label htmlFor="" className="text_label">
            Product Type
          </label>
          <select
            className="select_style text_label"
            {...register("product_type", { required: true })}
          >
            <option value="" selected hidden>
              Select
            </option>

            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        {/* <div className="line_1" /> */}
        <div className="submit-div">
          <div className="">
            <div className="input-div">
              <label htmlFor="" className="text_label">
                Product Name
              </label>

              <input
                type="text"
                className={classNames("text_box_2", {
                  invalid_input: errors.product_Name,
                })}
                {...register("product_Name", { required: true })}
              />
              {/* {errors.product_Name?.type === 'required' && <p className='form-error'>*</p>} */}
            </div>
            <div className="input-div">
              <label htmlFor="" className="text_label">
                Price
              </label>
              <input
                type="text"
                className="text_box_2"
                {...register("product_Price")}
              />
            </div>
            <div className="input-div">
              <label htmlFor="" className="text_label">
                Tags
              </label>
              <input
                type="text"
                className="text_box_2"
                {...register("product_Tag")}
              />
            </div>
            <div className="input-div">
              <label htmlFor="" className="text_label">
                Description
              </label>
              <input
                type="text"
                className="text_box_2"
                {...register("product_Decsription")}
              />
            </div>
            <div className="input-div">
              <label htmlFor="" className="text_label">
                Seller
              </label>
              <input
                type="text"
                className="text_box_2"
                {...register("product_Seller")}
              />
            </div>
            <div className="input-div">
              <label htmlFor="" className="text_label">
                Priority
              </label>
              <input
                type="number"
                className="text_box_2"
                {...register("product_Priority")}
              />
            </div>
            <div className="input-div">
              <label htmlFor="" className="text_label">
                RAM
              </label>
              <input
                type="number"
                className="text_box_2"
                {...register("RAM")}
              />
            </div>
            <div className="input-div">
              <label htmlFor="" className="text_label">
                Add Images
              </label>
              <input
                type="text"
                className="text_box_2"
                onChange={fileUpload}
                {...register("imgURL")}
              />
            </div>{" "}
          </div>

          <div className="">
            <div className="input-div">
              <label htmlFor="" className="text_label">
                ROM
              </label>
              <input
                type="number"
                className="text_box_2"
                {...register("ROM")}
              />
            </div>

            <div className="input-div">
              <label htmlFor="" className="text_label">
                Battery
              </label>
              <input
                type="number"
                className="text_box_2"
                {...register("Battery")}
              />
            </div>

            <div className="input-div">
              <label htmlFor="" className="text_label">
                Touch Screen Support
              </label>
              <input
                type="boolean"
                className="text_box_2"
                {...register("isTouchScreen")}
              />
            </div>

            <div className="input-div">
              <label htmlFor="" className="text_label">
                Camera
              </label>
              <input
                type="number"
                className="text_box_2"
                {...register("Camera")}
              />
            </div>

            <div className="input-div">
              <label htmlFor="" className="text_label">
                Display
              </label>
              <input
                type="number"
                className="text_box_2"
                {...register("Display")}
              />
            </div>

            <div className="input-div">
              <label htmlFor="" className="text_label">
                OS
              </label>
              <input type="text" className="text_box_2" {...register("OS")} />
            </div>
            <div className="input-div">
              <label htmlFor="" className="text_label">
                Bluetooth Support
              </label>
              <input
                type="text"
                className="text_box_2"
                {...register("product_onBluetooth")}
              />
            </div>
          </div>
        </div>

        <br />

        <div className="submit-div">
          <input
            type="submit"
            value="submit"
            className="primary_button heading_5"
          />
        </div>
      </form>
    </div>
  );
};

export default ProductDataForm;
