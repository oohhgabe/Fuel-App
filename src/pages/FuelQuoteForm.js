import React, {useState} from "react";
import styles from './FuelQuote.module.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

function FuelQuoteForm(){
    const [selectedDate,setSelectedDated] = useState(null);
    return(
        <div className="FuelQuoteForm">
            <div className={styles.FuelQuoteForm_container}>
                <form>                    
                <div className={styles.FuelQuoteForm_p}>
                        Gallons Requested:
                        <input type="text" className={styles.FuelQuoteForm_inputText} name="Gal_Req"/>
                    
                        Deliver Address:
                        <input type="text" className={styles.FuelQuoteForm_inputText} name="Del_Add" readOnly={true} value="Get From Profile"/>

                        Delivery Date:
                        <div className={styles.DateTextBox}>
                        <DatePicker
                            popperPlacement="bottom"
                            selected={selectedDate}
                            onChange={date => setSelectedDated(date)}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                        />
                        </div>

                        Suggested Price/Gallon:
                        <input type="text" className={styles.FuelQuoteForm_inputText} name="Sug_Pri" readOnly={true} value="Get From # Of Gallons"/>

                        Total Amount Due:
                        <input type="text" className={styles.FuelQuoteForm_inputText} name="Tot_Amo" readOnly={true} value="Total Amount = Gallons * Price"/>
                        

                        <input type="submit" className={styles.FuelQuoteForm_inputSubmit} value="Submit"/>                       
                </div>
                </form>
            </div>
        </div>
    );
}

export default FuelQuoteForm;