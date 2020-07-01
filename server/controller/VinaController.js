var VinaService = require('../service/VinaService')

exports.kreirajVino = async function (req, res) {
    const vinoData = {
        cijena: req.body.cijena,
        naziv: req.body.naziv,
        opis: req.body.opis,
        slika: req.body.slika,
        filter: req.body.filter
    }

    try {
        var vino = await VinaService.kreirajVino(vinoData)
        return res.status(200).json({
            status: 200,
            message: "Proizvod vino je kreirano!"
        });
    } catch (e) {
        console.log(e)
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.dajSvaVina = async function (req, res) {

    try {
        var svaVina = await VinaService.dajSvaVina()
        return res.status(200).json({
            status: 200,
            data: svaVina,
            message: "Dohvaćena su sva vina!"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.promjeniVino = async function (req, res) {
    const vinoData = {
        cijena: req.body.cijena,
        naziv: req.body.naziv,
    }
    const idVina = req.body.id

    try {
        var vinoUpdejtano = await VinaService.promjeniVino(idVina, vinoData)
        return res.status(200).json({
            status: 200,
            message: "Proizvod vino je updejtan!"
        });
    } catch (e) {
        console.log(e)
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.izbrisiVino = async function (req, res) {
    const idVina = req.body.id

    try {
        var vinoIzbrisano = await VinaService.izbrisiVino(idVina)
        return res.status(200).json({
            status: 200,
            message: "Proizvod vino je izbrisano!"
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}
