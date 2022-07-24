import express from 'express';
import registerRoute from "./routes/register.route.js";
import loginRoute from "./routes/login.route.js";
import FuelQuoteRoute from "./routes/FuelQuote.route.js";

const app = express();
app.use(express.static('public'))
////////// Below (lines 5,6,7 does similar things as lines 9,10 keeping just in case) ////////
//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
///////// above (lines 5,6,7 does similar things as lines 9,10 keeping just in case)////////
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.listen(5000, () => console.log("server created in 5000"))

let info = [];

app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  
    next();
  });

app.use('/',FuelQuoteRoute);


app.use('/', registerRoute);
app.use('/', loginRoute);

let pm_info = [];
app.post('/ProfileManagement', (req, res) => {
    console.log("Received New Profile Update");
    var newInfo = {
        FullName: req.body.details.FullName,
        Address1: req.body.details.Address1,
        Address2: req.body.details.Address2,
        City: req.body.details.City,
        ZipCode: req.body.details.ZipCode,
        State: req.body.details.State
    }
    pm_info.push(newInfo);
    console.log(pm_info);
    res.json({
        status: "success",
        Details: req.body
    });
});

app.get('/pm_info', (req, res) => {
    res.json({pm_info});
});