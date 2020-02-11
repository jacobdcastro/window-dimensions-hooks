# window-dimensions-hooks

> React hooks for getting browser window dimensions

[![NPM](https://img.shields.io/npm/v/window-dimensions-hooks.svg)](https://www.npmjs.com/package/window-dimensions-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save window-dimensions-hooks
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'window-dimensions-hooks'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [jacobdcastro](https://github.com/jacobdcastro)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
