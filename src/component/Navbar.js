import React, { useEffect, useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { NavLink } from "react-router-dom";
import './css/style.css'

const Navbar = () => {

   

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/" >Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <NavLink className={`nav-link`} style={({isActive}) => ({
                                    borderBottom: isActive ? "3px solid black" : ""
                                })} to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link`} style={({isActive}) => ({ borderBottom: isActive ? "3px solid black" : "" })}  to="/about/hussaini">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link`} style={({isActive}) => ({ borderBottom: isActive ? "3px solid black" : "" })}  to="/service">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link`} style={({isActive}) => ({ borderBottom: isActive ? "3px solid black" : "" })}  to="/contact-us">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;