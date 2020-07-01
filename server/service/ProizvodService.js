const Proizvod = require('../models/Proizvod')

exports.dajSveProizvode = async function () {

  try {
    var proizvod = Proizvod.findAll()
    return proizvod
  } catch (e) {
    throw Error('Error kod dajSveProizvode')
  }
}

exports.dajSveProizvodePoId = async function (listaIdProizvoda) {

  try {
    var proizvod = Proizvod.findAll({
      where: {
        id: listaIdProizvoda,
      }
    })
    return proizvod
  } catch (e) {
    throw Error('Error kod dajSveProizvodePoId')
  }
}
