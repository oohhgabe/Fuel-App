import React, {useEffect, useState} from "react";
import styles from './FuelQuote.module.css';



function FuelQuoteHistory(){
    const [backendData, setBackendData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api')
        .then(res => {
            return res.json();
        })
        .then( data => {
            setBackendData(data.info)
        })
    },[]);
   
    return(
        <div className="FuelQuoteHistory">
            <div className={styles.table_box}>
                <table className={styles.table}>
                <tr>
                        <th className={styles.th}>Deliver Date</th>
                        <th className={styles.th}>Gallons Requested</th>
                        <th className={styles.th}>Suggested Price/Gallons</th>
                        <th className={styles.th}>Total Amount</th>
                    </tr>
                {backendData.map((val,key) =>{
                    return(
                        <tr key={val.key}>
                            <th className={styles.th}>{val.Del_Dat}</th>
                            <th className={styles.th}>{val.Gal_Req}</th>
                            <th className={styles.th}>{val.Sug_Pri}</th>
                            <th className={styles.th}>{val.Tot_Amo}</th>
                        </tr>
                    );
                })}
            </table>
            </div>
        </div>
    );
}

export default FuelQuoteHistory