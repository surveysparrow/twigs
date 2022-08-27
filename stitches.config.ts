import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const resetStyles = {
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
    margin: '0',
    padding: '0',
    border: '0',
    fontSize: '100%',
    verticalAlign: 'baseline',
  },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section': {
    display: 'block',
  },
  '*[hidden]': {
    display: 'none',
  },
  body: {
    lineHeight: '1',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: '',
    // eslint-disable-next-line no-dupe-keys
    // content: 'none',
  },
  table: {
    borderSpacing: '0',
  },
};

export const defaultTheme = {
  colors: {
    text: '#0D1B1E',
    primary: '#19B885',
    gray500: '#BDBDBD',
    red500: 'hsl(352,100%,62%)',
    green500: 'hsl(148,60%,60%)',
    blue500: 'hsl(206,100%,50%)',
    purple500: 'hsl(252,78%,60%)',
  },
  space: {
    1: '2px',
    2: '4px',
    3: '8px',
    4: '12px',
    5: '16px',
    6: '24px',
    7: '32px',
    8: '40px',
    9: '48px',
    10: '56px',
    11: '64px',
    12: '72px',
    13: '80px',
  },
  fontSizes: {
    1: '12px',
    2: '14px',
    3: '16px',
    4: '18px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '48px',
    10: '56px',
    11: '64px',
  },
  fonts: {
    untitled: 'Untitled Sans, apple-system, sans-serif',
    mono: 'Söhne Mono, menlo, monospace',
  },
  fontWeights: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    6: '600',
    7: '700',
    8: '800',
    9: '900',
  },
  lineHeights: {},
  letterSpacings: {},
  sizes: {},
  borderWidths: {},
  borderStyles: {},
  radii: {},
  shadows: {},
  zIndices: {},
  transitions: {},
};

export const {
  styled,
  theme,
  createTheme,
  globalCss,
  keyframes,
  config,
  reset,
  css,
} = createStitches({
  prefix: 'twigs',
  theme: defaultTheme,
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export const globalStyles = globalCss({
  ...resetStyles,
  '@import':
    'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap',
  '*': { margin: 0, padding: 0, fontFamily: "'Source Sans Pro', sans-serif" },
  '*, :before, :after': { boxSizing: 'border-box' },
});
