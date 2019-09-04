const express = require('express');
const router = express.Router();

const Notification = require('../models/Notification');

module.exports = router.post('/', async function(req, res, next) {
	const {accountId, name, color} = req.body;
	const notification = new Notification({accountId, name, color});
	notification.save((err,data)=>{
        if(err){
            return res.send({"error": err});
        }
        else{
            return res.send({message: 'success'});
        }
	});
	 	
});