var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sch');

var Schema = mongoose.Schema;

var slots = mongoose.Schema({
	slot: [{available: Boolean, student: String}]
});

var teachSchema = new Schema({
	name: String, 
	days: [slots]
});

module.exports = teachSchema;
