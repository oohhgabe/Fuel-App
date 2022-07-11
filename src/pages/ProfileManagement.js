import React, { useEffect,useState } from "react";
import './ProfileManagement.css';
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const Error = styled.h2 `
  color: red;
  font-size: 12px;
  align-items: center;
  margin-top: -25px;
  margin-bottom: 10px;
`;


function ProfileManagement({props}) {
    let navigate = useNavigate();

    const [details, setDetails] = useState({
        FullName: "",
        Address1: "",
        Address2: "",
        City: "",
        ZipCode: "",
        State: "",
    })

    const [error, setError] = useState("");

    const [backendDetails, setBackendDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/pm_info')
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
        setDetails(props)
        console.log(details)
        event.preventDefault()
        setDetails({
            FullName: details.FullName,
            Address1: details.Address1,
            Address2: details.Address2,
            City: details.City,
            ZipCode: details.ZipCode,
            State: details.State,
        });

       const value = {details};
    
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        };
        const response = await fetch("http://localhost:5000/ProfileManagement",options);
        const b = await response.json();
        console.log(b);
        navigate('/ProfileUpdatedSuccessfully')
    }

    /*
    const handleSubmit = async (event) => {
        setDetails(props);
        event.preventDefault();
        setDetails({
            FullName: details.FullName,
            Address1: details.Address1,
            Address2: details.Address2,
            City: details.City,
            ZipCode: details.ZipCode,
            State: details.State,
        }); 
    }
    */

    return(
        <div classname="EditProfile">
            <h1>Edit profile</h1>
            <div class="body">
                <form onSubmit={handleSubmit}>
                    <label>
                        <div class="input">                            
                            Full Name:
                            <input type="text" name="FullName" maxLength = "50" required/><br></br>
                        </div>
                        <div class="input">
                            Address 1:
                            <input type="text" name="Address1" maxLength = "100" required/><br></br>
                        </div>
						<div class="input">
                            Address 2:
                            <input type="text" name="Address2" maxLength = "100"/><br></br>
                        </div>
						<div class="input">
                            City:
                            <input type="text" name="City" maxLength = "100" required/><br></br>
                        </div>
                        <div class="input">
                            Five digit zip code:
                            <input type="text" name="ZipCode" pattern="[0-9]{5,}" required/><br></br>
                        </div>
						<div class="input">
                        Select State
                            <select class="box" name="State" required>
                                <option value = "DBcodes">DB will store these 2 character codes</option>
                            </select>
                        </div>
                        <div>
                            <br></br>
                        <input type="submit" value="Save"/> 
                        </div>
                    </label>      
                     
                </form>
            </div>
        </div>
    );
}

export default ProfileManagement;