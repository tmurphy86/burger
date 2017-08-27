var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res){
	burger.all(function(data) {
		res.render('index', {data});
	});
});

router.post('/', function(req, res){
	console.log(req.body.name);
	burger.create(req.body.name, function() {
		res.redirect('/');
	});
});

router.put('/:id', (req,res)=>{
	var condition = 'id='+req.params.id;
	burger.update(condition, function(){
		res.redirect('/');
	});
});

module.exports = router;