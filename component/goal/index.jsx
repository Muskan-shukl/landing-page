import React from "react";
import './goal.css'

const Goal = ({ title }) => {

    return (
        <>
            <div className="goal">
                <h1>
                    {title}
                </h1>
                <p>Get on rocket with us and
                    <div>skyrocket your business</div>  </p>
                <section>Websites Cum Funnel</section>
                <div className="leadBox">
                    <form className="form-inline" method="POST" data-email="example@email.net" autocomplete="off" name="Design-LeadSheet">

                        <input type="Name" id="Name" placeholder="Enter Name" name="name" required />
                        <input type="tel" id="Phone" placeholder="Enter Phone" name="phone" required />
                        <div><button className="btn  ">GET STARTED</button></div>
                    </form>
                </div>

            </div>

        </>
    )
}
export default Goal