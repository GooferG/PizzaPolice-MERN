const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pizzaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    ingredients: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Pizza', pizzaSchema);
