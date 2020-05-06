import React, { useContext } from 'react'
import { ctx as countContext } from './context/count'

const Counter = () => {
  const { count, inc, dec } = useContext(countContext)

  return (
    <div>
      Count: {count}
      <button onClick={() => inc()}>Increment</button>
      <button onClick={() => dec()}>Decrement</button>
    </div>
  )
}

export default Counter
