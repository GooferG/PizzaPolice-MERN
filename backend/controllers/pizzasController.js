const Pizza = require('../models/pizzaModel');
const mongoose = require('mongoose');

// GET all pizzas
const getPizzas = async (req, res) => {
  const pizzas = await Pizza.find({}).sort({ createAt: -1 });
  res.status(200).json(pizzas);
};

// GET a single pizza
const getPizza = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such pizza' });
  }
  const pizza = await Pizza.findById(id);

  if (!pizza) {
    return res.status(404).json({ error: 'No such pizza' });
  }

  res.status(200).json(pizza);
};

// CREATE new pizza
const createPizza = async (req, res) => {
  const { name, size, ingredients } = req.body;

  let emptyFields = [];
  if (!name) {
    emptyFields.push('pizzaName');
  }
  if (!size) {
    emptyFields.push('size');
  }
  if (!ingredients) {
    emptyFields.push('ingredients');
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all the fields', emptyFields });
  }

  // Add doc to DB
  try {
    const pizza = await Pizza.create({
      name,
      size,
      ingredients,
    });
    res.status(200).json(pizza);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a pizza
const deletePizza = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such pizza' });
  }

  const pizza = await Pizza.findOneAndDelete({ _id: id });

  if (!pizza) {
    return res.status(404).json({ error: 'No such pizza' });
  }

  res.status(200).json(pizza);
};

// UPDATE a pizza
const updatePizza = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such pizza' });
  }

  const pizza = await Pizza.findOneAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      quantity: req.body.quantity,
    }
  );
  if (!pizza) {
    return res.status(404).json({ error: 'No such pizza' });
  }

  res.status(200).json(pizza);
};

module.exports = {
  createPizza,
  getPizzas,
  getPizza,
  deletePizza,
  updatePizza,
};
