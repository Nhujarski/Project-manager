import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

export default function NewProject() {
    const [ name, setName] = useState('');
    const [date, setDate] = useState('');
    const [errors, setErrors] = useState([]);

    function handelSubmit(event) {
        event.preventDefault();
        setErrors([]);

        axios.post('http://localhost:8000/api/projects', {
            name,
            date
        })
            .then(() => navigate("/"))
            .catch(err => {
              const errs = [];
              const errorsObj = err.response.data.errors;

              for(const key in errorsObj) {
                errs.push(errorsObj[key].message);
              }

              setErrors(errs)
            })
        }
        
      
    return (
        <div>
          <h1>Project Manager</h1>
          <Link to="/">Back to Dashboard</Link>
          <div>
          <h3>Plan a new project</h3>
          {errors.map((err, i) => (
            <p key={i} style={{ color: 'green' }}>{err}</p>
          ))}
            <form onSubmit={handelSubmit}>
              <div>
               <label>Project</label>
               <input 
                 name="name"
                 value={name}
                 onChange={e => setName(e.target.value)}
                 />
              </div>
              <div>
              <label>Due Date:</label>
              <input 
                name="date"
                value={date}
                type="date"
                onChange={e => setDate(e.target.value)}
                />
              </div>
              <button >Plan Project</button>
            </form>
          </div>
        </div>
    )
}