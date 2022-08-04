import pmtable from "../pmtable.js";
import fuelQuoteTable from "../FuelQuoteTable.js";
const profile = new pmtable();
const fuelQuote = new fuelQuoteTable();
let quote = [];

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

        profile.getByUsername(req.body.data.username)
            .then((result) => {
                if (result === undefined)
                    res.send({message: "Couldn't calculate quote!"});
                else if (result === "TX")
                    locationFactor = 0.02;
                else
                    locationFactor = 0.04;
            });

        fuelQuote.getUserHistory(req.body.data.Users_Id)
            .then((result) => {
                if (result === undefined)
                    console.log("Couldnt calculate quote")
                else if (result === 0)
                    console.log("No history found")
                else if (result > 0)
                    console.log("History found!")
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