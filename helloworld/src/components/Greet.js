import React from 'react'

// function Greet(){
//     return <h1>Hello Krishna</h1>
// }

// const Greet = () => <h1>Hello Krishna</h1>

// export default Greet

// name tag export
// need { Geet } while importing in other files

export const Greet = props => {
    return (
        <div>
            <h1>Hello,{props.name} {props.surname}</h1>
            <p>{props.children}</p>
        </div>
    )
}