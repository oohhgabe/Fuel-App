const express = require('express');
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

let details = [];
app.post('/register', (req, res) => {
    if (req.body.details.username != '' && req.body.details.password != '') {
        console.log("Received New User Details");
        var newDetails = {
            username: req.body.details.username,
            password: req.body.details.password
        }
        details.push(newDetails);
        console.log(details);
        res.json({
            status: "success",
            Details: req.body
        });
    }
});

app.get('/details', (req, res) => {
    res.json({details});
});