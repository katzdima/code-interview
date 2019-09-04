var express = require('express');
var router = express.Router();

const Account = require('../../models/account/Account');

module.exports = router.post('/', async function(req, res, next) {
	const {email, name, age} = req.body;
	const account = new Account({email, name, age});
	await account.save();
	return res.send({message: 'success'});
});