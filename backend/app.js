const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const landRoutes = require('./routes/landRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/land', landRoutes);
app.use('/api/weather', weatherRoutes);

mongoose.connect('mongodb://localhost:27017/agriApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;
