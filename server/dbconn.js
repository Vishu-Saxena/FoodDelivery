const mongoose = require("mongoose");

const DB_connection = async()=>{
    try {
        await mongoose.connect("mongodb+srv://vishusaxena3110:YQ6VkkcfRKXsAezE@cluster0.ces9ye1.mongodb.net/goFood");
        console.log("connected to database");
        const fetched_data = await mongoose.connection.db.collection("foodSample");
        // const data = await fetched_data.find({}).toArray();
        // if(data){
        //     console.log(data);
        // }else{
        //     console.log("nothing found");
        // }
    } catch (error) {
        console.log("error in connecting database");
        console.log(error);
    }
    
}

module.exports = DB_connection