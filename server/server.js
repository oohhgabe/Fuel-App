const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.listen(5000, () => console.log("server created in 5000"))


app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  
    next();
  });

app.post('/create', (req,res)=>{
    console.log("Recieved New Data");
    console.log(req.body);
    const data = req.body;
    res.json({
        status: "success",
        Gal_Req: data.Gal_Req,
        Del_Add: data.Del_Add,
        Del_Dat: data.Del_Dat,
        Sug_Pri: data.Sug_Pri,
        Tot_Amo: data.Tot_Amo
    });
});