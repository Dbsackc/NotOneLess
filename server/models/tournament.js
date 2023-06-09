let mongoose = require('mongoose');
let tournamentModel = mongoose.Schema({
    userID: String,
    name: String,    
    description: String,
    status: String,
    round: Number
},
    {
        collection: "Tournament"
    });

module.exports = mongoose.model('tournament', tournamentModel);