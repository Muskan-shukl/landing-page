import React from "react"
import './form.css'
import { useNavigate } from "react-router-dom"
const Form=()=>{
    const navigate = useNavigate()
    const clickHandler = () =>{
        return navigate('/footer')
    }
    return(
        <>
        <div className="formContainer ">
                <form class="form">

                <input type="Name" id="Name" placeholder="Enter Name"  autocomplete="off"  name="name" required/>
                <input type="tel" id="Phone" placeholder="Enter Phone"  autocomplete="off"  name="phone" required/>
                <input type="Email" id="Email" placeholder="Enter Email"  autocomplete="off"  name="email" required/>
                <button onClick={()=>clickHandler()} className="btn btn-primary px-3 topBtn" type="submit">Book a Call</button>
                </form>
                 
            </div>
        
        </>
    )
}
export default Form

