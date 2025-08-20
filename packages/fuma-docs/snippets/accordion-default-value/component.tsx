import React from "react";
import { 
    Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger 
  } from "@sparrowengg/twigs-react";

const AccordionTriggerComponent = AccordionTrigger as any;
const AccordionContentComponent = AccordionContent as any;

export default function AccordionDefaultValueSnippet() {
  return (
    <Accordion type="single" defaultValue="item-2">
      <AccordionItem value="item-1">
        <AccordionTriggerComponent>Getting Started</AccordionTriggerComponent>
        <AccordionContentComponent>
          Learn the basics of our platform and how to get started with your first project.
        </AccordionContentComponent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTriggerComponent>Advanced Features</AccordionTriggerComponent>
        <AccordionContentComponent>
          Discover advanced features and capabilities to enhance your workflow and productivity.
        </AccordionContentComponent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTriggerComponent>Troubleshooting</AccordionTriggerComponent>
        <AccordionContentComponent>
          Find solutions to common issues and learn how to resolve technical problems.
        </AccordionContentComponent>
      </AccordionItem>
    </Accordion>
  );
}