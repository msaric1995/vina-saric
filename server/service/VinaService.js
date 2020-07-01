var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'shop'
});
const Proizvod = require('../models/Proizvod')

exports.kreirajVino = async function (vinoData) {

    try {
        var vino = Proizvod.create(vinoData)
        return vino;
    } catch (e) {
        console.log(e)
        throw Error('Error kod kreirajVino')
    }
}

exports.dajSvaVina = async function () {

    try {
        var vino = Proizvod.findAll()
        return vino
    } catch (e) {
        console.log(e)
        throw Error('Error kod dajSvaVina')
    }
}

exports.promjeniVino = async function (idVina, vinoData) {

    try {
        var vino = connection.query(
            `UPDATE proizvod SET 
            cijena="${vinoData.cijena}",
            naziv="${vinoData.naziv}"
            WHERE id=${idVina}`
        );
        return vino
    } catch (e) {
        console.log(e)
        throw Error('Error kod promjeniVino')
    }
}

exports.izbrisiVino = async function (idVina) {

    try {
        var vino = await connection.query(
            `DELETE FROM proizvod 
            WHERE id=${idVina}`
        );
        return vino
    } catch (e) {
        console.log(e)
        throw Error('Error kod izbrisiVino')
    }
}