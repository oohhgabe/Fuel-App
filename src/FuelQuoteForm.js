import React, {useState} from "react";
import './FuelQuote.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

function FuelQuoteForm(){
    const [selectedDate,setSelectedDated] = useState(null);
    return(
        <div classname="FuelQuoteForm">
            <header>
                <nav>
                    <ul>   
                        <h1>
                        <p class="title">Fuel Quote Form</p>
                        <li class="nav-item"><a href="/" class="active">Home</a></li>
                        <li class="nav-item"><a href="/FuelQuoteHistory" class="active">Fuel Quote History</a></li>
                        <li class="nav-item"><a href="/" class="active">Login</a></li>
                        <li class="nav-item"><a href="/" class="active">Registration</a></li>
                        <li class="nav-item"><a href="/" class="active">Profile</a></li>                                                 
                        </h1>                         
                    </ul>
                </nav>
            </header>
            <div class="container">
                <form>                   
                            <p>                            
                            Gallons Requested:
                            <input type="text" name="Gal_Req"/>
                            </p>
                    
                            <p>
                            Deliver Address:
                            <input type="text" name="Del_Add" readOnly={true} value="get from profile"/>
                            </p>
                      
                            <p>
                            Delivery Date:
                            <DatePicker
                                popperPlacement="bottom"
                                selected={selectedDate}
                                onChange={date => setSelectedDated(date)}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                />
                            </p>
                       
                            <p>
                            Suggested Price/gallon:
                            <input type="text" name="Sug_pri" readOnly={true} value="get from # of gallons"/>
                            </p>
                                           
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
}

export default FuelQuoteForm;