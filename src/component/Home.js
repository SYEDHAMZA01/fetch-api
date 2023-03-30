import React from "react";
import Header from "./Header";
import HeroImg from './images/Group 430.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Home = () =>{
    return(
        <>
        <Header 
            mainTitle="Welcome to Home Page"
            subtitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            visitLink="/service"
            btname="Get Started"
            picture={HeroImg}
        />
        </>
    )
}

export default Home;