'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * ProjectSchema
 */
var ProjectSchema = new Schema({
  name: String,
  description: String,
  goal: Number,
  gifts:Number,
  date:Date, 
  category:String, 
  photo:String
});

mongoose.model('Project', ProjectSchema);
