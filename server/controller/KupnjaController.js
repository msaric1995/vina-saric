var KupnjaService = require('../service/KupnjaService')
var ProizvodService = require('../service/ProizvodService')


exports.staviProizvodUKosaricu = async function (req, res) {

    try {
        let idKorisnika = req.body.korisnikId
        let idProizvoda = req.body.productId
        var proizvod = await KupnjaService.pronadiKosaricaItem(idKorisnika, idProizvoda)
        if (proizvod) {
            let kolicina = proizvod.kolicina + 1;
            var dodanproizvod = await KupnjaService.promjenijKolicinuKosaricaItem(kolicina, idKorisnika, idProizvoda)
        } else {
            var dodanproizvod = await KupnjaService.umetninoviKosaricaItem(idKorisnika, idProizvoda)
        }

        return res.status(200).json({
            status: 200,
            message: "Proizvod je dodan u košaricu!"
        });

    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.dajSveProizvodeKorisnika = async function (req, res) {

    try {
        let idKorisnika = req.body.idKorisnika
        var proizvod = await KupnjaService.pronadiSVeKosaricaItem(idKorisnika)
        return res.status(200).json({ proizvod });

    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.dajPodatkeOProizvodu = async function (req, res) {

    try {
        let listaIdProizvoda = req.body.productIdList
        var sviProizvodi = await ProizvodService.dajSveProizvodePoId(listaIdProizvoda)
        if (sviProizvodi) {
            return res.status(200).json({ sviProizvodi });
        }
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.umanjiKolicinuProizvoda = async function (req, res) {

    try {
        let idKorisnika = req.body.idKorisnika
        let idProizvoda = req.body.idProizvoda
        var proizvod = await KupnjaService.pronadiKosaricaItem(idKorisnika, idProizvoda)

        if (proizvod) {
            if (proizvod.kolicina > 1) {
                let kolicina = proizvod.kolicina - 1;
                var sviProizvodi = await KupnjaService.promjenijKolicinuKosaricaItem(kolicina, idKorisnika, idProizvoda)
            }

        }
        return res.status(200).json({
            status: 200,
            message: "Količina proizvoda je umanjena!"
        });

    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.ukloniIzKosarice = async function (req, res) {

    try {
        let idKorisnika = req.body.idKorisnika
        let idProizvoda = req.body.idProizvoda
        var proizvod = await KupnjaService.ukloniIzKosarice(idKorisnika, idProizvoda)

        return res.status(200).json({
            status: 200,
            message: "Proizvod je uklonjen iz košarice!"
        });

    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}


exports.kupiProizvode = async function (req, res) {

    try {
        let idKorisnika = req.body.idKorisnika
        const datumKupnje = new Date()
        var dateString = new Date(datumKupnje.getTime() - (datumKupnje.getTimezoneOffset() * 60000))
            .toISOString()
            .split("T")[0];
        var kupljeno = 1

        var proizvod = await KupnjaService.pronadiSVeNekupljenjeKosaricaItem(idKorisnika)
        if (proizvod) {
            var sviProizvodi = await KupnjaService.kupiProizvode(kupljeno, dateString, idKorisnika)
            return res.status(200).json({
                status: 200,
                message: "Proizvodi su kupljeni!"
            });
        }

    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}
