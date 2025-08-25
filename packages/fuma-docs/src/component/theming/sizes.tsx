import { defaultTheme } from "@sparrowengg/twigs-react";
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

const { sizes } = defaultTheme;

type SizesKeys = keyof typeof sizes;

export default function AllSizes() {
  return (
    <Box>
      <Text css={{ marginBottom: "30px" }}>
        Size can be used for height, width, top, bottom etc...
      </Text>
      <Table
        css={{
          height: "800px",
          width: "100%",
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
        </Thead>
        <Tbody>
          {Object.keys(sizes).map((sp) => (
            <Tr key={`size-${sp}`}>
              <Td>{sp}</Td>
              <Td>{sizes[sp as unknown as SizesKeys]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
