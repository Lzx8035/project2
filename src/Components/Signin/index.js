import React, { useState } from "react";

import firebase from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { CircularProgress } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { showToastSuccess, showToastError } from "../Utils/tools";

// hook
import { useFormik } from "formik";
import * as Yup from "yup";

const SignIn = (props) => {
  const auth = getAuth(firebase);
  const user = auth.currentUser;

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "lzx8035@gmail.com",
      password: "Kiri1412",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("INVALID EMAIL ADDRESS")
        .required("THE EMAIL IS NEED"),
      password: Yup.string()
        .required("THE PASSWORD IS NEEDED")
        .min(6, "PASSWORD > 6 DIGI"),
    }),

    onSubmit: (values) => {
      setLoading(true);
      // go to server with field values
      submitForm(values);
    },
  });

  const submitForm = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        // show success toast
        showToastSuccess("Welcome back!");
        navigate("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        // show err toast
        showToastError(error.message);
      });
  };

  return (
    <>
      {!user ? (
        <div className="container">
          <div className="signin_wrapper" style={{ margin: "100px" }}>
            <form onSubmit={formik.handleSubmit}>
              <h2>Please login</h2>
              <input
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              ></input>

              {formik.touched.email && formik.errors.email ? (
                <div className="error_label">{formik.errors.email}</div>
              ) : null}

              <input
                placeholder="Password"
                name="password"
                type="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              ></input>

              {formik.touched.password && formik.errors.password ? (
                <div className="error_label">{formik.errors.password}</div>
              ) : null}

              {loading ? (
                <CircularProgress color="secondary" className="progress" />
              ) : (
                <button type="submit">Log in</button>
              )}
            </form>
          </div>
        </div>
      ) : (
        <Navigate to="/dashboard" />
      )}
    </>
  );
};

export default SignIn;
