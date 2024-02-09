import { defaultTheme } from '@site/../react-components/src/stitches.config';
import { remToPix, twigsComponentLoader } from '@site/src/theme/ReactLiveScope/twigs-loader';
import React from 'react';

const Box = twigsComponentLoader('Box');
const Text = twigsComponentLoader('Text');
const Table = twigsComponentLoader('Table');
const Tbody = twigsComponentLoader('Tbody');
const Td = twigsComponentLoader('Td');
const Th = twigsComponentLoader('Th');
const Thead = twigsComponentLoader('Thead');
const Tr = twigsComponentLoader('Tr');

const { space } = defaultTheme;

export default function AllSpaces() {
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
          },
          '& tr, th, td': {
            border: 'none'
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
                </Td>
              </Tr>
            ))
          }
        </Tbody>
      </Table>
    </Box>
  );
};