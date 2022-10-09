const express = require('express');

const {
  createPizza,
  getPizzas,
  getPizza,
  deletePizza,
  updatePizza,
} = require('../controllers/pizzasController');

const router = express.Router();

// GET all pizzas
router.get('/', getPizzas);

// GET single Pizza
router.get('/:id', getPizza);

// POST a new Pizza
router.post('/', createPizza);

// DELETE a Pizza
router.delete('/:id', deletePizza);

// UPDATE a Pizza
router.put('/:id', updatePizza);

module.exports = router;
