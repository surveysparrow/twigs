import React from 'react';
import { Box } from '../../box/box';
import { Text } from '../../text/text';
import { Flex } from '../../flex/flex';
import { defaultTheme } from '../../../stitches.config';
import {
  Table, Tbody, Td, Th, Thead, Tr
} from '../../table';
import { Chip } from '../../chip';
import { Heading } from '../../heading';

const {
  colors, fontSizes, fontWeights, borderWidths, radii, space, sizes
} = defaultTheme;

function remToPix(remVal) {
  return parseFloat(remVal.replace('rem', '')) * 16;
}

export const AllColors = () => {
  return (
    <Box>
      <Heading size="h2" css={{ marginBottom: '30px' }} id="colors">
        Colors
      </Heading>
      <Flex gap="$24" wrap="wrap">
        {
          Object.keys(colors).map((color) => (
            <div key={`color-${color}`}>
              <Box
                css={{
                  backgroundColor: colors[color],
                  border: '1px solid $neutral200',
                  color: 'white',
                  height: '60px',
                  width: '100px',
                  borderRadius: '4px'
                }}
              />
              <Text
                size="sm"
                css={{
                  marginTop: '5px',
                  color: '$black900'
                }}
              >
                {color}
              </Text>
              <Text
                size="sm"
                css={{
                  marginTop: '5px',
                  color: '$black700'
                }}
              >
                {Object.values(colors[color])}
              </Text>
            </div>
          ))
        }
      </Flex>
    </Box>
  );
};

export const AllFontSizes = () => {
  return (
    <Box>
      <Heading size="h2" css={{ marginBottom: '30px' }} id="fontSize">
        Font sizes
      </Heading>
      {
        Object.keys(fontSizes).map((fontSize) => {
          const pxVal = remToPix(fontSizes[fontSize]);
          return (
            <Box
              key={`fontSize-${fontSize}`}
              css={{ borderBottom: '1px solid rgba(0,0,0,.1)', padding: '30px 0' }}
            >
              <Chip size="sm" color="primary">
                <Text>{fontSize}</Text>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vitae
                laboriosam aut culpa pariatur dolorem. Corrupti excepturi quae
                doloremque! Aliquam ut explicabo provident vero? Impedit quae possimus
                corrupti eius recusandae?
              </Text>
            </Box>
          );
        })
      }
    </Box>
  );
};

export const AllFontWeights = () => {
  return (
    <Box>
      <Heading size="h2" css={{ marginBottom: '30px' }} id="fontWeights">
        Font weights
      </Heading>
      {
        Object.keys(fontWeights).map((fontWeight) => (
          <Box
            key={`fontWeight${fontWeight}`}
            css={{ borderBottom: '1px solid rgba(0,0,0,.1)', padding: '30px 0' }}
          >
            <Chip size="sm" color="primary">
              <Text>{fontWeight}</Text>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vitae
              laboriosam aut culpa pariatur dolorem.
            </Text>
          </Box>
        ))
      }
    </Box>
  );
};

export const AllBorderWidths = () => {
  return (
    <Box>
      <Heading size="h2" css={{ marginBottom: '30px' }} id="borderWidths">
        Border Widths
      </Heading>
      <Flex gap="$8" wrap="wrap">
        {
          Object.keys(borderWidths).map((borderWidth) => (
            <div key={`borderWidth${borderWidth}`}>
              <Chip size="sm" color="primary">
                <Text>{borderWidth}</Text>
                /
                <Text>{borderWidths[borderWidth]}</Text>
              </Chip>
              <Box
                css={{
                  border: `${borderWidths[borderWidth]} solid black`,
                  marginTop: '10px',
                  padding: '10px',
                  color: 'black'
                }}
              >
                SurveySparrow
              </Box>
            </div>
          ))
        }
      </Flex>
    </Box>
  );
};

export const AllRadii = () => {
  return (
    <Box>
      <Heading
        size="h2"
        css={{ marginBottom: '30px' }}
        id="borderRadius"
      >
        Border Radius
      </Heading>
      <Flex gap="$16" wrap="wrap">
        {
          Object.keys(radii).map((rad) => (
            <div key={`rad-${rad}`}>
              <Box
                css={{
                  border: '2px solid black',
                  borderRadius: radii[rad],
                  marginBottom: '10px',
                  padding: '10px',
                  color: 'black',
                  height: 50,
                  width: 50
                }}
              />
              <Chip color="primary">
                <Text size="sm">{rad}</Text>
                :
                <Text size="sm">{radii[rad]}</Text>
                (
                <Text>
                  {remToPix(radii[rad])}
                  px
                </Text>
                )
              </Chip>
            </div>
          ))
        }
      </Flex>
    </Box>
  );
};

export const AllSpaces = () => {
  return (
    <Box>
      <Heading size="h2" id="spaces">
        Spaces
      </Heading>
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

export const AllSizes = () => {
  return (
    <Box>
      <Heading size="h2" id="sizes">
        Sizes
      </Heading>
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
