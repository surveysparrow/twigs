"use client";
import { defaultTheme, toast, Toastr } from "@sparrowengg/twigs-react";
import {
  Box,
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

export function AllSizes() {
  const handleCopy = async (sp: string) => {
    try {
      await navigator.clipboard.writeText(`$${sp}`);
      toast({
        variant: "default",
        title: `Copied to clipboard`,
        css:{
          boxShadow: "none"
        }
      });
    } catch (err) {
      console.error('Failed to copy:', err);
      toast({
        variant: "error",
        title: "Copy failed",
        description: "Could not copy to clipboard",
        css:{
          boxShadow: "none"
        }
      });
    }
  };
  
  return (
    <Box> 
      <Toastr duration={3000} />
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
          <Tr>
          <Th> Key </Th>
          <Th> Value </Th>
          <Th> Example </Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(sizes).map((sp) => (
            <Tr key={`size-${sp}`} className="cursor-pointer" onClick={() => handleCopy(sp)}>
              <Td className="!text-fd-muted-foreground">{sp}</Td>
              <Td className="!text-fd-muted-foreground">{sizes[sp as unknown as SizesKeys]}</Td>
              <Td>
                <Box css={{width: sizes[sp as unknown as SizesKeys],height: "$5"}} className="bg-fd-primary"></Box>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
