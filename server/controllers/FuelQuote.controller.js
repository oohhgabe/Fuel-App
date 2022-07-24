import FuelQuoteTable from '../FuelQuoteTable.js'
const quote = new FuelQuoteTable();

const createInfo = (req,res) =>{
    quote.createQuote(
        req.body.data.Gal_Req,
        req.body.data.Del_Add,
        req.body.data.Del_Dat,
        req.body.data.Sug_Pri,
        req.body.data.Tot_Amo,
        req.body.data.Users_Id
    );
}

const getInfo = (req,res) =>{
    quote.getUserQuote(req.body.backendDetails.id)
    .then((result) =>{
        res.json({result});
    })
}

export {createInfo,getInfo};