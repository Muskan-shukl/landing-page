import React from "react";
import './footer.css'
import footer from '../../asserts/image/Landing.png'
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    const clickHandler = () => {
        return navigate('/header')
    }
    return (
        <>
            <div className="footer">
                {/* <img src={footer} height={500} width={1200}/> */}
                <p className="jaadu"><div> Jaadu is sad. He is not eating anything.</div>
                    He has lost 20 kgs and turned pale. Do you know why he is sad?</p>
                <div><h1>BECAUSE YOU HAVEN’T CALLED YET</h1></div>
                <div className="formContainer ">
                    <form class="form">

                        <input type="Name" id="Name" placeholder="Enter Name" autocomplete="off" name="name" required />
                        <input type="tel" id="Phone" placeholder="Enter Phone" autocomplete="off" name="phone" required />
                        <input type="Email" id="Email" placeholder="Enter Email" autocomplete="off" name="email" required />
                        <button onClick={() => clickHandler()} className="btn btn-primary px-3 topBtn" type="submit">Book a Call</button>
                    </form>

                </div>

            </div>
        </>
    )
}
export default Footer