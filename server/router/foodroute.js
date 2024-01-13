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
});

// route to fetch food itm of a given category
router.get('/foodofsinglesamecat/:catname' , async (req , res)=>{
    try {
        const {catname} = req.params;
        const foodData = await mongoose.connection.db.collection("foodSample");
        const data = await foodData.find({CategoryName:catname}).toArray();
        if(data.length){
            return res.send({success : true , data});
        }
        return res.send({success:false , message : "Nothing is found for this category"});
    } catch (error) {
        console.log(error);
        res.send({message : "error in foodofsinglesamecat route" , success: false})
    }
})

// route to get this food item as per given id
router.get("/getsingleFood/:id" , async(req , res)=>{
    try {
        const {id} = req.params;
        console.log(id);
        const foodData =await mongoose.connection.db.collection("foodSample");
        const data = await foodData.find({_id : id}).toArray();
        console.log(data);
        if(data.length){
            return res.send({success : true , data});
        }
        return res.send({success:false , message : "Nothing is found for this Id"});
    } catch (error) {
        console.log(error);
        res.send({message : "error in getsingleFood route" , success: false})
    }
})

module.exports = router;