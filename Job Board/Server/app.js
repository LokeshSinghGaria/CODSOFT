// server/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const jobRoutes = require('./routes/jobRoutes');
const userRoutes = require('./routes/userRoutes');

// App Initialization
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/job-board', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
