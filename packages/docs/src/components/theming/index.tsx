import React from 'react';
import { Box, Text, Flex, defaultTheme, Table, Tbody, Td, Th, Thead, Tr, Heading, Chip, Button, theme, styled } from '@sparrowengg/twigs-react';

const defaultText = "The quick brown fox jumps over the lazy dog.";

const {
  colors, fontSizes, fontWeights, borderWidths, radii, space, sizes
} = defaultTheme;

function remToPix(remVal) {
  return parseFloat(remVal.replace('rem', '')) * 16;
}

const StyledHeading = styled(Heading, {
  color: '$black600',
})

export function AllColors() {
  return (
    <Flex flexDirection="column" gap="48px">
      <ColorDisplay selectedColor={'primary'} />
      <ColorDisplay selectedColor={'secondary'} />
      <ColorDisplay selectedColor={'accent'} />
      <ColorDisplay selectedColor={'highlight'} />
      <ColorDisplay selectedColor={'positive'} />
      <ColorDisplay selectedColor={'error'} />
      <ColorDisplay selectedColor={'neutral'} />
      <ColorDisplay selectedColor={'black'} />
      <ColorDisplay selectedColor={'white'} />
    </Flex>
  );
};

function ColorDisplay({ selectedColor }) {
  return (
    <Box>
      <StyledHeading size="h6"> {selectedColor.charAt(0).toUpperCase().concat(selectedColor.slice(1))} </StyledHeading>
      <Flex gap="$24" wrap="wrap">
        {
          Object.keys(colors).filter(color => color.includes(selectedColor)).map((color) => (
            <div key={`color-${color}`}>
              <Box
                css={{
                  backgroundColor: colors[color],
                  border: '1px solid $neutral50',
                  color: 'white',
                  height: '30px',
                  width: '100px',
                  borderRadius: '3px'
                }}
              />
              <Text
                size="xs"
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
                {colors[color]}
              </Text>
            </div>
          ))
        }
      </Flex>
    </Box>
  )
}

export function AllFontSizes() {
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

export function AllFontWeights() {
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
};

export function AllBorderWidths() {
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

export function AllRadii() {
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

export function AllSpaces() {
  return (
    <Box>
      <Text css={{ marginBottom: '30px' }}>
        Space values can be used for padding, margin, gap
      </Text>

      <Table
        css={{
          height: '800px',
          overflow: 'auto',
          '& th': {
            width: 200
          }
        }}
      >
        <Thead>
          <Th> Key </Th>
          <Th> Value </Th>
          <Th> px Value </Th>
        </Thead>
        <Tbody>
          {
            Object.keys(space).map((sp) => (
              <Tr key={`space-${sp}`}>
                <Td>{sp}</Td>
                <Td>{space[sp]}</Td>
                <Td>
                  {remToPix(space[sp])}
                  px
                </Td>
              </Tr>
            ))
          }
        </Tbody>
      </Table>
    </Box>
  );
};

export function AllSizes() {
  return (
    <Box>
      <Text css={{ marginBottom: '30px' }}>
        Size can be used for height, width, top, bottom etc...
      </Text>
      <Table
        css={{
          height: '800px',
          overflow: 'auto',
          '& th': {
            width: 200
          }
        }}
      >
        <Thead>
          <Th> Key </Th>
          <Th> Value </Th>
        </Thead>
        <Tbody>
          {
            Object.keys(sizes).map((sp) => (
              <Tr key={`size-${sp}`}>
                <Td>{sp}</Td>
                <Td>{sizes[sp]}</Td>
              </Tr>
            ))
          }
        </Tbody>
      </Table>
    </Box>
  );
};

export const CustomizedButton = () => {
  return (
    <Button css={{
      backgroundColor: '$primary500',
      color: '$white900',
      borderRadius: '$none',
      padding: '$10 $12',
      '&:hover': {
        backgroundColor: '$primary600'
      },
      '&:active': {
        backgroundColor: '$primary700'
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