import React, { useState } from "react";
import { Pagination, Box, Flex } from "@sparrowengg/twigs-react";

export default function PaginationBasic() {
  const [activePage, setActivePage] = useState(1);

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$6", alignItems: "center" }}>
      <Flex gap="$4" alignItems="center">
        <Pagination
          activePage={activePage}
          itemsPerPage={10}
          total={100}
          onChange={(_, page) => setActivePage(page)}
        />
      </Flex>
    </Box>
  );
}