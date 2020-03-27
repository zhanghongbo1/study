const mongoose = require('mongoose')
const study = new mongoose.Schema({
    title:String,
    img:String,
    contain:String
})
const sty = mongoose.model('Sty', study)

module.exports={ sty }