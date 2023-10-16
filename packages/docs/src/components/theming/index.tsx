import React from 'react';
import { twigsComponentLoader } from '@site/src/theme/ReactLiveScope/twigs-loader';
import { defaultTheme as theme } from '@site/../react-components/src/stitches.config';
const Box = twigsComponentLoader('Box');
const Button = twigsComponentLoader('Box');

export const CustomizedButton = () => {
  return (
    <Button css={{
      backgroundColor: '$positive500',
      color: '$white900',
      borderRadius: '$pill',
      width: '200px',
      padding: '$6 $10',
      cursor: 'pointer',
      fontSize: '$md',
      '&:hover': {
        backgroundColor: '$positive600'
      },
      '&:active': {
        backgroundColor: '$positive900'
      }
    }}>
      Submit
    </Button>
  )
}


export function DefaultThemeContainer() {
  return (
    <Box css={{
      maxHeight: 500,
      overflowY: 'auto'
    }}>
      <pre>
        {JSON.stringify(theme, undefined, 2)}
      </pre>
    </Box>
  )
}