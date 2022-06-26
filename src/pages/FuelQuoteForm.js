import React, {useState} from "react";
import './FuelQuote.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

function FuelQuoteForm(){
    const [selectedDate,setSelectedDated] = useState(null);
    return(
        <div classname="FuelQuoteForm">
            <h1>Fuel Quote Form</h1>
            <div class="body">
                <p>Form Supposed To Go Here</p>
                <form>
                    <label>
                        <div class="FormQuote">                            
                            Gallons Requested:
                            <input type="text" name="Gal_Req"/><br></br>
                        </div>
                        <div class="FormQuote">
                            Deliver Address:
                            <input type="text" name="Del_Add" readOnly={true} value="get from profile"/><br></br>
                        </div>
                        <div class="FormQuote">
                            Delivery Date:
                            <div class="dateAlignment">
                            <DatePicker
                                popperPlacement="bottom"
                                selected={selectedDate}
                                onChange={date => setSelectedDated(date)}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                />
                            </div>
                        </div>
                        <div class="FormQuote">
                            Suggested Price/gallon:
                            <input type="text" name="Sug_pri" readOnly={true} value="get from # of gallons"/><br></br>
                        </div>
                    </label>                    
                    <input type="submit" value="Submit"/><br></br>
                </form>
            </div>
        </div>
    );
}

export default FuelQuoteForm;