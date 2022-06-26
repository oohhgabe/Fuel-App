import React from "react";
import './ProfileManagement.css';

function ProfileManagement(){
    return(
        <div classname="EditProfile">
            <h1>Edit profile</h1>
            <div class="body">
                <form>
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
                            <form>
                                <select class="box" required>
                                    <option value = "DBcodes">DB will store these 2 character codes</option>
                                </select>
                            </form>
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