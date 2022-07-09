import React from "react";
import { NavButtonLink2 } from "../components/Navbar/NavbarElements";
import './Welcome.css'

const Welcome = () => {
    return (
        <div className="WelcomePage">
            <div className="welcome">
                <h2>Successfully Logged in!</h2>
                <NavButtonLink2 to ='/home'>Continue</NavButtonLink2>
            </div>
        </div>
    );
}
export default Welcome;
