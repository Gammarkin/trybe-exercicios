import React, { Component } from 'react';

class Inputs extends Component {
    render() {
        const { handleErr, valueOne, valueTwo, handleInput, dormError } = this.props;
        return (
            <>
                <input
                    type="text"
                    name='name'
                    onInput={handleInput}
                    value={valueOne}
                    onChange={handleErr}
                />
                <span>{dormError ? "err" : ""}</span>
                <input
                    type="checkbox"
                    name='isItTrue'
                    onInput={handleInput}
                    value={valueTwo}
                />

            </>
        )
    }
}

export default Inputs;