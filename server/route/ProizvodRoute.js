const express = require('express')
const router = express.Router()
const cors = require('cors')
router.use(cors())

var PorizvodController = require('../controller/PorizvodController')

router.get('/dajSveProizvode', PorizvodController.dajSveProizvode)

module.exports = router;