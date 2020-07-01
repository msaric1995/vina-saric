const express = require('express')
const router = express.Router()
const cors = require('cors')
router.use(cors())

var KorisnikController = require('../controller/KorisnikController')

router.post('/registracija', KorisnikController.registracijKorisnika)
router.post('/login', KorisnikController.logiranjeKorisnika)


module.exports = router;