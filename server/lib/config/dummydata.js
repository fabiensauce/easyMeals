'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Project = mongoose.model('Project');

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});

// Clear old users, then add a default user
Project.find({}).remove(function() {
  Project.create({id:1,name:'Le petit Tou',category:'Design', description:'Here is a short description.', goal:1000, gifts:1500, date:'2014-03-09T08:41:05.184Z', photo:''},{id:2,name:'Angular',category:'Games', description:'Here is a short description.',goal:2000, gifts:500, date:'2014-04-09T08:41:05.184Z', photo:''},{id:3,name:'Le petit Tou',category:'Web et techno', description:'Here is a short description.',goal:200, gifts:75, date:'2014-02-09T08:41:05.184Z', photo:''},{id:4,name:'Angular',category:'Web et techno', description:'Here is a short description.',goal:6000, gifts:500, date:'2014-04-09T08:41:05.184Z', photo:''},{id:5,name:'Angular',category:'Web et techno', description:'Here is a short description.',goal:1000, gifts:500, date:'2014-04-09T08:41:05.184Z', photo:''},{id:6,name:'Le petit Tou',category:'Web et techno', description:'Here is a short description.', goal:1000, gifts:750, date:'2014-04-09T08:41:05.184Z', photo:''},{id:7,name:'Angular',category:'Web et techno', description:'Here is a short description.',goal:2000, gifts:500, date:'2014-04-09T08:41:05.184Z', photo:''},{id:8,name:'Le petit Tou',category:'Web et techno', description:'Here is a short description.',goal:200, gifts:75, date:'2014-04-09T08:41:05.184Z', photo:''},{id:9,name:'Angular',category:'Web et techno', description:'Here is a short description.',goal:6000, gifts:500, date:'2014-04-09T08:41:05.184Z', photo:''},{id:10,name:'Angular',category:'Design', description:'Here is a short description.',goal:1000, gifts:1000, date:'2014-04-09T08:41:05.184Z', photo:''}, 
    function() {
      console.log('finished populating users');
    }
  );
});
