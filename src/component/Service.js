import React from "react";
import Card from "./Cards";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useGlobalContext } from "./ContextApi";


const Service = () => {

    const data = useGlobalContext();

    console.log(data)
    return (
        <section id="services" className="py-5" >
            <div className="container">
                <div className="main-heading my-4">
                    <h1 className="text-center">The Service</h1>
                </div>
                <div className="row gy-5 mt-4">
                    {data.map((e,i) => {
                        console.log(e)
                        return (
                            <div className="col-md-4" key={i}>
                                <Card
                                    title={e.title}
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                    cardImage={e.imagePath}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Service;