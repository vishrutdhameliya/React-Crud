import React, { useState } from 'react'

function FunctionState() {

    const [name,setName] = useState(0)
    function clicked() {
        setName(name + 1)
    }
    function minusclicked(){
        setName(name - 1)
    }
    return (
        <div>
            <div className='fs-1 fw-bold'>
                {name}
            </div>
            <button onClick={clicked} className='mx-4 bg-warning'>PLUS</button>
            <button onClick={minusclicked} className='mx-4 bg-warning'>MINUS </button>

        </div>
    )
}

export default FunctionState