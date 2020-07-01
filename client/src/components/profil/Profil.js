import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'
import {
  dajPodatkeOProizvodu,
  dajSveProizvodeKorisnika
} from '../ShopManager'

import KupljeniProizvodi from './KupljeniProizvodi'

class Profil extends Component {
  constructor() {
    super()
    this.state = {
      ime: '',
      prezime: '',
      email: '',
      kosarica: '',
      errors: {},
      kupljeniProizvodi: []
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    this.setState({
      ime: decoded.ime,
      prezime: decoded.prezime,
      email: decoded.email,
      kosarica: decoded.kosarica
    })

    //dohvat svih proizvoda korisnika koji postoje mapiranu u tablici kosarici
    dajSveProizvodeKorisnika(decoded.id).then(proizvodiKorisnika => {

      if (proizvodiKorisnika) {
        let listaIdProizvodaKorisnika = [];
        if (proizvodiKorisnika.length > 0) {
          for (var i = 0; i < proizvodiKorisnika.length; i++) {
            listaIdProizvodaKorisnika.push(proizvodiKorisnika[i].idProizvoda)
          }

          //dohvat tablice proizvod kako bi se na proizvode u tablici kosarica dodali podatci o proizvodu
          dajPodatkeOProizvodu(listaIdProizvodaKorisnika, proizvodiKorisnika).then(podaciOProizvodu => {

            let listaKupljenihproizvoda = [];
            if (podaciOProizvodu.length > 0) {
              for (var i = 0; i < podaciOProizvodu.length; i++) {
                //ako su proizvodi kupljeni oznaka u tablici kosricci kupljeno je 1
                if (podaciOProizvodu[i].kupljeno === 1)
                  listaKupljenihproizvoda.push(podaciOProizvodu[i])
              }
            }
            this.setState({
              kupljeniProizvodi: listaKupljenihproizvoda,
            })
          })
        }
      }
    })

  }


  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFIL</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Ime</td>
                <td>{this.state.ime}</td>
              </tr>
              <tr>
                <td>Prezime</td>
                <td>{this.state.prezime}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>

            </tbody>
          </table>
        </div>
        <div className="container-fluid">
          {this.state.kupljeniProizvodi.map((item) => (
            <KupljeniProizvodi
              key={item.id}
              cijena={item.cijena}
              naziv={item.naziv}
              opis={item.opis}
              kolicina={item.kolicina}
              idProizvoda={item.id}
              datumKupnje={item.datumKupnje}
              kupljeno={item.kupljeno}

            />
          ))}
        </div>

      </div>
    )
  }
}

export default Profil