import React from 'react'
import Navbar from './Navbar'
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import AboutHeader from './AboutHeader';
import { Routes, Route } from "react-router-dom";

function Layout() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app" element={<AboutHeader />}>
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
        <Navbar />
    </div>
  )
}

export default Layout
