import React, { Component } from 'react'

class ClassClick extends Component {

    clicked() {
        console.log('Clicked | ClassClick')
    }
    render() {
        return (
            <div>
                <button onClick={this.clicked}>Click me | ClassClick</button>
            </div>
        )
    }
}

export default ClassClick