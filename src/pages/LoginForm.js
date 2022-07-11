import React, { useEffect,useState } from "react";
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

function LoginForm({props}) {
    let navigate = useNavigate();

    const [details, setDetails] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState("");

    const [backendDetails, setBackendDetails] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/details')
            .then(res => {
                return res.json();
            })
            .then( data => {
                setBackendDetails(data.details)
            })
    },[]);

    const handleChange = (event) => {
        setDetails({...details, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
        let usernameFound = false;
        let passwordFound = false;

        setDetails(props);
        event.preventDefault();
        setDetails({
            username: details.username,
            password: details.password
        });
        for (var i=0; i < backendDetails.length; i++) {
            if (backendDetails.at(i).username == details.username && backendDetails.at(i).password == details.password){
                navigate('/Welcome');
            } else if (backendDetails.at(i).username != details.username && backendDetails.at(i).password == details.password) {
                passwordFound = true;
            } else if (backendDetails.at(i).username == details.username && backendDetails.at(i).password != details.password)
                usernameFound = true;
        }
        if(!usernameFound)
            setError("Incorrect username. Please try again.")
        else if(!passwordFound)
            setError("Incorrect password. Please try again.")

    }

    return (
        <div className="base-container">
            <div className="header">Login</div>
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
                    <input type="submit" className="special" value="LOGIN"/>
                </form>
            </div>
        </div>

    )
}

export default LoginForm;