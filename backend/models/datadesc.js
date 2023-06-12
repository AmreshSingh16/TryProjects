const mongoose = require('mongoose');

const { Schema } = mongoose;

const descSchema = new Schema({
    name:{
        type:String,
        required : true
    },
    img: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    languages: {
        type: [String],
        default : Date.now
    }  
})

module.exports = mongoose.model('projects_data' , descSchema)