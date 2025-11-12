import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Box,
  Text,
} from "@sparrowengg/twigs-react";

export default function AccordionDefaultValue() {
  return (
    <Box css={{ marginBottom: "$4"}}>
    <Text size="sm" weight="regular" css={{ marginBottom: "$4" }}>Accordion with default value</Text>
    <Accordion type="single" defaultValue="item-2">
      <AccordionItem value="item-1">
        <AccordionTrigger>Getting Started</AccordionTrigger>
        <AccordionContent>
          Learn the basics of our platform and how to get started with your
          first project.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Advanced Features</AccordionTrigger>
        <AccordionContent>
          Discover advanced features and capabilities to enhance your workflow
          and productivity.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Troubleshooting</AccordionTrigger>
        <AccordionContent>
          Find solutions to common issues and learn how to resolve technical
          problems.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </Box>
  );
}