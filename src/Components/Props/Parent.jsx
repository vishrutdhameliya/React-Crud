import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Child  Title="Dhameliya" SubTitle="CEO" />
        <Child  Title="Dhameliya1" SubTitle="CEO1" />
        <Child  Title="Dhameliya2" SubTitle="CEO2" />
        <Child  Title="Dhameliya3" SubTitle="CEO3" />
        <Child  Title="Dhameliya4" SubTitle="CEO4" />
        
    </div>
  )
}

export default Parent