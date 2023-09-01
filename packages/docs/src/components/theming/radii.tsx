import { defaultTheme } from '@site/../react-components/dist/stitches.config';
import { twigsComponentLoader } from '@site/src/theme/ReactLiveScope/twigs-loader';
import React from 'react';

const Box = twigsComponentLoader('Box');
const Chip = twigsComponentLoader('Chip');
const Text = twigsComponentLoader('Text');
const Flex = twigsComponentLoader('Flex');

const { radii } = defaultTheme;

export default function AllRadii() {
  return (
    <Box>
      <Flex gap="$16" wrap="wrap">
        {
          Object.keys(radii).map((rad) => (
            <div key={`rad-${rad}`}>
              <Chip color="primary">
                <Text size="sm">{rad}</Text>
                :
                <Text size="sm">{radii[rad]}</Text>
              </Chip>
              <Box
                css={{
                  border: '1px solid $black400',
                  borderRadius: radii[rad],
                  margin: '10px 0 10px 0',
                  padding: '10px',
                  color: 'black',
                  height: 100,
                  width: 100
                }}
              />
            </div>
          ))
        }
      </Flex>
    </Box>
  );
};