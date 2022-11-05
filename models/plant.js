const mongoose = require('mongoose')
const {Schema}=mongoose

const plantSchema = new Schema({
        image:String,
        name:String,
        prize:Number,
        link:String
})


module.exports = mongoose.model('Plant',plantSchema)