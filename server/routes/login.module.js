var express = require('express');
var router = express.Router();

var users = [
    {
        username: "admin", password: "admin123"
    }
]
router.get('/login', function (req, res, next) {
    res.send("Welcome to login page")
});
router.post('/login', function (req, res){
    let result = users.find(user => user.username == req.body.username);
    if (result) {
        if (result.password == req.body.password) {
            res.status(200).send({
                message: "Successful Login!"
            })
        } else {
            res.status(200).send({
                message: "Incorrect Password!"
            })
        }
    } else {
        res.status(200).send({
            message: "No account exists"
        })
    }
})
module.exports = router;