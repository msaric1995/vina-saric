import React, { Component } from 'react';
import Checkbox from './Checkbox.js';

const fileri = [
    'bijelo',
    'crno',
    'rose',
];

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            odabraniCheckboxovi: new Set()
        };
    }

    punenjeCheckboxa = label => {
        if (this.state.odabraniCheckboxovi.has(label)) {
            this.state.odabraniCheckboxovi.delete(label);
        } else {
            this.state.odabraniCheckboxovi.add(label);
        }
    }

    prosljediFiltereVina = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        let odabraniCheckboxovi = []
        for (const checkbox of this.state.odabraniCheckboxovi) {
            odabraniCheckboxovi.push(checkbox)
        }
    }

    kreirajCheckbox = label => (
        <Checkbox
            label={label}
            prosljediPromjenuCheckboxa={this.punenjeCheckboxa}
            key={label}
        />
    )

    napunniCheckboxove = () => (
        fileri.map(this.kreirajCheckbox)
    )

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                        <form onSubmit={this.prosljediFiltereVina}>
                            <div className="filteri"> {this.napunniCheckboxove()}

                                <button className="btn btn-default" type="submit"
                                    onClick={() =>
                                        this.props.onSubmit(this.state.odabraniCheckboxovi)}>
                                    Traži</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default Filter;


