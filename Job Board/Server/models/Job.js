// server/models/Job.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: String,
    description: String,
    company: String,
    location: String,
    salary: Number,
    postedAt: { type: Date, default: Date.now },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Job', JobSchema);
