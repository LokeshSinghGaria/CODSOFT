// client/src/components/JobDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        axios.get(`/api/jobs/${id}`).then(response => {
            setJob(response.data);
        });
    }, [id]);

    if (!job) return <p>Loading...</p>;

    return (
        <div>
            <h1>{job.title}</h1>
            <p>{job.description}</p>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>Salary: ${job.salary}</p>
        </div>
    );
};

export default JobDetail;
