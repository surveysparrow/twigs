import { defaultTheme } from '@site/../react-components/src/stitches.config';
import { remToPix, twigsComponentLoader } from '@site/src/theme/ReactLiveScope/twigs-loader';
import React from 'react';
const Box = twigsComponentLoader('Box');
const Chip = twigsComponentLoader('Chip');
const Text = twigsComponentLoader('Text');
const defaultText = "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."


const { lineHeights } = defaultTheme;

export default function AllLineHeights() {
  return (
    <Box>
      {
        Object.keys(lineHeights).map((lineHeight) =>{
          const pxVal = remToPix(lineHeights[lineHeight]);
          return (
          <Box
            key={`lineHeight${lineHeight}`}
            css={{ borderBottom: '1px solid $black50', padding: '10px 0' }}
          >
            <Chip size="sm" color="primary">
              <Text>${lineHeight}</Text>
              /
              <Text>{lineHeights[lineHeight]}</Text>
              <Text>{`(${pxVal})`}</Text>
            </Chip>
            <Text
              size="sm"
              css={{
                lineHeight: lineHeights[lineHeight],
                marginTop: '10px'
              }}
            >
              {defaultText}
            </Text>
          </Box>
        )})
      }
    </Box>
  );
}