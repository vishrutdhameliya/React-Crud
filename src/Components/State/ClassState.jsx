import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor() {
        super();
        this.state = {
            name: 0
        }
    }
    clicked() {
        this.setState({ name: this.state.name + 1 })
    }
    minusclicked() {
        this.setState({ name: this.state.name - 1 })

    }
    render() {

        return (
            <div>
                <div className='fs-1 fw-bold'>
                    {this.state.name}
                </div>
                <button onClick={() => this.clicked()} className='mx-4 bg-warning'>PLUS</button>
                <button onClick={() => this.minusclicked()} className='mx-4 bg-warning'>MINUS </button>

            </div>
        )
    }
}
