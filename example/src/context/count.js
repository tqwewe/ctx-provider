import { useState } from 'react'
import createStore from 'ctx-provider'

const useCount = () => {
  const [count, setCount] = useState(0)

  const inc = () => setCount(count + 1)
  const dec = () => setCount(count - 1)

  return { count, inc, dec }
}

export const { ctx, Provider } = createStore(useCount)
