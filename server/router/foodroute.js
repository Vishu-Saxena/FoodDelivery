const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')

router.get('/getFooditems' , async(req , res)=>{
    try {
        const foodData = await mongoose.connection.db.collection("foodSample");
        const data = await foodData.find({}).toArray();
        if(data){
            console.log(data);
            res.send({success : true , data : data});
        }else{
            res.send({success : false , message : "no food items present"});
        }
    } catch (error) {
        console.log(error);
        res.send({message : "error in getFooditms route" , success: false})
    }
})
router.get('/getCategory' , async(req , res)=>{
    try {
        const catData = await mongoose.connection.db.collection("category");
        const data = await catData.find({}).toArray();
        if(data){
            console.log(data);
            res.send({success : true , data : data});
        }else{
            res.send({success : false , message : "no category is found"});
        }
    } catch (error) {
        console.log(error);
        res.send({message : "error in getCategory route" , success: false})
    }
})

module.exports = router;