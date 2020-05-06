import { useState } from 'react'
import createStore from 'ctx-provider'

const useUser = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = async (username, password) => {
    setLoading(true)

    // Fetch user
    // await fetch ...
    setUser({
      name: 'John Doe',
    })

    setLoading(false)
  }

  return { count, login }
}

export const { ctx, Provider } = createStore(useUser)
