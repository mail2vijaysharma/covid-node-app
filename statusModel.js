var mongoose = require('mongoose');
// Setup schema
var statusSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: Number,
    status:String,
    intersection:Object, // [{name,gender,place,time},{name,gender,place,time},{name,gender,place,time}]
    published_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Status = module.exports = mongoose.model('status', statusSchema);
module.exports.get = function (callback, limit) {
    Status.find(callback).limit(limit);
}