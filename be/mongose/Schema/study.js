const mongoose = require('mongoose')
const study = new mongoose.Schema({
    title:String,
    img:String,
    contain:String,
    time:String,
    num:{
        type:Number,
        default:5
    }
    
})
const sty = mongoose.model('Sty', study)

module.exports={ sty }