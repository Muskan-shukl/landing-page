import React from "react";
import './join.css'
import { useNavigate } from "react-router-dom";

const Join=()=>{
    const navigate=useNavigate()
    const clickHandler=()=>{
        return navigate('/estimate')
    }
    
    return(
        <>
        <div className="Dynamic">
           <h1>Join Us</h1>
           <p>I know your idea is out of the world,


<div>get there with our astronauts.</div>  </p>
        <section className="Dyna">Join the Club!</section>
        <div className="leadBox">
                <form className="form-inline" method="POST" data-email="example@email.net"autocomplete="off" name="Design-LeadSheet">

                
                <div><button onClick={()=>clickHandler()}  className="btn  ">GET STARTED</button></div>
                </form>
            </div>

        </div>
        
        </>
    )
}
export default Join