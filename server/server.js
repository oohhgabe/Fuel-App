import express from 'express';
import registerRoute from "./routes/register.route.js";
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

app.get('/api', (req,res) => {
    res.json({info})
})

app.post('/create', (req,res)=>{
    console.log("Recieved New Data");
    var newInfo = {
        Gal_Req: req.body.data.Gal_Req, //req.body is to access the whole body information and req.body.(from file where you saved your states) to access specific values
        Del_Add: req.body.data.Del_Add,
        Del_Dat: req.body.data.Del_Dat,
        Sug_Pri: req.body.data.Sug_Pri,
        Tot_Amo: req.body.data.Tot_Amo
    }
    info.push(newInfo);
    console.log(info);
    res.json({
        status: "success",
        Data: req.body
    });
});


app.use('/', registerRoute);

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