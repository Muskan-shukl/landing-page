import React from "react";
import './responsive.css'
import { useNavigate } from "react-router-dom";

const Responsive=()=>{
    const navigate=useNavigate()
    const clickHandler=()=>{
       return navigate('/goal')
    }
    return(
        <>
        <div className="Dynamic">
           <h1>MOBILE FRIENDLY</h1>
           <p>Is your website as

<div>friendly as this alien?</div>  </p>
        <section className="Dyna">Dynamic and Responsive Website</section>
        <div className="leadBox">
                <form className="form-inline" method="POST" data-email="example@email.net"autocomplete="off" name="Design-LeadSheet">

                
                <div><button onClick={()=>clickHandler()} className="btn  ">GET STARTED</button></div>
                </form>
            </div>

        </div>
        
        </>
    )
}
export default Responsive