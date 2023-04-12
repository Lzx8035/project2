import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./Components/Header_footer/Header";
import Footer from "./Components/Header_footer/Footer";
import Home from "./Components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
