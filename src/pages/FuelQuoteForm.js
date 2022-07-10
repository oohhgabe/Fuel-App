import React, {useEffect, useState} from "react";
import styles from './FuelQuote.module.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
/*import { render } from "@testing-library/react";*/

function FuelQuoteForm({props}){
    const [selectedDate,setSelectedDated] = useState(null);
    
    const [data,setData] = useState({
        Gal_Req: 0,
        Del_Add: "9999 Some St.",
        Del_Dat: "",
        Sug_Pri: 689,
        Tot_Amo: 0
    })
    
    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    }

    
    
    
    const handleSubmit = async (event) => {
        setData(props)
        console.log(data)
        event.preventDefault()
        setData({
            Gal_Req: data.Gal_Req,
            Del_Add: data.Del_Add,
            Del_Dat: selectedDate,
            Sug_Pri: data.Sug_Pri,
            Tot_Amo: data.Gal_Req * data.Sug_Pri
        });

       const value = {data};
    
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        };
        const response = await fetch("http://localhost:5000/create",options);
        const b = await response.json();
        console.log(b);
    
    }

   

    return(
        <div className="FuelQuoteForm">
           
            <div className={styles.FuelQuoteForm_container}>
                <form onSubmit={handleSubmit}>                    
                <div className={styles.FuelQuoteForm_p}>
                        Gallons Requested:
                        <input type="text"
                            className={styles.FuelQuoteForm_inputText} 
                            name="Gal_Req"
                            value={setData.Gal_Req}
                            placeholder={data.Gal_Req}
                            onChange={handleChange}
                        />
                    
                        Deliver Address:
                        <input type="text" 
                            className={styles.FuelQuoteForm_inputText} 
                            name="Del_Add" 
                            readOnly={true} 
                            placeholder={data.Del_Add}
                        />

                        Delivery Date:
                        <div className={styles.DateTextBox}>
                        <DatePicker
                            popperPlacement="bottom"
                            selected={selectedDate}
                            onChange={(date) => setSelectedDated(date)}                           
                            dateFormat="dd/MM/yyyy"
                            placeholderText={data.Del_Dat}
                            minDate={new Date()}
                        />
                       
                        </div>

                        Suggested Price/Gallon:
                        
                        <input type="text" 
                            className={styles.FuelQuoteForm_inputText} 
                            name="Sug_Pri" 
                            readOnly={true}
                            placeholder={data.Sug_Pri}
                        />

                        Total Amount Due:
                        <input type="text" 
                            className={styles.FuelQuoteForm_inputText} 
                            name="Tot_Amo" 
                            readOnly={true} 
                            placeholder={data.Tot_Amo}
                        />
                        

                        <input type="submit" className={styles.FuelQuoteForm_inputSubmit} value="Submit"/>                       
                </div>
                </form>
            </div>
        </div>
    );
}

export default FuelQuoteForm;