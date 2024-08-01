import React from "react";
import './design.css'
import design from '../../asserts/image/DesignImg.png'

const Design=()=>{
    return(
        <>
        <div className="design">
            <img src={design} height={600} width={600}/>
            <div className="hd">
             <h1>STUNNING DESIGNS</h1>
             <p>We asked our designer to make
out of the world designs,
she took it too seriously</p>
<h3>UI/UX and Digital Sketching</h3>
<div><button className="btn  ">GET STARTED</button></div>
</div>
        </div>
        </>
    )
}
export default Design