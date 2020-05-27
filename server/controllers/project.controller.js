const Project = require('../models/Project.model');


// gets all projects
module.exports.getAll = (_req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.json(err));
}
// creates a new project
module.exports.createProject = (req, res) => {
    Project.create(req.body)
        .then(createdProject => res.json(createdProject))
        .catch(err => res.status(400).json(err));
}

// the method below deletes a project

module.exports.deleteProject = (request, response) => {
    console.log("delete request" ,request)
    Project.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}


// The method below updates  product

module.exports.updateProject = (request, response) => {
    console.log("params" ,request.params)
    console.log("body" ,request.body)
    Project.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProject => response.json(updatedProject))
        .catch(err => response.json(err))
}