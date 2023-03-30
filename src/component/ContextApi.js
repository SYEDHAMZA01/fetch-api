import React, { useContext, useEffect, useState } from "react";
import Image1 from './images/portfolio/portfolio-1.jpg'
import Image2 from './images/portfolio/portfolio-2.jpg'
import Image3 from './images/portfolio/portfolio-3.jpg'
import Image4 from './images/portfolio/portfolio-4.jpg'
import Image5 from './images/portfolio/portfolio-5.jpg'
import Image6 from './images/portfolio/portfolio-6.jpg'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [result , setResult] = useState([]);
    const ApiData = async ()=>{
        const responce = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos?_limit=12")
        setResult(await responce.json())
        // let hamza = await responce.json();
        // console.log(hamza)
    }
    useEffect(()=>{
        ApiData();
    },[])

    const data = [
        {
            title: "Hamza",
            imagePath: Image1
        },
        {
            title: "Hamza",
            imagePath: Image2
        },
        {
            title: "Hamza",
            imagePath: Image3
        },
        {
            title: "Hamza",
            imagePath: Image4
        },
        {
            title: "Hamza",
            imagePath: Image5
        },
        {
            title: "Hamza",
            imagePath: Image6
        },
    ]

    return (
    <AppContext.Provider value={data}>{children}</AppContext.Provider>
)
};

const useGlobalContext = () =>{
    return useContext(AppContext);
};

export { AppProvider , useGlobalContext};