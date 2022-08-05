import usertable from "../usertable.js";
import bcrypt from "bcrypt";
const users = new usertable();

let currentlyLoggedIn = [];

const loginInfo = (req, res) => {

    if (req.body.details.username != '' && req.body.details.password != '') {

        if(req.body.details.username.length > 25 || req.body.details.password.length > 50)
            res.send({message: "username or password exceeds maximum length."});

        users.getByUsername(req.body.details.username)
            .then((result) => {
                if (result == undefined)
                    res.send({message: "Couldn't find your account"})
                else {
                    bcrypt.compare(req.body.details.password, result.password)
                        .then((isPasswordValid) => {
                            if (isPasswordValid) {
                                req.app.locals.client = result;
                                res.send(result);
                                currentlyLoggedIn[0] = result;
                            }
                            else
                                res.send({message: "Your password is incorrect"});
                        });
                }
            });
    }
}

const getLoginInfo = (req, res) => {
    res.json({currentlyLoggedIn});
}

export {loginInfo, getLoginInfo};