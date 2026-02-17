import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box, Text, Chip } from "@sparrowengg/twigs-react";

export default function TableWithActiveRow() {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const tasks = [
    { task: "Design Review", assignee: "Sarah Wilson", priority: "High", dueDate: "2024-01-20", status: "In Progress" },
    { task: "Code Implementation", assignee: "Mike Davis", priority: "Medium", dueDate: "2024-01-25", status: "Pending" },
    { task: "Testing", assignee: "Lisa Chen", priority: "Low", dueDate: "2024-01-30", status: "Completed" }
  ]
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$15", padding:"$7" }}>
      {/* Table with Both Borders and Active Row */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>Table with Both Borders and Active Row</Text>
        
        <Table border="both">
          <Thead>
            <Tr>
              <Th>Task</Th>
              <Th>Assignee</Th>
              <Th>Priority</Th>
              <Th>Due Date</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tasks.map((item, index) => (
              <Tr 
                key={index} 
                active={selectedRow === index}
                onClick={() => setSelectedRow(selectedRow === index ? null : index)}
                css={{ cursor: "pointer" }}
              >
                <Td>
                  <Text css={{ fontWeight: "$5" }}>{item.task}</Text>
                </Td>
                <Td>{item.assignee}</Td>
                <Td>
                  <Chip 
                    color={item.priority === "High" ? "error" : item.priority === "Medium" ? "warning" : "default"}
                    size="sm"
                  >
                    {item.priority}
                  </Chip>
                </Td>
                <Td>{item.dueDate}</Td>
                <Td>
                  <Chip 
                    color={item.status === "Completed" ? "success" : item.status === "In Progress" ? "primary" : "default"}
                    size="sm"
                  >
                    {item.status}
                  </Chip>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
} 