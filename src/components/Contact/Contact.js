import React, { useState, useRef, forwardRef } from "react";
import "./Contact.css";

import emailjs from "@emailjs/browser";

import { Formik } from "formik";
import * as Yup from "yup";
import { Box, Grid } from "@mui/material";

const Contact = forwardRef((props, ref) => {
  const [loading, setLoading] = useState(false);
  const [keys, setKeys] = useState();
  const [message, setMessage] = useState("");
  const [submiting, setSubmiting] = useState(false);
  const form = useRef(null);

  console.log("keys", keys);

  const handleSubmitSendEmail = (values) => {
    console.log("values", values);
    // console.log("form.current", form.current);

    // e.preventDefault();

    setSubmiting(true);

    var templateParams = {
      firstName: keys?.firstName,
      lastName: keys?.lastName,
      email: keys?.email,
      phone: keys?.phoneinput1 + keys?.phoneinput2 + keys?.phoneinput3,
      message: keys?.message,
    };
    if (values !== undefined) {
      emailjs
        .send(
          "service_1ids2wn",
          "template_7cz1jd8",
          templateParams,
          "2kJfNtN7QNPb8RIDk"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            setMessage(response.status);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );

      const timer = setTimeout(() => {
        setMessage("");
        setSubmiting(false);
      }, 5000);

      return () => setTimeout(timer);
    }
  };

  return (
    <div ref={ref}>
      <hr />

      <div className="contact">
        <div className="touch">
          <h5>Get In Touch</h5>
          <div>Email: Globxcanada@gmail.com</div>
          {/* <div>Phone: 123456789</div> */}
          <h5>Toronto, Canada</h5>
        </div>

        <>
          <Grid>
            <Grid item lg={12}>
              <Box
                sx={{
                  paddingRight: "20px",
                  paddingLeft: "20px",
                }}
              >
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneinput1: "",
                    phoneinput2: "",
                    phoneinput3: "",
                    // password: "",
                    message: "",
                  }}
                  onSubmit={async (values) => {
                    // let payload = {
                    //   fullName: values?.fullName,
                    //   email: values?.email,
                    //   password: values?.password,
                    // };
                    // console.log(values);
                    setLoading(true);
                    setKeys(values);
                    handleSubmitSendEmail(values);
                    // await new Promise((resolve) => setTimeout(resolve, 500));
                    // userRegistered(payload)
                    //   .then((data) => {
                    //     Alert("success", "Sign Up");
                    //     // navigate({ pathname: "/user/home" });
                    //     // dispatch(setUserLogin(data.access_token));
                    //     // navigate("/login");
                    //     setLoading(false);

                    //   })
                    //   .catch((err) => {
                    //     setLoading(false);
                    //     Alert("error", err);
                    //   });

                    // alert(JSON.stringify(values, null, 2));
                  }}
                  validationSchema={Yup.object().shape({
                    firstName: Yup.string().required().required("Required"),
                    lastName: Yup.string().required("Required"),
                    // password: Yup.string().required("Required"),
                    email: Yup.string().email().required("Required"),
                    phoneinput1: Yup.string().required("Required"),
                    phoneinput2: Yup.string().required("Required"),
                    phoneinput3: Yup.string().required("Required"),
                    message: Yup.string().required("Required"),
                  })}
                >
                  {(props) => {
                    const {
                      values,
                      touched,
                      errors,
                      dirty,
                      isSubmitting,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      handleReset,
                    } = props;
                    return (
                      <form ref={form} onSubmit={handleSubmit} className="form">
                        <div className="div_div_label_input">
                          <label
                            className="fontSize18 gray_color "
                            htmlFor="fullName"
                            style={{
                              display: "block",
                              marginBottom: "5px",
                            }}
                          >
                            Name *
                          </label>
                          <div className="div_label_input width100">
                            <div className="mb-4 div_div_label_input">
                              <input
                                id="firstName"
                                name="firstName"
                                placeholder="Enter your Name"
                                type="text"
                                value={values.firstName}
                                onChange={handleChange}
                                // onBlur={handleBlur}
                                className={`input_field_login fontSize18 gray_color ${
                                  errors.firstName && touched.firstName
                                    ? "text-input error"
                                    : "text-input"
                                }`}
                              />

                              <label
                                className="fontSize18 gray_color "
                                htmlFor="firstName"
                                style={{
                                  display: "block",
                                  marginBottom: "5px",
                                }}
                              >
                                First Name
                              </label>
                              {errors.firstName && touched.firstName && (
                                <div className="input-feedback">
                                  {errors.firstName}
                                </div>
                              )}
                            </div>

                            <div className="mb-4 div_div_label_input">
                              <input
                                id="lastName"
                                placeholder="Enter your Name"
                                type="text"
                                value={values.lastName}
                                onChange={handleChange}
                                // onBlur={handleBlur}
                                className={`input_field_login fontSize18 gray_color ${
                                  errors.lastName && touched.lastName
                                    ? "text-input error"
                                    : "text-input"
                                }`}
                              />

                              <label
                                className="fontSize18 gray_color "
                                htmlFor="lastName"
                                style={{
                                  display: "block",
                                  marginBottom: "5px",
                                }}
                              >
                                Last Name
                              </label>
                              {errors.lastName && touched.lastName && (
                                <div className="input-feedback">
                                  {errors.lastName}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="mb-4 div_div_label_input ">
                          <label
                            className="fontSize18 gray_color"
                            htmlFor="email"
                            style={{
                              display: "block",
                              marginBottom: "5px",
                            }}
                          >
                            Email Address *
                          </label>
                          <input
                            id="email"
                            placeholder="Enter your email"
                            type="text"
                            value={values.email}
                            onChange={handleChange}
                            // onBlur={handleBlur}
                            className={`input_field_login_email fontSize18 gray_color ${
                              errors.email && touched.email
                                ? "text-input error"
                                : "text-input"
                            }`}
                          />
                          {errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                          )}
                        </div>
                        <div className="mb-4 div_div_label_input">
                          <label
                            className="fontSize18 gray_color"
                            htmlFor="password"
                            style={{
                              display: "block",
                              marginBottom: "5px",
                            }}
                          >
                            Phone *
                          </label>
                          <div className="div_label_input">
                            <div className="div_input_phone">
                              <input
                                id="phoneinput1"
                                // placeholder="Password"
                                maxLength={3}
                                // type={passwordShown ? "text" : "password"}
                                value={values.phoneinput1}
                                onChange={handleChange}
                                // onBlur={handleBlur}
                                className={`input_filed_phone fontSize18 gray_color ${
                                  errors.phoneinput1 && touched.phoneinput1
                                    ? "text-input error"
                                    : "text-input"
                                }`}
                              />
                              <label
                                className="fontSize18 gray_color"
                                htmlFor="phoneinput1"
                                style={{
                                  display: "block",
                                  marginBottom: "5px",
                                }}
                              >
                                (###)
                              </label>
                              {errors.phoneinput1 && touched.phoneinput1 && (
                                <div className="input-feedback">
                                  {errors.phoneinput1}
                                </div>
                              )}
                            </div>
                            <div className="div_input_phone">
                              <input
                                id="phoneinput2"
                                // placeholder="Password"
                                // type={passwordShown ? "text" : "password"}
                                type="text"
                                maxLength={3}
                                value={values.phoneinput2}
                                onChange={handleChange}
                                // onBlur={handleBlur}
                                className={`input_filed_phone fontSize18 gray_color ${
                                  errors.phoneinput2 && touched.phoneinput2
                                    ? "text-input error"
                                    : "text-input"
                                }`}
                              />
                              <label
                                className="fontSize18 gray_color"
                                htmlFor="phoneinput2"
                                style={{
                                  display: "block",
                                  marginBottom: "5px",
                                }}
                              >
                                ###
                              </label>
                              {errors.phoneinput2 && touched.phoneinput2 && (
                                <div className="input-feedback">
                                  {errors.phoneinput2}
                                </div>
                              )}
                            </div>
                            <div className="div_input_phone">
                              <input
                                id="phoneinput3"
                                // placeholder="Password"
                                type="text"
                                maxLength={4}
                                // type={passwordShown ? "text" : "password"}
                                value={values.phoneinput3}
                                onChange={handleChange}
                                // onBlur={handleBlur}
                                className={`input_filed_phone fontSize18 gray_color ${
                                  errors.phoneinput3 && touched.phoneinput3
                                    ? "text-input error"
                                    : "text-input"
                                }`}
                              />
                              <label
                                className="fontSize18 gray_color"
                                htmlFor="phoneinput3"
                                style={{
                                  display: "block",
                                  marginBottom: "5px",
                                }}
                              >
                                ####
                              </label>
                              {errors.phoneinput3 && touched.phoneinput3 && (
                                <div className="input-feedback">
                                  {errors.phoneinput3}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="div_input_phone">
                          <legend
                            style={{
                              textAlign: "left",
                            }}
                          >
                            Message *
                          </legend>

                          <textarea
                            id="message"
                            name="message"
                            rows="4"
                            cols="50"
                            value={values.message}
                            onChange={handleChange}
                            placeholder="Write your message"
                            className={`input_field_login_email fontSize18 gray_color ${
                              errors.message && touched.message
                                ? "text-input error"
                                : "text-input"
                            }`}
                          ></textarea>
                          {errors.message && touched.message && (
                            <div className="input-feedback">
                              {errors.message}
                            </div>
                          )}
                        </div>

                        <div className="div_btn_submit dflex ">
                          {submiting ? (
                            <button
                              className="btn_submit fontSize24 white_color"
                              type="submit"
                              // disabled={isSubmitting}
                            >
                              Submiting...
                            </button>
                          ) : (
                            <button
                              className="btn_submit fontSize24 white_color"
                              type="submit"
                              // disabled={isSubmitting}
                              onClick={handleSubmitSendEmail}
                            >
                              Submit
                            </button>
                          )}
                          <div style={{ marginTop: "-38px" }}>
                            {message === 200 && "Thank You!"}
                          </div>
                        </div>
                      </form>
                    );
                  }}
                </Formik>
              </Box>
            </Grid>
          </Grid>
        </>
      </div>
    </div>
  );
});

export default Contact;
