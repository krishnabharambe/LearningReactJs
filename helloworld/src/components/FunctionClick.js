import React from 'react'
function FunctionClick(){

    function clicked(){
        console.log("Clicked | FunctionClick")
    }
    return (
        <div>
            <button onClick={clicked}>Click Me | FunctionClick</button>
        </div>
    )
}

export default FunctionClick