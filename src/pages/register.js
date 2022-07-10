import React from "react";
import '../components/Account/Account.css'
import styled from "styled-components";

const RegisterForm = () => {
    return (
        <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label class="special" htmlFor="username">Username</label>
                        <input type="text"  name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label class="special" htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                </div>
                <input type="submit" className="special" value="REGISTER"/>
            </div>
        </div>

    )
}
export default RegisterForm;