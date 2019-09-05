const express = require('express');
const router = express.Router();

const Notification = require('../models/Notification');

router.post('/',(req, res, next)=>{
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

router.get('/', (req,res,next)=>{
    Notification.find({accountId :req.query.accountId },(err, data) => {
        if(err){
            return res.send({"error": err});
        }
        return res.send({data:data , message: 'success'});
    });
});

router.delete('/',(req,res,next)=>{
    const {accountId, color} = req.query;
    Notification.deleteMany({accountId:accountId , color:color},(err)=>{
        if(err){
            return res.send({"error": err});
        }
        return res.send({message: 'success'});
    });
});


module.exports = router;