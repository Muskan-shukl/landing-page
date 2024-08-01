import React from "react";
// import HomeImage from '../../asserts/image/home.jpg'
import logo from '../../asserts/image/logo1.png'
import './header.css'
import { useNavigate } from "react-router-dom";
import Form from "../form";

const Header = () => {
    const navigate = useNavigate()
    const clickHandler = () => {
        return navigate('/responsive')
    }
    return (
        <>
            <div className="header">
                <nav>
                    <ul>
                        <img src={logo} height={70} width={150} />
                        <button className="button" type="submit">Book a Call</button>
                        <button onClick={() => clickHandler()} >+91-7880649711</button>
                    </ul>
                </nav>


            </div>
            <div className="h">
                <h1>We don’t just create <span>Websites</span></h1>

            </div>
            <div className="p">
                <h1>We create <span> Businesses</span></h1>
            </div>
            <Form />

        </>

    )
}
export default Header