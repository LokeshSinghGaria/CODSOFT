// client/src/components/JobList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('/api/jobs').then(response => {
            setJobs(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Job Listings</h1>
            <ul>
                {jobs.map(job => (
                    <li key={job._id}>
                        <Link to={`/job/${job._id}`}>
                            {job.title} at {job.company}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
