import { defaultTheme, styled } from '@site/../react-components/src/stitches.config';
import { twigsComponentLoader } from '@site/src/theme/ReactLiveScope/twigs-loader';
import React from 'react';
const Flex = twigsComponentLoader('Flex');
const Box = twigsComponentLoader('Box');
const Text = twigsComponentLoader('Text');
const Heading = twigsComponentLoader('Heading');

export default function AllColors() {
  return (
    <Flex flexDirection='column' gap={['12px', '4px']}>
      <ColorDisplay selectedColor={'primary'} />
      <ColorDisplay selectedColor={'secondary'} />
      <ColorDisplay selectedColor={'accent'} />
      <ColorDisplay selectedColor={'highlight'} />
      <ColorDisplay selectedColor={'positive'} />
      <ColorDisplay selectedColor={'negative'} />
      <ColorDisplay selectedColor={'neutral'} />
      <ColorDisplay selectedColor={'black'} />
      <ColorDisplay selectedColor={'white'} />
    </Flex>
  );
};

const StyledHeading = styled(Heading, {
  color: '$black600',
})

function ColorDisplay({ selectedColor }) {
  return (
    <Box css={{ marginBottom: 36 }}>
      <StyledHeading size="h6"> {selectedColor.charAt(0).toUpperCase().concat(selectedColor.slice(1))} </StyledHeading>
      <Flex gap={'12px'} wrap="wrap">
        {
          Object.keys(defaultTheme.colors as any).filter(color => color.includes(selectedColor)).map((color) => (
            <div key={`color-${color}`}>
              <Box
                css={{
                  backgroundColor: defaultTheme.colors[color],
                  border: '1px solid $neutral50',
                  color: 'white',
                  height: '30px',
                  width: '100px',
                  borderRadius: '3px'
                }}
              />
              <Text
                size="xs"
                weight="medium"
                css={{
                  marginBottom: '0',
                  color: '$black800'
                }}
              >
                ${color}
              </Text>
              <Text
                size="xs"
                css={{
                  marginBottom: '0',
                  color: '$black700'
                }}
              >
                {defaultTheme.colors[color]}
              </Text>
            </div>
          ))
        }
      </Flex>
    </Box>
  )
}