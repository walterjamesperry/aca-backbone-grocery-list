const Backbone = require('backbone');

const ItemModel = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: '/items'
});

module.exports = ItemModel;
