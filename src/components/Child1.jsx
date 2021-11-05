import React, { useContext } from 'react'
import { CountContext } from '../App'
import Child2 from './Child2'

function Child1() {

  const count = useContext(CountContext);

  return (
    <div className="box-child1 box">
      <p>Child 1 / count: {count}</p>
      <Child2 />
    </div>
  )
}

export default Child1
