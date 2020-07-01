import axios from 'axios'

export const registracija = noviKorisnik => {
  return axios
    .post('korisnik/registracija', {
      ime: noviKorisnik.ime,
      prezime: noviKorisnik.prezime,
      email: noviKorisnik.email,
      lozinka: noviKorisnik.lozinka
    })
    .then(response => {
      console.log('Korisnik je registriran!')
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const login = korisnik => {
  return axios
    .post('korisnik/login', {
      email: korisnik.email,
      lozinka: korisnik.lozinka
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}


export const dajSveProizvode = () => {
  return axios
    .get('proizvod/dajSveProizvode', {
    })
    .then(response => {
      console.log(response)
      return response.data.proizvod
    })
    .catch(error => console.log(error));
}


export const staviProizvodUKosaricu = (korisnikId, productId) => {

  return axios
    .post('kupnja/staviProizvodUKosaricu', {
      korisnikId: korisnikId,
      productId: productId,
    })
    .then(response => {
    })
    .catch(error => console.log(error));
}


export const dajPodatkeOProizvodu = (listaIdProizvodaUKosarici, proizvodiUKosariciList) => {
  return axios
    .post('kupnja/dajPodatkeOProizvodu', {
      productIdList: listaIdProizvodaUKosarici
    })
    .then(response => {
      for (var i = 0; i < proizvodiUKosariciList.length; i++) {
        for (var j = 0; j < response.data.sviProizvodi.length; j++) {
          if (proizvodiUKosariciList[i].idProizvoda === response.data.sviProizvodi[j].id) {
            proizvodiUKosariciList[i].cijena = response.data.sviProizvodi[j].cijena
            proizvodiUKosariciList[i].naziv = response.data.sviProizvodi[j].naziv
            proizvodiUKosariciList[i].opis = response.data.sviProizvodi[j].opis
          }
        }
      }

      console.log(response.data.sviProizvodi)
      response.data.sviProizvodi = proizvodiUKosariciList
      return response.data.sviProizvodi
    })
    .catch(error => console.log(error));
}


export const dajSveProizvodeKorisnika = idKorisnika => {
  return axios
    .post('kupnja/dajSveProizvodeKorisnika', {
      idKorisnika: idKorisnika
    })
    .then(response => {
      console.log(response.data.proizvod)
      return response.data.proizvod
    })
    .catch(error => console.log(error));
}


export const ukloniIzKosarice = (idKorisnika, idProizvoda) => {
  console.log(idKorisnika, idProizvoda)
  return axios
    .post('kupnja/ukloniIzKosarice', {
      idKorisnika: idKorisnika,
      idProizvoda: idProizvoda
    })
    .then(response => {
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const umanjiKolicinuProizvoda = (idKorisnika, idProizvoda) => {
  return axios
    .post('kupnja/umanjiKolicinuProizvoda', {
      idKorisnika: idKorisnika,
      idProizvoda: idProizvoda
    })
    .then(response => {
    })
    .catch(error => console.log(error));
}

export const kupiProizvode = (idKorisnika) => {
  return axios
    .post('kupnja/kupiProizvode', {
      idKorisnika: idKorisnika,
    })
    .then(response => {

    })
    .catch(error => console.log(error));
}

