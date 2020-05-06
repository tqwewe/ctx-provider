import React from 'react'
import { CombinedProviders } from 'ctx-provider'

import { Provider as CountProvider } from './context/count'
import { Provider as UserProvider } from './context/user'

import Counter from './components/Counter'

const App = () => {
  return (
    <CombinedProviders providers={[CountProvider, UserProvider]}>
      <Counter />
    </CombinedProviders>
  )
}

export default App
