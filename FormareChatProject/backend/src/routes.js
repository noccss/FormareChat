const router = require('express').Router();

const SessionController = require('./controllers/SessionController');
const ConsultorController = require('./controllers/ConsultorController');
const MessageController = require('./controllers/MessageController');

router.post('/sessions', SessionController.create);
router.post('/consultor', ConsultorController.create);

router.get('/messages', MessageController.index);
router.post('/messages', MessageController.create);


module.exports = router;