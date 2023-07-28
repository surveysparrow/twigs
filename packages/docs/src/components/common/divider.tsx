import React from 'react';
import { Box } from "@site/../react-components/dist/index";

export function Divider() {
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