import pmtable from "../pmtable.js";
import fuelQuoteTable from "../FuelQuoteTable.js";
const profile = new pmtable();
const fuelQuote = new fuelQuoteTable();
let quote = [];
let name = "";

const PricingModule = (req, res) => {
    if (req.body.data.username !== '' && req.body.data.Gal_Req !== '') {

        let locationFactor = 0.02;
        let rateHistory = 0.01;
        let galReqFactor = null;
        let companyProfitFactor = 0.1;
        let margin = 0;
        let suggestedPrice = 0;
        let totalAmount = 0;

        if (req.body.data.Gal_Req > 1000)
            galReqFactor = 0.02;
        else
            galReqFactor = 0.03;

        fuelQuote.getUsername(req.body.data.Users_Id)
            .then((result2) => {
               name = result2.at(0).username;
               console.log(name);
            });

            console.log("line 34")
            console.log(name)
            console.log("line 36")

        profile.getState(name)
            .then((result) => {
                let temp = result.state;
                console.log(idk)
                if (temp === undefined){
                    console.log(req.body)
                    console.log("ERROR")
                    res.send({message: "Couldn't calculate quote!"});
                }
                else if (temp === "TX"){
                    console.log("got State")
                    locationFactor = 0.02;
                }
                else{
                    console.log("Another State")
                    locationFactor = 0.04;
                }
            });

        fuelQuote.getUserHistory(req.body.data.Users_Id)
            .then((result) => {
                console.log(result['COUNT(*)'])
                if (result['COUNT(*)'] === undefined)
                    console.log("Couldnt calculate quote")
                else if (result['COUNT(*)'] === 0)
                    console.log("No history found")
                else if (result['COUNT(*)'] > 0)
                    console.log("History found!")
                else
                    console.log("Did not work")
            })

        margin = 1.50 * (locationFactor - rateHistory + galReqFactor + companyProfitFactor);
        suggestedPrice = 1.50 + margin;
        totalAmount = req.body.data.Gal_Req * suggestedPrice;
        quote = {
            price: suggestedPrice.toString(),
            total: totalAmount.toString()
        };

        res.send(quote);
    }
}

const getQuote = (req, res) => {
    res.json({quote})
}
export { PricingModule, getQuote }