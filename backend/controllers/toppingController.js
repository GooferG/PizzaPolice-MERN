const Topping = require('../models/toppingModel');
const mongoose = require('mongoose');

// GET all toppings
const getToppings = async (req, res) => {
  const toppings = await Topping.find({}).sort({ createAt: -1 });
  res.status(200).json(toppings);
};

// GET a single topping
const getTopping = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such topping' });
  }
  const topping = await Topping.findById(id);

  if (!topping) {
    return res.status(404).json({ error: 'No such topping' });
  }

  res.status(200).json(topping);
};

// CREATE new topping
const createTopping = async (req, res) => {
  const { title, quantity } = req.body;

  let emptyFields = [];
  if (!title) {
    emptyFields.push('title');
  }
  if (!quantity) {
    emptyFields.push('quantity');
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all the fields', emptyFields });
  }

  // Add doc to DB
  try {
    const topping = await Topping.create({
      title,
      quantity,
    });
    res.status(200).json(topping);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a topping
const deleteTopping = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such topping' });
  }

  const topping = await Topping.findOneAndDelete({ _id: id });

  if (!topping) {
    return res.status(404).json({ error: 'No such topping' });
  }

  res.status(200).json(topping);
};

// UPDATE a topping
const updateTopping = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such topping' });
  }

  const topping = await Topping.findOneAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      quantity: req.body.quantity,
    }
  );
  if (!topping) {
    return res.status(404).json({ error: 'No such topping' });
  }

  res.status(200).json(topping);
};

module.exports = {
  createTopping,
  getToppings,
  getTopping,
  deleteTopping,
  updateTopping,
};
