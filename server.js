const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require('./db');

app.use(express.json());

app.use('/api/cars/', require('./routes/carsRoute'));
app.use('/api/users/', require('./routes/usersRoute'));
app.use('/api/bookings/', require('./routes/bookingsRoute'));

const path = require('path');

if (process.env.NODE_ENV === 'production') {
  // Set the static folder to 'client/build' for serving the built React app
  app.use(express.static(path.join(__dirname, '../client/build')));

  // Serve the index.html for all other routes in production
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`));
