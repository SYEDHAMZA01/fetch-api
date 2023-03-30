import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import './App.css';
import Home from './component/Home';
import About from './component/About';
import ContactUs from './component/ContactUs';
import Service from './component/Service';
import Navbar from './component/Navbar';
import Footer from './component/footer';
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AnimatedCursor
          innerSize={6}
          outerSize={20}
          // color="17, 163, 231"
          // outerStyle={{
          //   border: '1px solid red',
          // }}
          hasBlendMode={true}
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={4} />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/about/:fname" element={<About />} />
          <Route exact={true} path="/service" element={<Service />} />
          <Route exact={true} path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Navigate replace={true} to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
