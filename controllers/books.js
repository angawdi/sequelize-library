// Require modules
var express = require('express');

// Global variables
var db = require('../models');
var router = express.Router();

// Define routes - remember they are relative to /books
router.get('/', function(req, res){
	db.book.findAll().then(function(books){
		console.log('Books found:', books);
		res.render('books/index', {books: books});
	}).catch(function(err){
		console.log('oops', err);
		res.render('404');
	});
});

router.get('/new', function(req, res){
	res.render('books/new');
});

router.post('/', function(req, res){
	res.send(req.body);
});

// Export the router - this lets other files include me
module.exports = router;
