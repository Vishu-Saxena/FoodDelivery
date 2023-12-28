const express = require('express');
const user = require('..models/userSchema');
const router = express.Router();

router.post("/signup" , async(req ,res)=>{
    try {
        const data=  await user.create({
            name : "mansi saxena",
            email : "mansisaxena@gmail.com",
            password : "123",
            location : "fkdjfla kjfhakjdhf akldjhfkaj dh"
        })
        res.status(200).json({message : data , success : true});
    } catch (error) {
        console.log(error);
        res.send({message : "error in sign up route" , success : false})
    }
})

module.exports = router;