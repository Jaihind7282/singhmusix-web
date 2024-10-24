import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Footer from "./component/Footer";
import MusicStudioForm from "./routes/MusicStudioForm";
import ThankYou from "./routes/thanku";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<MusicStudioForm />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
