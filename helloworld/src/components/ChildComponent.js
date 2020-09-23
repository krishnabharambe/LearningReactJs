import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.GreetingHandler}>Click</button> */}
            <button onClick={()=> props.GreetingHandler('krishna')}>Click</button>
        </div>
    )
}

export default ChildComponent
