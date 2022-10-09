require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const methodOverride = require('method-override');

const toppingRoutes = require('./routes/toppings');
const pizzasRouter = require('./routes/pizzas');

// express app
const app = express();

// middleware
app.use(express.json());

// Method override
// app.use(
//   methodOverride(function (req, res) {
//     if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//       // look in urlencoded POST bodies and delete it
//       let method = req.body._method;
//       delete req.body._method;
//       return method;
//     }
//   })
// );

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/toppings', toppingRoutes);
app.use('/api/pizzas', pizzasRouter);

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
