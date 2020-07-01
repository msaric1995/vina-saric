var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'shop'
});

const Kosarica = require('../models/Kosarica')

exports.pronadiKosaricaItem = async function (idKorisnika, idProizvoda) {

  try {
    var kosarica = Kosarica.findOne({
      where: {
        idKorisnika: idKorisnika,
        idProizvoda: idProizvoda,
        kupljeno: 0
      }
    })
    return kosarica
  } catch (e) {
    throw Error('Error kod pronadiKosaricaItem')
  }
}
exports.pronadiSVeKosaricaItem = async function (idKorisnika) {

  try {
    var kosarica =
      Kosarica.findAll({
        where: {
          idKorisnika: idKorisnika,
        }
      })
    return kosarica
  } catch (e) {
    throw Error('Error kod pronadiSVeKosaricaItem')
  }
}


exports.promjenijKolicinuKosaricaItem = async function (kolicina, idKorisnika, idProizvoda) {

  try {
    var kosarica = connection.query(
      `UPDATE kosarica SET kolicina="${kolicina}", datumKupnje=" " 
            WHERE idKorisnika=${idKorisnika}
            AND idProizvoda=${idProizvoda}
            AND kupljeno=0`
    );
    return kosarica

  } catch (e) {
    throw Error('Error promjenijKolicinuKosaricaItem')
  }
}


exports.umetninoviKosaricaItem = async function (idKorisnika, idProizvoda) {

  try {
    var kosarica = await connection.query(
      `INSERT into kosarica SET 
        idKorisnika=${idKorisnika}, 
        idProizvoda=${idProizvoda},
        kolicina=1`
    );
    return kosarica
  } catch (e) {
    throw Error('Error kod umetninoviKosaricaItem')
  }
}


exports.ukloniIzKosarice = async function (idKorisnika, idProizvoda) {

  try {
    var kosarica = await connection.query(
      `DELETE FROM kosarica 
        WHERE idKorisnika=${idKorisnika} 
        AND idProizvoda=${idProizvoda}
        AND kupljeno=0`
    );
    return kosarica
  } catch (e) {
    throw Error('Error kod ukloniIzKosarice')
  }
}

exports.pronadiSVeNekupljenjeKosaricaItem = async function (idKorisnika) {

  try {
    var kosarica =
      Kosarica.findAll({
        where: {
          idKorisnika: idKorisnika,
          kupljeno: 0
        }
      })
    return kosarica
  } catch (e) {
    throw Error('Error kod pronadiSVeNekupljenjeKosaricaItem')
  }
}

exports.kupiProizvode = async function (kupljeno, dateString, idKorisnika) {

  try {
    var kosarica = connection.query(
      `UPDATE kosarica SET 
            kupljeno="${kupljeno}",
            datumKupnje="${dateString}"
            WHERE idKorisnika=${idKorisnika}
            AND kupljeno=0`
    );
    return kosarica

  } catch (e) {
    throw Error('Error kod kupiProizvode')
  }
}