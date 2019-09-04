const express = require('express');
const router = express.Router();

const Account = require('../../models/account/Account');

module.exports = router.post('/', async function(req, res, next) {
	const {email, name, age} = req.body;
	const account = new Account({email, name, age});
	account.save((err,data)=>{
	if(err){
		if(err.code===11000)//"Duplicated uniqe key" error code. 
		{
			return res.send({"error": "email already exists"});
		}
	}
	else{
		return res.send({message: 'success'});
	}
	});
	 	
});