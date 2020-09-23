import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor() {
        super()
    
        this.state = {
             message : 'ParentComponent2'
        }
        this.GreetingToParent = this.GreetingToParent.bind(this)
    }
    
    GreetingToParent(msg){
        alert(`Hello ${this.state.message} from ${msg}`)
    }

    render() {
        return (
            <div>
                <ChildComponent GreetingHandler = {this.GreetingToParent} />
            </div>
        )
    }
}

export default ParentComponent
