// Require modules
var express = require('express');

// Global variables
var db = require('../models');
var router = express.Router();

// Define routes - remember they are relative to /books
router.get('/', function(req, res){
	res.send('stub for /books');
});

// Export the router - this lets other files include me
module.exports = router;
