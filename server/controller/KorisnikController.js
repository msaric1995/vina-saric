var KorisnikService = require('../service/KorisnikService')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
process.env.SECRET_KEY = 'secret'

exports.registracijKorisnika = async function (req, res) {

    const today = new Date()
    const korisnikData = {
        ime: req.body.ime,
        prezime: req.body.prezime,
        email: req.body.email,
        lozinka: req.body.lozinka,
        datum: today
    }

    const emailKorisnika = req.body.email
    const lozinkaKorisnika = req.body.lozinka

    try {
        var korisnik = await KorisnikService.registracijKorisnika(emailKorisnika, lozinkaKorisnika, korisnikData)
        return res.status(200).json({
            status: 200,
            data: korisnik,
            message: "Korisnik je registriran"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}


exports.logiranjeKorisnika = async function (req, res) {

    const emailKorisnika = req.body.email
    const lozinkaKorisnika = req.body.lozinka

    try {
        var korisnik = await KorisnikService.pronadiKorisnika(emailKorisnika)
        if (korisnik) {
            if (bcrypt.compareSync(lozinkaKorisnika, korisnik.lozinka)) {
                token = jwt.sign(korisnik.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            }
        }

    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}




