import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Components/Header_footer/Header";
import Footer from "./Components/Header_footer/Footer";
import Home from "./Components/Home";
import SignIn from "./Components/Signin";

const App = ({ user }) => {
  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
