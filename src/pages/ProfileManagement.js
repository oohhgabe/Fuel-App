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
                            <input type="text" name="FullName" maxLength = "50"/><br></br>
                        </div>
                        <div class="input">
                            Address 1:
                            <input type="text" name="Address1" maxLength = "100"/><br></br>
                        </div>
						<div class="input">
                            Address 2:
                            <input type="text" name="Address2" maxLength = "100"/><br></br>
                        </div>
						<div class="input">
                            City:
                            <input type="text" name="City" maxLength = "100"/><br></br>
                        </div>
						<div class="input">
                            <form>
                                <label>
                                    Select State
                                </label>
                                <select>
                                    <option value = "DBcodes">DB will store these 2 character codes</option>
                                </select>
                            </form>
                        </div>
                        <div class="input">
                            Zip Code:
                            <input type="text" name="ZipCode"/><br></br>
                        </div>
                    </label>                    
                    <input type="submit" value="Save"/><br></br>
                </form>
            </div>
        </div>
    );
}

export default ProfileManagement;