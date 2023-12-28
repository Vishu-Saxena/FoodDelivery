const express = require("express");
const userRoute = require("./router/routeuser");
// importing connection function
const DB_connection = require("./dbconn");

const app = express();

DB_connection(); // invoked databse connection
app.get('/' , (req ,res)=>{
    res.send("Hi")
});

app.use('/api/user' , userRoute);

app.listen(3000 , ()=>{
    console.log("server running on port no 3000");
})