import usertable from './usertable.js';
//import userdb from "./userdb.js";

const users = new usertable();
users.createUser("admin", "1234");
// Using .then because it returns a promise
users.getByUsername("admin")
	.then((user) => {
		console.log(user)
	})
console.log("done");