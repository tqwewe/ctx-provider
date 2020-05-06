import React, { createContext } from 'react'
export { default as CombinedProviders } from './components/CombinedProviders'

type Hook<T> = (...args: any[]) => T

export interface ProviderProps {
  args?: any
  children: any
}

const createStore = <T,>(useHook: Hook<T>) => {
  const ctx = createContext<T>({} as T)
  const ProviderComponent = ctx.Provider

  const Provider = ({ args, children }: ProviderProps) => {
    const value = useHook(args)

    return <ProviderComponent value={value}>{children}</ProviderComponent>
  }

  return {
    ctx,
    Provider,
  }
}

export default createStore
