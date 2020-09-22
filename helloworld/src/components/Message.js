import React,{Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            msg : "Please, Subscribe"
        }
    }

    ChnageMsg(){
        this.setState({
            msg : "Thank you for Subscribing"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=> this.ChnageMsg() }>Subscribe</button>
            </div>
        )
    }
}

export default Message