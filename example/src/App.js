import React from 'react'

import { useMyHook } from 'ctx-provider'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
