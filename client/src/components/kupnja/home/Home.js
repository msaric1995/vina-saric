import React, { Component } from 'react'
import BackgroundImage from 'react-background-image-loader';
import Proizvod from './Proizvod'
import { dajSveProizvode, staviProizvodUKosaricu } from '../../ShopManager'
import imgone from './zaslon.jpg'
import Filter from './Filter';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listaSvihProizvoda: [],
      odabrniCheckboxovi:[]
    };
  }

  componentDidMount() {

    dajSveProizvode().then(res => {
      if (res) {
        this.setState({
          listaSvihProizvoda: res,
        })
      }
    })
    
    this.staviPrivremenoUkosaricu = (korisnikId, productId) => {
      staviProizvodUKosaricu(korisnikId, productId ).then(res => {
          this.props.history.push(`/kosarica`)
      })
    }
    
    this.filteriVina = (odabrniCheckboxovi) => {
      this.setState({
        odabrniCheckboxovi: odabrniCheckboxovi
      })  
  }

}

  render() {

    const filtriranaVina = Array.from(this.state.odabrniCheckboxovi)
    let vina=[]
    if(filtriranaVina.length>0){
      vina = this.state.listaSvihProizvoda.filter(proizvod =>
        filtriranaVina.includes(proizvod.filter))
    }else{
      vina = this.state.listaSvihProizvoda
    }

    return (
  
        <div >
          <BackgroundImage className={'Back'} src={imgone}>
            <p className='Naslov_text'>vina Šarić</p>
            <p className='Naslov_text2'>..od sada i u online ponudi...</p>

          </BackgroundImage>
          <div>
          <Filter onSubmit={this.filteriVina} />
          </div>
          <div className="listaproizvoda">
            {vina.map((proizvod) =>
              <Proizvod
                key={proizvod.id}
                cijena={proizvod.cijena}
                naziv={proizvod.naziv}
                opis={proizvod.opis}
                slika={proizvod.slika}
                idProizvoda={proizvod.id}

                staviProizvodUKosaricu={this.staviPrivremenoUkosaricu}
              />
            )}
          </div>
        </div>
    )
  }
}

