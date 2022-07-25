import stateTable from '../stateTable.js'
const states = new stateTable();

states.createState("TX");
states.createState("AL");
states.createState("TN");
states.createState("AK");
states.createState("NY");
states.createState("CA");
states.createState("NV");
states.createState("WM");
states.createState("OH");
states.createState("OK");

const getStates = (req,res) => {
	states.getStates()
	.then((result) =>{
			res.json({result});
	})
}

export {getStates};