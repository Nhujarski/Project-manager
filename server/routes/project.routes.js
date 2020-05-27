const ProjectController = require('../controllers/project.controller');

module.exports = app => {
    console.log("inside routes")
    app.get('/api/projects', ProjectController.getAll);
    app.post('/api/projects', ProjectController.createProject);
    app.put('/api/projects/:id', ProjectController.updateProject)
    app.delete('/api/projects/:id', ProjectController.deleteProject);
}