import React, { Component } from 'react';

const Task = (value) => {
    return (
        <li>{value}</li>
    );
}

const promises = ['um', 2, 'tre', 4];
const realPromises = promises.map(e => Task(e))

class MakeNewTask extends Component {
    render() {
        return (<div>
            <ol>{realPromises}</ol>
        </div>
        )
    }
}

export default MakeNewTask;

