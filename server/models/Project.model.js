const mongoose = require('mongoose');

// new project model----
const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: [
            true,
            "Please provide a project name!"
        ]
    },

    date: {
        type:Date,
        required: [
            true,
            "Please input a valid date!"
        ]
    },
    status: {
        type: String,
        default: "backlog"
    }     

}, {
    // created_at and updated_at
    timestamp: true 
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports= Project;
