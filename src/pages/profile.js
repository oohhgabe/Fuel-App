import React, { useEffect,useState } from "react";
import './ProfileManagement.css';
import { useNavigate } from "react-router-dom"

function Profile({props}) {
	let navigate = useNavigate();
    const [Loading,setLoading] = useState(false)
    const [backendDetails, setBackendDetails] = useState({
        id: 0,
        username: "",
        password: ""
    })

    useEffect(() => {
        setLoading(false)
        fetch('http://localhost:5000/login_info')
        .then(res => {
            return res.json();
        })
        .then( data => {
            setBackendDetails(data.currentlyLoggedIn.at(0))
            setLoading(true);
        })
    },[]);

    useEffect(() =>{
        if(Loading && backendDetails === undefined){
            alert("Please Login");
            navigate('/LoginForm');
        }
        else if(Loading && backendDetails !== undefined){
           // console.log(backendDetails)
        }
    },[backendDetails])

    const [backendData, setBackendData] = useState([])
    const value = {backendDetails}
    
    useEffect(() => {
        fetch('http://localhost:5000/pm_info',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
        .then(res => {
            return res.json();
        })
        .then( data => {
            //console.log(data)
            setBackendData(data.result)
        })
    },[backendDetails]);

    return(
        <div classname="EditProfile">
            <h1>Profile</h1>
            <div class="body">
							{backendData}
						{backendData.map((val,key) =>{
                    return(
                        val.JSON
                    );
                })} 
                <form>
                    <label>
                        <div class="input">                            
                            Full Name:
                            <input type="text"
                                   value={backendData}
                                   placeholder=""
																	 disable
                            /><br></br>
                        </div>
                        <div class="input">
                            Address 1:
                            <input type="text"
                                   value="test"
																	 disable
                            /><br></br>
                        </div>
						<div class="input">
                            Address 2:
                            <input type="text"
                                   value="test"
																	 disable
                            /><br></br>
                        </div>
						<div class="input">
                            City:
                            <input type="text"
                                   value="test"
																	 disable
                            /><br></br>
                        </div>
                        <div class="input">
                            Five digit zip code:
                            <input type="text"
                                   value="test"
																	 disable
                            /><br></br>
                        </div>
												<div class="input">
                        State
                        <input type="text" value="soon" disable/><br></br>
                        </div>
                    </label>      
                     
                </form>
            </div>
        </div>
    );
}

export default Profile;