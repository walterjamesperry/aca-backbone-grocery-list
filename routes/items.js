var express = require('express');
var router = express.Router();
const ItemsController = require('../controllers/ItemsController.js');

router.get('/', ItemsController.list);

router.get('/:id', ItemsController.show);

router.get('/:id/edit', ItemsController.edit);

router.post('/', ItemsController.create);

router.put('/:id', ItemsController.update);

router.delete('/:id', ItemsController.remove);

module.exports = router;
