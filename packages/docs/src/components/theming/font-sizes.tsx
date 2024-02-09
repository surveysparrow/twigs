import React from 'react';
import { defaultTheme } from "@site/../react-components/src/stitches.config";
import { remToPix, twigsComponentLoader } from "@site/src/theme/ReactLiveScope/twigs-loader";

const defaultText = 'The quick brown fox jumps over the lazy dog';
const Box = twigsComponentLoader('Box');
const Chip = twigsComponentLoader('Chip');
const Text = twigsComponentLoader('Text');

const { fontSizes } = defaultTheme;

export default function AllFontSizes() {
  return (
    <Box>
      {
        Object.keys(fontSizes).map((fontSize) => {
          const pxVal = remToPix(fontSizes[fontSize]);
          return (
            <Box
              key={`fontSize-${fontSize}`}
              css={{ borderBottom: '1px solid $black50', padding: '10px 0' }}
            >
              <Chip size="sm" color="primary">
                <Text>${fontSize}</Text>
                :
                <Text>{fontSizes[fontSize]}</Text>
                (
                <Text>
                  {pxVal}
                  px
                </Text>
                )
              </Chip>
              <Text
                size="sm"
                css={{
                  fontSize: fontSizes[fontSize],
                  marginTop: '10px',
                  fontWeight: '500'
                }}
              >
                {defaultText}
              </Text>
            </Box>
          );
        })
      }
    </Box>
  );
};