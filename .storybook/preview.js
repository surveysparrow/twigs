import { ThemeProvider } from '../src/theme-provider'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider
      theme={{
        fonts: {
          body: "'DM sans', sans-serif",
        },
      }}
    >
      <Story />
    </ThemeProvider>
  ),
];