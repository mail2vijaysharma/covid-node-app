// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working Fine',
        message: 'Welcome to Covid 19 Rest API!',
    });
});
// Import contact controller
var contactController = require('./contactController');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
//router.route('/contacts/:contact_id')
    //.get(contactController.view)
    //.patch(contactController.update)
    //.put(contactController.update)
    //.delete(contactController.delete);



// Import contact controller
var statusController = require('./statusController');
// Contact routes
router.route('/status')
    .get(statusController.index)
    .post(statusController.new);
router.route('/status/:contact_id')
    .get(statusController.view)
    //.patch(statusController.update)
    //.put(statusController.update)
    //.delete(statusController.delete);


// Export API routes
module.exports = router;