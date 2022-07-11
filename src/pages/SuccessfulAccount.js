import React from "react";
import { NavButtonLink2 } from "../components/Navbar/NavbarElements";
import './SuccessfulAccout.css'

const AccountCreated = () => {
    return (
        <div className="AccountCreatedPage">
            <div className="welcome">
                <h2> You Successfully Created an Account! Continue to Login.</h2>
                <NavButtonLink2 to ='/LoginForm'>Continue</NavButtonLink2>
            </div>
        </div>
    );
}
export default AccountCreated;