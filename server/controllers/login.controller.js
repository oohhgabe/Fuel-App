import usertable from "../db/usertable.js";
const users = new usertable();

let currentlyLoggedIn = [];

const loginInfo = (req, res) => {
    if (req.body.details.username != '' && req.body.details.password != '') {
        users.getUser(req.body.details.username, req.body.details.password)
            .then((result) => {
                if (result == undefined)
                    res.send({message: "Your username or password is incorrect"})
                else {
                    res.send(result);
                    currentlyLoggedIn[0] = result;
                }
            })
    }
}

const getLoginInfo = (req, res) => {
    res.json({currentlyLoggedIn});
}

export {loginInfo, getLoginInfo};