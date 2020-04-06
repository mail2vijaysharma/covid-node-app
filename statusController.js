// contactController.js
// Import contact model
Status = require('./statusModel');
// Handle index actions
exports.index = function (req, res) {
    Status.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Status retrieved successfully",
            data: contacts
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    //     var contact = new Status();
    //     contact.name = req.body.name ? req.body.name : contact.name;
    //     contact.gender = req.body.gender;
    //     contact.email = req.body.email;
    //     contact.phone = req.body.phone;
    //     contact.status = req.body.status;
    //     // save the contact and check for errors
    //     contact.save(function (err) {
    //         // if (err)
    //         //     res.json(err);
    // res.json({
    //             message: 'New contact created!',
    //             data: contact
    //         });
    //     });
    Status.collection.insertMany(req.body, function (err, docs) {
        if (err) {
            return console.error(err);
        } else {
            res.json({
                message: 'All records saved successfully'
            });
        }
    })
};
// Handle view contact info
exports.view = function (req, res) {
    console.log(JSON.stringify(req.params))
    Status.find({ "phone": req.params.contact_id }, function (err, contact) {

        console.log(JSON.stringify(contact))
        if (err)
            message: 'No Record Found..',
                res.send(err);

        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Status.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
        contact.status = req.body.status;
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
    Status.remove({
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