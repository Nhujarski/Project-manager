import React from 'react';

import './App.css';
import { Router } from '@reach/router';

// import from views
import AllProjects from './views/AllProjects';
import NewProject from './views/NewProject';


function App() {
  return (
    <div className="App">
    <Router>
      <AllProjects path="/"/>
      <NewProject path="/projects/new"/>
    </Router>
    </div>
  );
}

export default App;
