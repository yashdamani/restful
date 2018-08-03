const mongoose  = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/restData', function(err){
    if(err){
        throw err;
    };
    console.log("Database Connected!");
});
