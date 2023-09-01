import React from 'react';
import { twigsComponentLoader } from '@site/src/theme/ReactLiveScope/twigs-loader';
const Box = twigsComponentLoader('Box');

export default function Divider() {
  return (
    <Box css={{
      padding: '2rem 0',
    }}>
      <Box css={{
        height: 1,
        background: '$black50',
      }} />
    </Box>
  )
}