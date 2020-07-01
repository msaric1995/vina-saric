var ProizvodService = require('../service/ProizvodService')

exports.dajSveProizvode = async function (req, res) {

    try {
        var proizvod = await ProizvodService.dajSveProizvode()
        return res.status(200).json({ proizvod });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

