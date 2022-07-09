import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    let navigate = useNavigate();
    const adminUser = {
        username: "admin",
        password: "admin123"
    }

    const [user, setUser] = useState({username: ""});
    const [error, setError] = useState("");

    const Login = details => {
        if (details.username == adminUser.username && details.password == adminUser.password)
            setUser({username: details.username});
        else if (details.username != adminUser.username)
            setError("Incorrect username. Please try again.");
        else if (details.password != adminUser.password)
            setError("Incorrect password. Please try again.")
    }
    const Logout = () => {
        setUser({username: ""});
    }
    return (
        <div className="Login">
            {(user.username != "") ? (
                navigate('/Welcome')
            ) : ""};
            <LoginForm Login={Login} error={error}/>
        </div>
    )
}

export default LoginPage;