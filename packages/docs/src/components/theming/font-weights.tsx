import { defaultTheme } from '@site/../react-components/dist/stitches.config';
import { twigsComponentLoader } from '@site/src/theme/ReactLiveScope/twigs-loader';
import React from 'react';
const Box = twigsComponentLoader('Box');
const Chip = twigsComponentLoader('Chip');
const Text = twigsComponentLoader('Text');
const defaultText = 'The quick brown fox jumps over the lazy dog';


const { fontWeights } = defaultTheme;

export default function AllFontWeights() {
  return (
    <Box>
      {
        Object.keys(fontWeights).map((fontWeight) => (
          <Box
            key={`fontWeight${fontWeight}`}
            css={{ borderBottom: '1px solid $black50', padding: '10px 0' }}
          >
            <Chip size="sm" color="primary">
              <Text>${fontWeight}</Text>
              /
              <Text>{fontWeights[fontWeight]}</Text>
            </Chip>
            <Text
              size="lg"
              css={{
                fontWeight: fontWeights[fontWeight],
                marginTop: '10px'
              }}
            >
              {defaultText}
            </Text>
          </Box>
        ))
      }
    </Box>
  );
}