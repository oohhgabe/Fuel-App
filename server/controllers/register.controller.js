import usertable from "../db/usertable.js";
const users = new usertable();

const registerInfo = (req, res) => {
    if (req.body.details.username != '' && req.body.details.password != '') {
        users.createUser(req.body.details.username, req.body.details.password)
        users.getUser(req.body.details.username, req.body.details.password)
            .then((result) => {
                if (result == undefined)
                    res.send({message: "Username taken!"});
                else
                    res.send(result);
            })
    }
}

export default registerInfo;