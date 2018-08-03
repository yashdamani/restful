const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username : {
        type: String
    },
    email : {
        type : String
    }
});

module.exports = mongoose.model('User', UserSchema);