import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

export default function AllProjects() {
    const [projects, setProjects] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetchProjects()
    }, []);

    function fetchProjects() {
        axios.get('http://localhost:8000/api/projects')
            .then(response => setProjects(response.data))
            .catch(() => setHasError(true));
    }

    if(hasError) return 'Something went terribly wrong!';

    if(projects === null) return'Loading...';

    function startTask(event,project) {
            // setProjectStatus(projectStatus === "in progress")
        axios.put('http://localhost:8000/api/projects/' + project._id, {
            status: "in progress"
        })
            .then(response => fetchProjects())
            .catch(err => console.log(err))
    }

    function completeTask(event,project) {
        // setProjectStatus(projectStatus === "in progress")
    axios.put('http://localhost:8000/api/projects/' + project._id, {
        status: "complete"
    })
        .then(response => fetchProjects())
        .catch(err => console.log(err))
    }
       
   function handleDelete(event,project) {
       axios.delete('http://localhost:8000/api/projects/' + project._id)
       .then(response => fetchProjects())
       .catch(err => console.log(err))
    } 


    return (
    <div>
    <h1>Project Manager</h1>
        <div className="row">
            <div className="column">
                <h3>Backlog</h3>
            
                {projects.map((project,id) => {
                    if (project.status === "backlog") {
                        return (
                        <div key={id}>
                            <p>{project.name}</p>
                            <p>{project.date}</p>
                            <button onClick={(e) => startTask(e,project)}>Start Project</button>
                        </div>)
                    }
                })}
            </div>
        </div>
        <div className="row">
            <div className="column">
                <h3>In Progress</h3>
                 { projects.map((project,id) => {
                    if(project.status === "in progress") {
                        return(
                        <div key={id}>
                            <p>{project.name}</p>
                            <p>{project.date}</p>
                            <button onClick={(e) => completeTask(e,project)}>Complete Project</button>
                        </div>
                        )
                     }
                })}
                    
            </div>
        </div>
        <div className="row">
            <div className="column">
                <h3>Completed</h3>
                { projects.map((project,id) => {
                    if(project.status === "complete") {
                        return(
                        <div key={id}>
                            <p>{project.name}</p>
                            <p>{project.date}</p>
                            <button onClick={(e) => handleDelete(e,project)}>Delete Project</button>
                        </div>
                        )
                     }
                })}
            </div>
        </div>
        <Link to="/projects/new">Add New Project</Link> 
    </div>
    )
}