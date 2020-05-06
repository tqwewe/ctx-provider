import React from 'react'
import { ProviderProps } from '../index'

type Provider = (props: ProviderProps) => JSX.Element
interface ProviderObj {
  provider: Provider
  args?: any
}

interface Props {
  providers: (Provider | ProviderObj)[]
  children: any
}

const CombinedProviders = ({ providers, children }: Props) => {
  const [NextProvider, ...remainingProviders] = providers
  if (!NextProvider) {
    return children
  }

  let ProviderComponent = NextProvider as Provider
  let args = undefined
  if (ProviderComponent.hasOwnProperty('provider')) {
    ProviderComponent = (NextProvider as ProviderObj).provider
    args = (NextProvider as ProviderObj).args
  }

  return (
    <ProviderComponent args={args}>
      <CombinedProviders providers={remainingProviders}>
        {children}
      </CombinedProviders>
    </ProviderComponent>
  )
}

export default CombinedProviders
