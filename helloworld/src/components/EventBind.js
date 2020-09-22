import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
        // this.Eventhandler = this.Eventhandler.bind(this)
    }

    // Eventhandler(){
    //     this.setState({
    //         message: "Good Bye"
    //     })
    // }

    Eventhandler = () => {
       this.setState({
            message: "Good Bye"
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.Eventhandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.Eventhandler()}>Click</button> */}
                <button onClick={ this.Eventhandler }>Click</button>
            </div>
        )
    }
}

export default EventBind
