const ItemModel = require('../models/ItemModel.js');

module.exports = {
    /* GET - list - Return a list of all items */
    list: function(req, res) {
        ItemModel.find(function(err, items) {
            res.json(items);
        });
    },

    /* GET - show - Return a single item based on the ID */
    show: function(req, res) {
        const id = req.params.id;
        ItemModel.findOne({
            _id: id
        }, function(err, item) {
            //return res.json(item);
            res.render('item_view', {
                item
            });
        });
    },

    /* Get - prefilled item form */
    edit: function(req, res) {
        const id = req.params.id;
        ItemModel.findOne({
            _id: id
        }, function(err, item) {
            return res.render('item_edit', {
                item
            });
        });
    },

    /* POST - create - Create a new item */
    create: function(req, res) {
        const item = new ItemModel({
            name: req.body.name,
            quantity: req.body.quantity
        });
        item.save((err, item) => {
            res.json(item);
        });
    },
    /* PUT - update - Update a single item based on the ID in the url */
    update: function(req, res) {
        const id = req.params.id;
        ItemModel.findOne({
            _id: id
        }, function(err, item) {
            item.name = req.body.name;
            item.quantity = req.body.quantity;
            item.activated = req.body.activated;
            item.save(function(err, item) {
                res.json(item);
            });
        });
    },
    /* DELETE - remove - Delete a single item based on the ID in the url */
    remove: function(req, res) {
        var id = req.params.id;
        ItemModel.findByIdAndRemove(id, function(err, item) {
            console.log("Deleted");
            res.redirect('/');
        });
    }
};
