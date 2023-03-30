import React from "react";
import Header from "./Header";
import AboutImg from './images/Group 349.png';
import { useParams } from "react-router-dom";


const About = () =>{
    const {fname} = useParams();
    return(
        <Header 
        mainTitle="Grow your business with"
        params={fname}
        subtitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        visitLink="/contact-us"
        btname="Contact Now"
        back={true}
        picture={AboutImg}
    />
    )
}

export default About;