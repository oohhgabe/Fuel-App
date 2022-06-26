import React from "react";
import styles from './FuelQuote.module.css';

//data to text out the table
const data=[
    {date: "12/12/1212", gallons: 100, suggested: 200, total: 30000},
    {date: "14/14/1414", gallons: 500, suggested: 600, total: 70000},
    {date: "18/18/1818", gallons: 900, suggested: 1000, total: 1100000},
]

function FuelQuoteHistory(){
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
                    {data.map((val,key) => {
                        return(
                            <tr key={key}>
                                <td className={styles.td}>{val.date}</td>
                                <td className={styles.td}>{val.gallons}</td>
                                <td className={styles.td}>{val.suggested}</td>
                                <td className={styles.td}>{val.total}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    );
}

export default FuelQuoteHistory