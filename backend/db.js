const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://amresh164singh:BsniUunyA8Cqjn3E@cluster0.kjhtix0.mongodb.net/TryProjectsDB?retryWrites=true&w=majority"
const mongoDB = async()=>{
    await mongoose.connect(mongoURI  , {useNewUrlParser : true} ).then(function(err,result){
        // const fetched_data =  mongoose.connection.db.collection("projects_data");
        // fetched_data.find({}).toArray(function(err,data){
        //     if (err) console.log("error")
        //     else console.log(data)
        // })

    });
    
};

module.exports = mongoDB;
