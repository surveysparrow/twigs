import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box, Text, Flex, Button, Avatar, Chip} from "@sparrowengg/twigs-react";
import { 
  PencilIcon,
  DeleteIcon,
} from "@sparrowengg/twigs-react-icons";

export default function TableBasic() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2024-01-15"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "User",
      status: "Active",
      lastLogin: "2024-01-14"
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      role: "Editor",
      status: "Inactive",
      lastLogin: "2024-01-10"
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice.brown@example.com",
      role: "User",
      status: "Active",
      lastLogin: "2024-01-13"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Active" ? "success" : "default";
  };

  const products = [
    {
      id: 1,
      name: "Laptop Pro",
      category: "Electronics",
      price: "$1,299",
      stock: 45
    },
    {
      id: 2,
      name: "Wireless Mouse",
      category: "Accessories",
      price: "$29.99",
      stock: 120
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      category: "Accessories",
      price: "$89.99",
      stock: 67
    }
  ];

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$15", padding:"$7" }}>
      
      {/* Basic Table with Horizontal Borders */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>Basic Table (Horizontal Borders)</Text>
        
        <Table border="horizontal">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Status</Th>
              <Th>Last Login</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>
                  <Flex css={{ alignItems: "center", gap: "$3" }}>
                    <Avatar size="sm" name={user.name} />
                    <Text css={{ fontWeight: "$5" }}>{user.name}</Text>
                  </Flex>
                </Td>
                <Td>{user.email}</Td>
                <Td>{user.role}</Td>
                <Td>
                  <Chip color={getStatusColor(user.status)} size="sm">
                    {user.status}
                  </Chip>
                </Td>
                <Td>{user.lastLogin}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Table with Vertical Borders */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>Table with Vertical Borders</Text>
        
        <Table border="vertical">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Category</Th>
              <Th>Price</Th>
              <Th>Stock</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.id}>
                <Td>{product.name}</Td>
                <Td>{product.category}</Td>
                <Td>{product.price}</Td>
                <Td>{product.stock}</Td>
                <Td>
                  <Flex css={{ gap: "$2" }}>
                    <Button size="sm" variant="ghost" leftIcon={<PencilIcon />}>
                      Edit
                    </Button> 
                    <Button size="sm" variant="ghost" leftIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
} 