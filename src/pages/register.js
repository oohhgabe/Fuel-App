import React, { useState } from "react";
import '../components/Account/Account.css'
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const Error = styled.h2 `
  color: red;
  font-size: 12px;
  align-items: center;
  margin-top: -25px;
  margin-bottom: 10px;
`;

function RegisterForm({props}){
    let navigate = useNavigate();
    const [details, setDetails] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState("");

    const handleChange = (event) => {
        setDetails({...details, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
        setDetails(props);
        console.log(details);
        event.preventDefault();
        setDetails({
            username: details.username,
            password: details.password
        });
        if (details.username != "" && details.password != ""){
            const value = {details};

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            };

            const response = await fetch('http://localhost:5000/register', options);
            const b = await response.json();
            console.log(b);
            navigate('/AccountCreated');
        } else
            setError("Error some fields are empty!")
    }

    return (
        <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className="form-group">
                        <label class="special" htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={setDetails.username}
                            placeholder={details.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label class="special" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={setDetails.password}
                            placeholder={details.password}
                            onChange={handleChange}
                        />
                    </div>
                    {(error != "") ? (<Error>{error}</Error> ) : ""}
                </div>
                <input type="submit" className="special" value="REGISTER"/>
                </form>
            </div>
        </div>

    )
}
export default RegisterForm;