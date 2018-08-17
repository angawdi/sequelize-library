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
	db.book.create(req.body).then(function(createdBook){
		console.log('book created looks like', createdBook);
		res.redirect('/books');
	}).catch(function(err){
		console.log('error happened', err);
		res.render('404');
	});
});

router.get('/:id', function(req, res){
	db.book.findById(req.params.id).then(function(foundBook){
	}).catch(function(err){
		console.log('err', err);
		res.render('404');
	});
})

// Export the router - this lets other files include me
module.exports = router;
