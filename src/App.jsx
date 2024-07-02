import React, { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { ThemeContext } from './contexts/ThemeContext.jsx';
import { Main, ProjectPage } from './pages';
import { BackToTop } from './components';

import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="app">
    <Router>
        <Routes>
          <Route path="/" index element={<Main/>} />
          <Route path="projects" element={<ProjectPage/>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}