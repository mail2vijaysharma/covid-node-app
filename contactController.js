const { parse } = require('json2csv');

const fields = ['name', 'gender', 'time'];
const opts = { fields };
// myData = {
//     name:"Vijay",
//     gender:"M",
//     time:{lat:11,long:22,time:12.00}
// } 
// try {
//   const csv = parse(myData, opts);
//   console.log(csv);
// } catch (err) {
//   console.error(err);
// }

// contactController.js
// Import contact model
Contact = require('./contactModel');
// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var contact = new Contact();
    contact.userData = req.body.userData ? req.body.userData : contact.userData;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.name = req.body.name;


    const fields = ['name', 'gender', 'email', "phone", "userData"];
    try {
        const csv = parse(req.body, fields);
        console.log("hello" + csv);
    } catch (err) {
        console.error(err);
    }

    // save the contact and check for errors
    contact.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    //console.log("vijay" + req)
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        contact.userData = req.body.userData ? req.body.userData : contact.userData;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
        // save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};