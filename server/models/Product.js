const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  originalPrice: { type: Number },
  price: { type: Number, required: true },
  isSale: { type: Boolean, default: false },
  image: { type: String }, // URL or path
  gallery: [{ type: String }],
  category: { type: String, required: true },
  weight: { type: String },
  unit: { type: String },
  count: { type: Number },
  sizes: [{ type: String }],
  environmentalImpact: {
    plasticSaved: { type: Number },
    carbonSaved: { type: Number },
    waterSaved: { type: Number },
    comparison: {
      traditional: { type: String },
      traditionalPlastic: { type: Number },
      ecoPlastic: { type: Number }
    }
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
