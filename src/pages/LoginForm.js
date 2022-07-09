import React, { useState } from "react";
import '../components/Account/Account.css'
import styled from "styled-components";

const Error = styled.h2 `
    color: red;
    font-size: 12px;
    align-items: center;
`;

function LoginForm({Login, error}) {
    const [userDetails, setDetails] = useState({username: "", password: ""});
    const submitHandler = e => {
        e.preventDefault();
        Login(userDetails);
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="base-container">
                <div className="header">Login</div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label class="special" htmlFor="username">Username</label>
                            <input type="text" class = "special" name="username" placeholder="username" onChange={e => setDetails({...userDetails, username: e.target.value})} value={userDetails.username}/>
                        </div>
                        <div className="form-group">
                            <label class="special" htmlFor="password">Password</label>
                            <input type="password" class = "special" name="password" placeholder="password" onChange={e => setDetails({...userDetails, password: e.target.value})} value={userDetails.password}/>
                        </div>
                        <Error>{(error != "") ? (<div className="error">{error}</div> ) : ""}</Error>
                        <input type="submit" class="special"value="LOGIN"/>
                    </div>
                </div>
            </div>
        </form>

    );
}

export default LoginForm;