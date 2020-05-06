import createStore, { CombinedProviders } from './'
import React, {
  useState,
  useContext,
  useEffect,
  FunctionComponent,
} from 'react'
import { render } from '@testing-library/react'

// mock timer using jest
jest.useFakeTimers()

const useCount = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)

  const inc = () => setCount(count + 1)
  const dec = () => setCount(count - 1)

  return {
    count,
    inc,
    dec,
  }
}

describe('createStore', () => {
  it('creates a valid store', () => {
    const { ctx, Provider } = createStore(useCount)

    expect(ctx).toMatchObject({
      Consumer: {},
      Provider: {},
    })

    let renderNum = 0
    const Component = () => {
      const { count, inc, dec } = useContext(ctx)

      expect(count).toBe(renderNum + 10)
      expect(typeof inc).toBe('function')
      expect(typeof dec).toBe('function')

      useEffect(() => {
        inc()
      }, [])

      renderNum++
      return <></>
    }

    render(
      <Provider args={10}>
        <Component />
      </Provider>
    )
  })

  it('combines providers', () => {
    const { ctx: ctxOne, Provider: ProviderOne } = createStore(
      initialValue => initialValue || 1
    )
    const { ctx: ctxTwo, Provider: ProviderTwo } = createStore(
      initialValue => initialValue || 2
    )

    const GlobalState: FunctionComponent = ({ children }) => (
      <CombinedProviders
        providers={[{ provider: ProviderOne, args: 3 }, ProviderTwo]}
      >
        {children}
      </CombinedProviders>
    )

    const Component = () => {
      const one = useContext(ctxOne)
      const two = useContext(ctxTwo)

      expect(one).toBe(3)
      expect(two).toBe(2)

      return <></>
    }

    render(
      <GlobalState>
        <Component />
      </GlobalState>
    )
  })
})
