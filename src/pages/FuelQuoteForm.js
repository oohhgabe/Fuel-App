import React, {useEffect, useState} from "react";
import styles from './FuelQuote.module.css';
import { useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';



function FuelQuoteForm({props}){
    let navigate = useNavigate();
    const [Loading,setLoading] = useState(false)
    const [backendDetails, setBackendDetails] = useState({
        id: 0,
        username: "",
        password: "",
    })
    
    useEffect(() => {
        setLoading(false)
        fetch('http://localhost:5000/login_info')
        .then(res => {
            return res.json();
        })
        .then( data => {
            setBackendDetails(data.currentlyLoggedIn.at(0))
            setLoading(true)
        })
    },[]);
    
    useEffect(() =>{
        if(Loading && backendDetails === undefined){
            //console.log(backendDetails)
            alert("Please Login");
            navigate('/LoginForm');
        }
        /*else if(Loading && backendDetails !== undefined){
            console.log(backendDetails)
        }*/
    },[backendDetails])
    

    const [selectedDate,setSelectedDated] = useState(null);
        
    const [data,setData] = useState({
        Gal_Req: 0,
        Del_Add: "9999 Some St.",
        Del_Dat: "",
        Sug_Pri: 689,
        Tot_Amo: 0,
        Users_Id: 0
    })
    
    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    }
    
    const newHandle = () =>{
        setData({
            Gal_Req: data.Gal_Req,
            Del_Add: data.Del_Add,
            Del_Dat: selectedDate,
            Sug_Pri: data.Sug_Pri,
            Tot_Amo: data.Gal_Req * data.Sug_Pri,
            Users_Id: backendDetails.id
        });
        //console.log("first")
        
    }
    //submits data to the backend
    const handleSubmit = async (event) => {
        setData(props);
        event.preventDefault();
        //console.log("Second")
        setData({
            Gal_Req: data.Gal_Req,
            Del_Add: data.Del_Add,
            Del_Dat: selectedDate,
            Sug_Pri: data.Sug_Pri,
            Tot_Amo: data.Gal_Req * data.Sug_Pri,
            Users_Id: backendDetails.id
        });
        if(data.Del_Dat === null || data.Gal_Req === 0){
            alert("Please Revise Your Input");
            navigate('/FuelQuoteForm')
        }else{

            
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
        //console.log(b);
        }
        
    }
    

    return(
        <div className="FuelQuoteForm">
            <div data-testid="test_1" className="fuelQuoteForm">
                <div className={styles.FuelQuoteForm_container}>
                    <form onClick={newHandle} onSubmit={handleSubmit}>
                        <div data-testid="test_2" className={styles.FuelQuoteForm_p}>
                            Gallons Requested:
                                <input type="text"
                                    className={styles.FuelQuoteForm_inputText}
                                    name="Gal_Req"
                                    value={setData.Gal_Req}
                                    placeholder={"Please Enter Amount of Gallons"}
                                    onChange={handleChange}
                                />

                            Deliver Address:
                                <input type="text"
                                    className={styles.FuelQuoteForm_inputText}
                                    name="Del_Add"
                                    readOnly={true}
                                    placeholder="Address"
                                    value={data.Del_Add}
                                    />

                            Deliver Date:
                            <div className={styles.DateTextBox}>
                                <DatePicker
                                    popperPlacement="bottom"
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDated(date)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText={"Please Enter a Deliver Date"}
                                    minDate={new Date()}
                                    />
                            </div>

                            Suggested Price/Gallon:
                                <input type="text"
                                    className={styles.FuelQuoteForm_inputText}
                                    name="Sug_Pri"
                                    readOnly={true}
                                    placeholder={"Suggested Price"}
                                    value={data.Sug_Pri}
                                />

                            Total Amount Due:
                                <input type="text"
                                    className={styles.FuelQuoteForm_inputText}
                                    name="Tot_Amo"
                                    readOnly={true}
                                    placeholder={"Total Amount"}
                                    value={data.Gal_Req * data.Sug_Pri}
                                />

                                <input type="submit" name="Submission" className={styles.FuelQuoteForm_inputSubmit} value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default FuelQuoteForm;