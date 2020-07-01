const express = require('express')
const router = express.Router()
const cors = require('cors')
router.use(cors())

var KupnjaController = require('../controller/KupnjaController')

router.post('/staviProizvodUKosaricu', KupnjaController.staviProizvodUKosaricu)
router.post('/dajPodatkeOProizvodu', KupnjaController.dajPodatkeOProizvodu)
router.post('/dajSveProizvodeKorisnika', KupnjaController.dajSveProizvodeKorisnika)
router.post('/umanjiKolicinuProizvoda', KupnjaController.umanjiKolicinuProizvoda)
router.post('/ukloniIzKosarice', KupnjaController.ukloniIzKosarice)
router.post('/kupiProizvode', KupnjaController.kupiProizvode)

module.exports = router;