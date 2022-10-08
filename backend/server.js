require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const toppingRoutes = require('./routes/toppings');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/toppings', toppingRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}!!!`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
