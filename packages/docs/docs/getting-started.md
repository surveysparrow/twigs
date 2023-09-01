---
sidebar_position: 1
---

# Installation
To get started with Twigs, run the following commands in your project repository terminal. 

```bash
npm i @sparrowengg/twigs-react
```

:::warning
Twigs is still in alpha. Please expect breaking changes. We'll try out best to make the updates smooth. 
:::

Now, you can wrap your application root in Twigs `ThemeProvider`. 

```jsx
import { ThemeProvider } from '@sparrowengg/twigs-react';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  )
}
```

The `theme` object in `ThemeProvider` will help you customize the theme settings of your application. 