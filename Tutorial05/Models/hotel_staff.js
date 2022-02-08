var mongoose = require('mongoose');

var schema = mongoose.Schema({
    s_name:String,
    s_post:String
})

module.exports = mongoose.model("hotel_staff",schema)