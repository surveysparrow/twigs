import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@sparrowengg/twigs-react";
import { Box, Text } from "@sparrowengg/twigs-react";

export default function AccordionCollapsible() {
  return (
    <Box css={{ marginBottom: "$4"}}>
    <Text size="sm" weight="regular" css={{ marginBottom: "$4" }}>Accordion with collapsible prop</Text>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is collapsible?</AccordionTrigger>
        <AccordionContent>
          With collapsible enabled, you can click the same trigger again to
          close the opened content.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>How to use it?</AccordionTrigger>
        <AccordionContent>
          Simply set the collapsible prop to true on the Accordion component.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>When is it useful?</AccordionTrigger>
        <AccordionContent>
          This is useful when users might want to completely collapse all
          sections.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}