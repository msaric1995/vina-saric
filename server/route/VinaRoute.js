const express = require('express')
const router = express.Router()
const cors = require('cors')
router.use(cors())

var VinaController = require('../controller/VinaController')

router.post('/kreirajVino', VinaController.kreirajVino)
router.get('/dajSvaVina', VinaController.dajSvaVina)
router.put('/promjeniVino', VinaController.promjeniVino)
router.delete('/izbrisiVino', VinaController.izbrisiVino)

module.exports = router;