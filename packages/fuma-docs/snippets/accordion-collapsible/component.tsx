import React from "react";
import { 
    Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger 
  } from "@sparrowengg/twigs-react";

const AccordionTriggerComponent = AccordionTrigger as any;
const AccordionContentComponent = AccordionContent as any;

export default function AccordionCollapsibleSnippet() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTriggerComponent>What is collapsible?</AccordionTriggerComponent>
        <AccordionContentComponent>
          With collapsible enabled, you can click the same trigger again to close the opened content.
        </AccordionContentComponent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTriggerComponent>How to use it?</AccordionTriggerComponent>
        <AccordionContentComponent>
          Simply set the collapsible prop to true on the Accordion component.
        </AccordionContentComponent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTriggerComponent>When is it useful?</AccordionTriggerComponent>
        <AccordionContentComponent>
          This is useful when users might want to completely collapse all sections.
        </AccordionContentComponent>
      </AccordionItem>
    </Accordion>
  );
}