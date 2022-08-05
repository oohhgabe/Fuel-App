import fueldb from './fueldb.js';


class FuelQuoteTable extends fueldb {
    constructor() {
        super();
        const sql = `CREATE TABLE IF NOT EXISTS FuelQuote( 
            Quote_Id integer PRIMARY KEY, 
            Gallons_Requested float, 
            Delivery_Address text, 
            Deliver_Date text, 
            Suggested_Price float, 
            Total_Amount float, 
            Users_Id int, 
            CONSTRAINT FK_FuelQuoteusers FOREIGN KEY (Users_Id) REFERENCES users(id)
            )`
        this.run(sql)
    }

    getUsername(Users_Id){
        return this.all(
            `SELECT username FROM users WHERE id=?`,
            [Users_Id]
        );
    }

    createQuote(Gal_Req,Del_Add,Del_Dat,Sug_Pri,Tot_Amo,Users_Id){
        return this.run(
            `INSERT INTO FuelQuote (Gallons_Requested, Delivery_Address, Deliver_Date, Suggested_Price, Total_Amount, Users_Id) VALUES (?,?,?,?,?,?)`,
            [Gal_Req,Del_Add,Del_Dat,Sug_Pri,Tot_Amo,Users_Id]
        )
    }

    getUserQuote(Users_Id){
        return this.all(
            `SELECT * FROM FuelQuote WHERE Users_Id=?`,
            [Users_Id]
        );
    }
    getUserHistory(Users_Id){
        return this.get(
            `SELECT COUNT(*) FROM FuelQuote WHERE Users_Id = ?`,
            [Users_Id]
        );
    }

    getAddress(username){
        return this.get(
            `SELECT address1 FROM pmtable WHERE username=?`,
            [username]
        )
    }
}

export default FuelQuoteTable