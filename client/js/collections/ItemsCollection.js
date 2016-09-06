const Backbone = require('backbone');
const ItemModel = require('../models/ItemModel');

const ItemsCollection = Backbone.Collection.extend({
  url: '/items',
  model: ItemModel
});

module.exports = ItemsCollection;
