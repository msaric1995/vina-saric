import React, { Component } from 'react';

class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            odabranFilter: false,
        };
    }

    componentDidMount() {
        this.promjeniVrijednotCheckbox = () => {
            const { prosljediPromjenuCheckboxa, label } = this.props;
            this.setState({
                odabranFilter: !this.state.odabranFilter,
            });
            prosljediPromjenuCheckboxa(label);
        }
    }

    render() {
        const { label } = this.props;
        const { odabranFilter } = this.state;

        return (
            <div className="checkbox">
                <label className="checkbox_l" >
                    <input className="checkbox_2"
                        type="checkbox"
                        value={label}
                        checked={odabranFilter}
                        onChange={this.promjeniVrijednotCheckbox}
                    />
                    {label}
                </label>
            </div>
        );
    }
}

export default Checkbox;