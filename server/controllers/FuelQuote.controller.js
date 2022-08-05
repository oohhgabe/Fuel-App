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

const getAddress = async (req,res) =>{
    console.log(req.body.backendDetails.username);
    console.log(req.app.locals.client.username);
    await quote.getAddress(req.app.locals.client.username)
    .then((result) => {
        let temp = result.address1
        res.json(temp);
    })
}

export {createInfo,getInfo,getAddress};