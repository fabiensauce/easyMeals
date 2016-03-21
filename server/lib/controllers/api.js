'use strict';

var mongoose = require('mongoose'),
    Project = mongoose.model('Project');

exports.staticProjects = function(req,res) {
	return  res.json([{id:1,name:'Le petit Tou',category:'Design', description:'Here is a short description.', goal:1000, gifts:1500, date:'2014-03-09T08:41:05.184Z', photo:''},{id:2,name:'Angular',category:'Games', description:'Here is a short description.',goal:2000, gifts:500, date:'2014-04-09T08:41:05.184Z', photo:''},{id:3,name:'Le petit Tou',category:'Web et techno', description:'Here is a short description.',goal:200, gifts:75, date:'2014-02-09T08:41:05.184Z', photo:''},{id:4,name:'Angular',category:'Web et techno', description:'Here is a short description.',goal:6000, gifts:500, date:'2014-04-09T08:41:05.184Z', photo:''},{id:5,name:'Angular',category:'Web et techno', description:'Here is a short description.',goal:1000, gifts:500, date:'2014-04-09T08:41:05.184Z', photo:''},{id:6,name:'Le petit Tou',category:'Web et techno', description:'Here is a short description.', goal:1000, gifts:750, date:'2014-04-09T08:41:05.184Z', photo:''},{id:7,name:'Angular',category:'Web et techno', description:'Here is a short description.',goal:2000, gifts:500, date:'2014-04-09T08:41:05.184Z', photo:''},{id:8,name:'Le petit Tou',category:'Web et techno', description:'Here is a short description.',goal:200, gifts:75, date:'2014-04-09T08:41:05.184Z', photo:''},{id:9,name:'Angular',category:'Web et techno', description:'Here is a short description.',goal:6000, gifts:500, date:'2014-04-09T08:41:05.184Z', photo:''},{id:10,name:'Angular',category:'Design', description:'Here is a short description.',goal:1000, gifts:1000, date:'2014-04-09T08:41:05.184Z', photo:''}]);
};

/**
 * Get projects
 */
exports.projects = function(req, res) {
  return Project.find(function (err, projects) {
    if (!err) {
      return res.json(projects);
    } else {
      return res.send(err);
    }
  });
};
exports.getProject = function(req, res) {
  return Project.findById(req.params.id, function (err, project) {
    if (!err) {
      console.log("Project found "+project);
      return res.json(project);
    } else {
      return res.send(err);
    }
  });

};
exports.addProject = function(req, res) {
  var project = new Project({
    name: req.body.name,
	description: req.body.description,
	goal: req.body.goal,
	gifts:req.body.gifts,
	date:req.body.date, 
	category:req.body.category, 
	photo:req.body.photo
  });

  project.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(project);
};
exports.updateProject = function(req, res) {
	return Project.findById(req.params.id, function (err, project) {
    	project.name=req.body.name;
		project.description=req.body.description;
		project.goal=req.body.goal;
		project.gifts=req.body.gifts;
		project.date=req.body.date;
		project.category=req.body.category;
		project.photo=req.body.photo;
	    return project.save(function (err) {
	      if (!err) {
	        console.log("updated");
	      } else {
	        console.log(err);
	      }
	      return res.send(project);
	    });
	});
};
exports.removeProject = function(req, res) {
	return Project.findById(req.params.id, function (err, project) {
	    return project.remove(function (err) {
	      if (!err) {
	        console.log("removed");
	        return res.send('');
	      } else {
	        console.log(err);
	      }
	    });
	});
};