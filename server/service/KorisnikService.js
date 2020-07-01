const Korisnik = require('../models/Korisnik')
const bcrypt = require('bcrypt')

exports.registracijKorisnika = async function (emailKorisnika, lozinkaKorisnika, korisnikData) {

  try {
    var korisnik = Korisnik.findOne({
      where: {
        email: emailKorisnika
      }
    })
      .then(korisnik => {
        if (!korisnik) {
          bcrypt.hash(lozinkaKorisnika, 10, (err, hash) => {
            korisnikData.lozinka = hash
            Korisnik.create(korisnikData)
          })
        }
      })
    return korisnik;

  } catch (e) {
    throw Error('Error kod registracije korisnika')
  }
}


exports.pronadiKorisnika = async function (emailKorisnika, lozinkaKorisnika) {

  try {
    var korisnik = Korisnik.findOne({
      where: {
        email: emailKorisnika
      }
    })
    return korisnik
  } catch (e) {
    throw Error('Error kod logiranja korisnika')
  }
}

