import React, { useState } from "react";
import { Pagination, Box, Text } from "@sparrowengg/twigs-react";

export default function PaginationAdvanced() {
  const [activePage, setActivePage] = useState(1);
  const [activePageLarge, setActivePageLarge] = useState(1);

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$15", alignItems: "center" }}>
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4", alignItems: "center" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Small Pagination (siblingCount: 1)</Text>
        <Pagination
          activePage={activePage}
          itemsPerPage={5}
          total={50}
          siblingCount={1}
          size="sm"
          onChange={(_, page) => setActivePage(page)}
        />
      </Box>

      <Box css={{ display: "flex", flexDirection: "column", gap: "$4", alignItems: "center" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Large Pagination (siblingCount: 2)</Text>
        <Pagination
          activePage={activePageLarge}
          itemsPerPage={10}
          total={200}
          siblingCount={2}
          size="lg"
          onChange={(_, page) => setActivePageLarge(page)}
        />
      </Box>

      <Box css={{ display: "flex", flexDirection: "column", gap: "$4", alignItems: "center" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Extra Large with Many Pages</Text>
        <Pagination
          activePage={5}
          itemsPerPage={20}
          total={1000}
          siblingCount={1}
          size="xl"
          onChange={(_, page) => console.log('Page changed to:', page)}
        />
      </Box>
    </Box>
  );
}