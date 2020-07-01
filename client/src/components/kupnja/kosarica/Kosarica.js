import React, { Component } from "react";
import ProizvodUKosarici from "./ProizvodUKosarici";
import jwtDecode from 'jwt-decode'
import {
  dajPodatkeOProizvodu,
  dajSveProizvodeKorisnika,
  ukloniIzKosarice,
  staviProizvodUKosaricu,
  umanjiKolicinuProizvoda,
  kupiProizvode
} from '../../ShopManager'


export default class Kosarica extends Component {

  constructor() {
    super()
    this.state = {
      proizvodiUKosarici: [],
      konacnaCijena: ''
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    var korisnikId = decoded.id


    //dohvat svih proizvoda korisnika koji postoje mapiranu u tablici kosarici
    dajSveProizvodeKorisnika(korisnikId).then(proizvodiKorisnika => {
      if (proizvodiKorisnika) {
        //dohvat tablice proizvod kako bi se na proizvode u tablici kosarica dodali podatci o proizvodu
        dajPodatkeOProizvodu(idProizvodaUKosarici(proizvodiKorisnika), proizvodiKorisnika).then(podaciOProizvodu => {
          this.setState({
            proizvodiUKosarici: proizvodiUKosarici(podaciOProizvodu),
          })
        })
      }
    })


    this.ukloniIzKosaricePrivremeno = (korisnikId, productId) => {
      ukloniIzKosarice(korisnikId, productId).then(res => {
        dajSveProizvodeKorisnika(korisnikId).then(proizvodiKorisnika => {
          if (proizvodiKorisnika) {
            //dohvat tablice proizvod kako bi se na proizvode u tablici kosarica dodali podatci o proizvodu
            dajPodatkeOProizvodu(idProizvodaUKosarici(proizvodiKorisnika), proizvodiKorisnika).then(podaciOProizvodu => {
              this.setState({
                proizvodiUKosarici: proizvodiUKosarici(podaciOProizvodu),
              })
            })
          }
        })
      })
    }


    this.uvecajKolicinu = (korisnikId, productId) => {
      staviProizvodUKosaricu(korisnikId, productId).then(res => {
        dajSveProizvodeKorisnika(korisnikId).then(proizvodiKorisnika => {
          if (proizvodiKorisnika) {
            //dohvat tablice proizvod kako bi se na proizvode u tablici kosarica dodali podatci o proizvodu
            dajPodatkeOProizvodu(idProizvodaUKosarici(proizvodiKorisnika), proizvodiKorisnika).then(podaciOProizvodu => {
              this.setState({
                proizvodiUKosarici: proizvodiUKosarici(podaciOProizvodu),
              })
            })
          }
        })
      })
    }

    this.umanjiKolicinu = (korisnikId, productId) => {
      umanjiKolicinuProizvoda(korisnikId, productId).then(res => {
        dajSveProizvodeKorisnika(korisnikId).then(proizvodiKorisnika => {
          if (proizvodiKorisnika) {
            //dohvat tablice proizvod kako bi se na proizvode u tablici kosarica dodali podatci o proizvodu
            dajPodatkeOProizvodu(idProizvodaUKosarici(proizvodiKorisnika), proizvodiKorisnika).then(podaciOProizvodu => {
              this.setState({
                proizvodiUKosarici: proizvodiUKosarici(podaciOProizvodu),
              })
            })
          }
        })
      })
    }

    this.kupiProizvodeButton = () => {
      kupiProizvode(korisnikId).then(res => {
        dajSveProizvodeKorisnika(korisnikId).then(proizvodiKorisnika => {
          if (proizvodiKorisnika) {
            //dohvat tablice proizvod kako bi se na proizvode u tablici kosarica dodali podatci o proizvodu
            dajPodatkeOProizvodu(idProizvodaUKosarici(proizvodiKorisnika), proizvodiKorisnika).then(podaciOProizvodu => {
              this.setState({
                proizvodiUKosarici: proizvodiUKosarici(podaciOProizvodu),
              })
            })
          }
        })
      })
    }
    
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.proizvodiUKosarici.map((item) => (
          <ProizvodUKosarici
            key={item.id}
            cijena={item.cijena}
            naziv={item.naziv}
            opis={item.opis}
            kolicina={item.kolicina}
            idProizvoda={item.idProizvoda}

            ukloniIzKosarice={this.ukloniIzKosaricePrivremeno}
            staviProizvodUKosaricu={this.uvecajKolicinu}
            umanjiKolicinuProizvoda={this.umanjiKolicinu}

          />
        ))}
        <div>
          <button
            onClick={this.kupiProizvodeButton}
            className="buttonKupi">
            Kupi proizvode {konacnaCijena(this.state.proizvodiUKosarici)} KN
          </button>
        </div>
      </div>
    );
  }
}

function konacnaCijena(proizvodiUKosarici) {
  let total = 0;
  if (proizvodiUKosarici.length > 0) {
    for (var i = 0; i < proizvodiUKosarici.length; i++) {
      total += proizvodiUKosarici[i].cijena * proizvodiUKosarici[i].kolicina
    }
  }
  return total;
}

function proizvodiUKosarici(podaciOProizvodu) {
  let listaProizvodaUKosarici = [];
  if (podaciOProizvodu.length > 0) {
    for (var i = 0; i < podaciOProizvodu.length; i++) {
      //ako su proizvodi nisu kupljeni nego samo dodani u kosaricu oznaka u tablici kosricci kupljeno je 0
      if (podaciOProizvodu[i].kupljeno === 0) {
        listaProizvodaUKosarici.push(podaciOProizvodu[i])
      }
    }
  }
  return listaProizvodaUKosarici;
}

function idProizvodaUKosarici(proizvodiKorisnika) {
  let listaIdProizvodaKorisnika = [];
  if (proizvodiKorisnika.length > 0) {
    for (var i = 0; i < proizvodiKorisnika.length; i++) {
      listaIdProizvodaKorisnika.push(proizvodiKorisnika[i].idProizvoda)
    }
  }
  return listaIdProizvodaKorisnika;
}
