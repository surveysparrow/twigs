import { defaultTheme } from '@site/../react-components/dist/stitches.config';
import { twigsComponentLoader } from '@site/src/theme/ReactLiveScope/twigs-loader';
import React from 'react';

const Box = twigsComponentLoader('Box');
const Chip = twigsComponentLoader('Chip');
const Text = twigsComponentLoader('Text');
const Flex = twigsComponentLoader('Flex');

const { borderWidths } = defaultTheme;

export default function AllBorderWidths() {
  return (
    <Box>
      <Flex gap="$8" wrap="wrap">
        {
          Object.keys(borderWidths).map((borderWidth) => (
            <div key={`borderWidth${borderWidth}`}>
              <Chip size="sm" color="primary">
                <Text>$ {borderWidth}</Text>
                /
                <Text>{borderWidths[borderWidth]}</Text>
              </Chip>
              <Box
                css={{
                  border: `${borderWidths[borderWidth]} solid $black400`,
                  marginTop: '10px',
                  padding: '10px',
                  color: 'black'
                }}
              />
            </div>
          ))
        }
      </Flex>
    </Box>
  );
};