var mongoose = require('mongoose');
// Setup schema
var contactSchema = mongoose.Schema({
    userData: [{
        type: Object, //[lat,long, timestamp]
        required: true
    }],
    email: {
        type: String,
        required: true
    },
    name:String,
    gender: String,
    phone: Number,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}