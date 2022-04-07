import React, { Component } from 'react';

class Buttons extends Component {

    constructor(props) {
        super()
        console.log(props);
        this.handleUno = this.handleUno.bind(this)
    }

    handleUno() {
        console.log('a');
    }

    render() {
        return (
            <>
                <button onClick={this.handleUno}>uno</button>
            </>
        )
    }
}

export default Buttons;