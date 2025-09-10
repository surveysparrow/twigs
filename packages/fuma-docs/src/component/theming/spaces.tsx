"use client";
import { defaultTheme } from "@sparrowengg/twigs-react";
import { remToPix } from "@/lib/utils";
import { Box, Table, Tbody, Td, Th, Thead, Tr ,toast,Toastr} from "@sparrowengg/twigs-react";
import React from "react";

const { space } = defaultTheme;

type SpaceKeys = keyof typeof space;

export function AllSpaces() {
  
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
          "& th": {
            width: 200,
          },
          "& tr, th, td": {
            border: "none",
          },
        }}
        className="text-fd-primary"
      >
        <Thead>
          <Tr>
            <Th> Key </Th>
            <Th> Value </Th>
            <Th> px Value </Th>
            <Th> Example </Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(space).map((sp) => (
            <Tr key={`space-${sp}`} className="cursor-pointer" onClick={() => handleCopy(sp)}>
              <Td className="!text-fd-muted-foreground">{sp}</Td>
              <Td className="!text-fd-muted-foreground">{space[sp as unknown as SpaceKeys]}</Td>
              <Td className="!text-fd-muted-foreground">
                {remToPix(space[sp as unknown as SpaceKeys])}
                px
              </Td>
              <Td>
                <Box css={{width: space[sp as unknown as SpaceKeys],height: "$5"}} className="bg-fd-primary"></Box>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
