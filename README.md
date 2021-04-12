# window-dimensions-hooks

> React hooks for getting browser window dimensions, even during and after resizing

[![NPM](https://img.shields.io/npm/v/window-dimensions-hooks.svg)](https://www.npmjs.com/package/window-dimensions-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/jacobdcastro/window-dimensions-hooks.svg?branch=master)](https://travis-ci.org/jacobdcastro/window-dimensions-hooks)

## Install

```bash
npm install --save window-dimensions-hooks
```

## Usage

This module gives access to 3 different hooks.

- `useWindowWidth`
- `useWindowHeight`
- `useWindowDimensions`

All three hooks give access to number values represented by the `window.innerWidth` and `window.innerHeight` property values. The hooks also live-update the variable when the window is resized.

_Note_: All hooks are **named exports**. Therefore you must specify which hook you want to import using the object destructuring syntax, as shown in code examples below.

### useWindowWidth()

The `useWindowWidth` hook returns a number value. The variable is updated when window is resized.

```jsx
import React from "react";

import { useWindowWidth } from "window-dimensions-hooks";

const MyComponent = () => {
  const width = useWindowWidth();
  return <div>Window width is {width}px.</div>;
};
```

### useWindowHeight()

Just like `useWindowWidth`, the `useWindowHeight` hook simply returns a number value of the window's height. The variable is updated when window is resized.

```jsx
import React from "react";

import { useWindowHeight } from "window-dimensions-hooks";

const MyComponent = () => {
  const height = useWindowHeight();
  return <div>Window height is {height}px.</div>;
};
```

### useWindowDimensions()

Unlike the previous hooks, the `useWindowDimensions` hook returns an object with height and width key-value pairs. Therefore, you can use object destructuring to pull the height and width values from the object.

Just as before, the values of the height/width keys in the object are live-updated when the browser window is resized.

```jsx
import React from "react";

import { useWindowDimensions } from "window-dimensions-hooks";

const MyComponent = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div>
      <p>Window height is {height}px</p>
      <p>Window width is {width}px</p>
    </div>
  );
};
```

---

## Thank You

Thank you so much for checking out these hooks! Feel free to submit a PR or issue and I'll be happy to look into it! I love collaborating and I'm always happy to help you improve this package.

## License

MIT © [jacobdcastro](https://github.com/jacobdcastro)
