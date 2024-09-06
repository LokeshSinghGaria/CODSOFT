// server/routes/jobRoutes.js
const express = require('express');
const { getJobs, createJob } = require('../controllers/jobController');
const router = express.Router();

// GET all jobs
router.get('/', getJobs);

// POST a new job
router.post('/', createJob);

module.exports = router;
