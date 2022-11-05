const mongoose = require('mongoose')
const {Schema}=mongoose

const diseaseSchema = new Schema({
        image:String,
        name:String,
        disease:String
})

module.exports=mongoose.model('Disease',diseaseSchema)