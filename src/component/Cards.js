import React from "react";
import { NavLink } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Card = (props) => {
    return (
        <div className="card" >
            <img className="card-img-top" src={props.cardImage} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/about" className="btn btn-dark">Go somewhere</NavLink>
                </div>
        </div>
    )
}

export default Card;