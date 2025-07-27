const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const noteRouter = require('./routes/noteRoute');

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/notes', noteRouter);
app.get('/', (req, res) => res.send('Notes App is running!'));
mongoose.connect('mongodb://127.0.0.1:27017/notesDB')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  })
  .catch(err => console.error('DB connection error:', err));