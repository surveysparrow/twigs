import { Box } from '../../box/box';
import { Text } from '../../text/text';
import { Flex } from '../../flex/flex';
import { defaultTheme } from '../../../stitches.config';

const { colors, fontSizes, fontWeights, borderWidths, radii } = defaultTheme;

export const AllColors = () => {
  return Object.keys(colors).map((color, idx) => (
    <div key={`color${idx}`}>
      <Box
        css={{
          backgroundColor: colors[color],
          color: 'white',
          height: '100px',
          width: '160px',
          borderRadius: '5px',
          border: '1px solid #b0b0b0',
        }}
      ></Box>
      <Flex css={{ justifyContent: 'space-between' }}>
        <Text
          size="sm"
          css={{
            marginTop: '5px',
          }}
        >
          {color}
        </Text>
        <Text
          size="sm"
          css={{
            marginTop: '5px',
          }}
        >
          {Object.values(colors[color])}
        </Text>
      </Flex>
    </div>
  ));
};

export const AllFontSizes = () => {
  return Object.keys(fontSizes).map((fontSize, idx) => (
    <Box
      key={`fontSize${idx}`}
      css={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '30px 0' }}
    >
      <Text size="sm">
        {fontSize}&emsp;&emsp;&emsp;{fontSizes[fontSize]}
      </Text>
      <Text
        size="sm"
        css={{
          fontSize: fontSizes[fontSize],
          marginTop: '10px',
          fontWeight: '500',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vitae
        laboriosam aut culpa pariatur dolorem. Corrupti excepturi quae
        doloremque! Aliquam ut explicabo provident vero? Impedit quae possimus
        corrupti eius recusandae?
      </Text>
    </Box>
  ));
};

export const AllFontWeights = () => {
  return Object.keys(fontWeights).map((fontWeight, idx) => (
    <Box
      key={`fontWeight${idx}`}
      css={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '30px 0' }}
    >
      <Text size="sm">key&emsp;&emsp;value</Text>
      <Text size="md">
        {fontWeight}&emsp;&emsp;{fontWeights[fontWeight]}
      </Text>
      <Text
        css={{
          fontWeight: fontWeights[fontWeight],
          marginTop: '10px',
          fontSize: '2rem',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vitae
        laboriosam aut culpa pariatur dolorem.
      </Text>
    </Box>
  ));
};

export const AllBorderWidths = () => {
  return Object.keys(borderWidths).map((borderWidth, idx) => (
    <div key={`borderWidth${idx}`}>
      <Text size="sm">
        {borderWidth}&emsp;{borderWidths[borderWidth]}
      </Text>
      <Box
        size="lg"
        css={{
          border: `${borderWidths[borderWidth]} solid black`,
          marginTop: '10px',
          padding: '10px',
          color: 'black',
        }}
      >
        SurveySparrow
      </Box>
    </div>
  ));
};

export const AllRadii = () => {
  return Object.keys(radii).map((rad, idx) => (
    <div key={`rad${idx}`}>
      <Box
        css={{
          backgroundColor: '#56B0BB',
          color: 'white',
          height: '150px',
          borderRadius: radii[rad],
          width: '150px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Text size="lg" css={{ color: 'white', margin: '0' }}>
          {rad}
        </Text>
        <Text size="lg" css={{ color: 'white', margin: '0' }}>
          {radii[rad]}
        </Text>
      </Box>
    </div>
  ));
};
