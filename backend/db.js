const mongoose = require('mongoose');

const mongoURI = ""
const mongoDB = async()=>{
    await mongoose.connect(mongoURI  , {useNewUrlParser : true} ).then(function(err,result){
        const fetched_data =  mongoose.connection.db.collection("projects_datas");
        fetched_data.find({}).toArray(function(err,data){
            if (err) console.log("error")
            else {
                global.project_data = data;
                // console.log(project_data)
            }
        })

    });
    
};
const project_data = require('./models/datadesc')
const projectDB = async(e)=>{
    let data = {}
    await project_data.findOne({ _id: e }).then(async (docs) => {
        data = docs
    })
    return data
};

module.exports = {
    mongoDB,
    projectDB
}
