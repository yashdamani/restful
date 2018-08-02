const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username : {
        type: String
    },
    email : {
        type : String
    }
});

var user = module.exports = mongoose.model('User', UserSchema);