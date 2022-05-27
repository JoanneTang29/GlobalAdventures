const mongoose = require('mongoose');
const adventures = require('./adventures');
const Products = require('../models/products');

const adventuresDB = async () => {
  // console.log('adventures db function');
  await Products.deleteMany({});
  for (let i = 0; i < adventures.length; i++) {
    const adventure = new Products({
      id: adventures[i].id,
      title: `${adventures[i].title}`,
      location: `${adventures[i].location}`,
      image: `${adventures[i].image}`,
      price: adventures[i].price,
      stock: adventures[i].stock,
      description: `${adventures[i].description}`,
    });
    // console.log(adventure);
    await adventure.save();
  }
};

// adventuresDB().then(() => {
//   console.log('db loaded here');
//   // mongoose.connection;
// });

module.exports = adventuresDB;
