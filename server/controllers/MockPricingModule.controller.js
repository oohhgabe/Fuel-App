/* FOR TESTING PURPOSES */
const PricingModuleMock = (req, res) => {
    if (req.body.data.username !== '' && req.body.data.Gal_Req !== 0) {
        let locationFactor = null;
        let rateHistory = null;
        let galReqFactor = null;
        let companyProfitFactor = 0.1;
        let margin = 0;
        let suggestedPrice = 0;
        let totalAmount = 0;
        let testQuote = null;

        if (req.body.data.Gal_Req > 1000)
            galReqFactor = 0.02;
        else
            galReqFactor = 0.03;

        if (req.body.data.state === "TX")
            locationFactor = 0.02;
        else
            locationFactor = 0.04;

        if (req.body.data.history === "True")
            rateHistory = 0.01;
        else
            rateHistory = 0;

        margin = 1.50 * (locationFactor - rateHistory + galReqFactor + companyProfitFactor);
        suggestedPrice = 1.50 + margin;
        totalAmount = req.body.data.Gal_Req * suggestedPrice;
        testQuote = {
            price: suggestedPrice.toString(),
            total: totalAmount.toString(),
        };

        res.send(testQuote);
    } else
        res.send({message: "Cannot Calculate Quote."});
}

export default PricingModuleMock;