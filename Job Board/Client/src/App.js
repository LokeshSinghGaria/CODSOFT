// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<JobList />} />
                <Route path="/job/:id" element={<JobDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
