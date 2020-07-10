const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');



router.get('/info', controller.info);

router.post('/create', controller.create);

router.get('/:id', controller.details);

router.put('/:id/update', controller.update);

router.delete('/:id/delete', controller.delete);

router.delete('/deleteAll', controller.delete_all);

module.exports = router;
