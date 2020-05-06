# ctx-provider

> React hooks and context utils

[![NPM](https://img.shields.io/npm/v/ctx-provider.svg)](https://www.npmjs.com/package/ctx-provider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ctx-provider
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'ctx-provider'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [Acidic9](https://github.com/Acidic9)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
