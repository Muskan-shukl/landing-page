import React from "react";
import './estimate.css'
import estimate from '../../asserts/image/estimateimg.png'

const Estimate = () => {
    return (
        <>
            <div className="design">
                <img src={estimate} height={600} width={600} />
                <div className="hd">
                    <h1>ESTIMATE PRICE</h1>
                    <p>Like this alien, are you trying to figure out how much a website costs? Don’t be shy, call us and get a quote</p>
                    <h3>Budget Friendly
                    </h3>
                    <div><button className="btn  ">GET STARTED</button></div>
                </div>
            </div>
        </>
    )
}
export default Estimate