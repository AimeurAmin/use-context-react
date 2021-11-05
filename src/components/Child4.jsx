import React, { useContext } from 'react'
import { CountContext } from '../App'

function Child4() {

  const count = useContext(CountContext)

  return (
    <div className="box-child4 box">
      <p>Child 4 / count: {count}</p>
    </div>
  )
}

export default Child4
