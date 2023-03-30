import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom"

const Header = (props) =>{
    const Navigate = useNavigate();

    const Goback = ()=>{
        Navigate(-1)
    }

    const [theme , setTheme] = useState('light-theme');

    const toggleTheme = () =>{
        theme === "dark-theme" ? setTheme("dark-theme") : setTheme("light-theme")
        alert('hi')
    };

    useEffect(()=>{

            document.body.className = theme;

    },[theme]);
    
    // console.log(history)
    return(
        <header id="header">
            <div className="container mt-5">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 d-flex flex-column order-lg-first order-sm-last">
                            <h1 className="header-title">
                                {props.mainTitle} <strong className="name-brand"> Syed Hamza {props?.params}</strong>
                            </h1>
                            <h3 className="header-subtitle my-3">
                                {props.subtitle}
                            </h3>
                            <div className="mt-3">
                            <NavLink to={props.visitLink} className="btn-get-start">
                                    {props.btname}
                            </NavLink>
                            {props.back && 
                            <button className="btn-get-start ms-3" onClick={Goback} >Go Back</button>
                            }
                    <a href="#" className="btn btn-secondary ms-3" onClick={()=>toggleTheme()} >Secondary</a>

                            </div>
                    </div>
                    <div className="col-lg-6 text-end text-sm-center order-lg-last order-sm-first">
                        <img src={props.picture} alt="photo" className="img-fluid animated"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;