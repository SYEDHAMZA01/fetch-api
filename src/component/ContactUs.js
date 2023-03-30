import React, { useState } from "react";
import Hamza from "./api/fetchapi";

const ContactUs = () => {

    const [data , setData] = useState({
        fullname :"",
        email:"",
        num:"",
        desc:""
    });
    console.log(data);

    const InputEvent = (event) =>{
        const {name , value} = event.target ;

        setData( (preEvent) =>{
            return{
                ...preEvent,
                [name] : value ,
            };
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`
        Full Name : ${data.desc} 
        Email : ${data.email}
        Number : ${data.num}
        Msg : ${data.desc}`)
    }

    return (
        <section id="contact-us">
            <div className="container">
                <div className="main-heading my-5">
                    <h1 className="text-center">The Contact</h1>
                    <Hamza/>
                </div>
                <div className="row">
                    <div className="col-md-8 mx-auto contact-div">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group ">
                                <label htmlFor="full-name">Full Name</label>
                                <input type="text" name="fullname" value={data.fullname} onChange={InputEvent} className="form-control" id="full-name" placeholder="Enter Full Name" />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="email">Email address</label>
                                <input type="email" name="email" value={data.email} onChange={InputEvent} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="number">Phone no</label>
                                <input type="number" name="num" value={data.num} onChange={InputEvent} className="form-control" id="number" placeholder="Enter Full Name" />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                <textarea className="form-control" name="desc" value={data.desc} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-primary my-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;