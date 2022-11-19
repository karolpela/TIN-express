const express = require('express');
const router = express.Router();

const klientApiController = require('../../api/KlientApi');

router.get('/', klientApiController.getKlients);
router.get('/:klientId', klientApiController.getKlientById);
router.post('/', klientApiController.createKlient);
router.put('/:klientId', klientApiController.updateKlient);
router.delete('/:klientId', klientApiController.deleteKlient);

module.exports = router;