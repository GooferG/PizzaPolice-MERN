const express = require('express');
const {
  createTopping,
  getToppings,
  getTopping,
  deleteTopping,
  updateTopping,
} = require('../controllers/toppingController');

const router = express.Router();

// GET all toppings
router.get('/', getToppings);

// GET single toppping
router.get('/:id', getTopping);

// POST a new topping
router.post('/', createTopping);

// DELETE a topping
router.delete('/:id', deleteTopping);

// UPDATE a topping
router.patch('/:id', updateTopping);

module.exports = router;
