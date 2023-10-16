import { defaultTheme } from '@site/../react-components/src/stitches.config';
import { twigsComponentLoader } from '@site/src/theme/ReactLiveScope/twigs-loader';
import React from 'react';

const Box = twigsComponentLoader('Box');
const Text = twigsComponentLoader('Text');
const Table = twigsComponentLoader('Table');
const Tbody = twigsComponentLoader('Tbody');
const Td = twigsComponentLoader('Td');
const Th = twigsComponentLoader('Th');
const Thead = twigsComponentLoader('Thead');
const Tr = twigsComponentLoader('Tr');

const { sizes } = defaultTheme;

export default function AllSizes() {
  return (
    <Box>
      <Text css={{ marginBottom: '30px' }}>
        Size can be used for height, width, top, bottom etc...
      </Text>
      <Table
        css={{
          height: '800px',
          width: '100%',
          overflow: 'auto',
          '& th': {
            width: 200,
          },
          '& tr, th, td': {
            border: 'none'
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