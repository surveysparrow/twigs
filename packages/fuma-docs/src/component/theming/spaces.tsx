import { defaultTheme } from "@sparrowengg/twigs-react";
import { remToPix } from "@/lib/utils";
import {
  Box,
  Text,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@sparrowengg/twigs-react";
import React from "react";

const { space } = defaultTheme;

type SpaceKeys = keyof typeof space;

export default function AllSpaces() {
  return (
    <Box>
      <Text css={{ marginBottom: "30px" }}>
        Space values can be used for padding, margin, gap
      </Text>

      <Table
        css={{
          height: "800px",
          overflow: "auto",
          "& th": {
            width: 200,
          },
          "& tr, th, td": {
            border: "none",
          },
        }}
      >
        <Thead>
          <Th> Key </Th>
          <Th> Value </Th>
          <Th> px Value </Th>
        </Thead>
        <Tbody>
          {Object.keys(space).map((sp) => (
            <Tr key={`space-${sp}`}>
              <Td>{sp}</Td>
              <Td>{space[sp as unknown as SpaceKeys]}</Td>
              <Td>
                {remToPix(space[sp as unknown as SpaceKeys])}
                px
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
