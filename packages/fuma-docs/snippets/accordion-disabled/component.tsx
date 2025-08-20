import React from "react";
import { 
    Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger 
  } from "@sparrowengg/twigs-react";

const AccordionTriggerComponent = AccordionTrigger as any;
const AccordionContentComponent = AccordionContent as any;

export default function AccordionDisabledSnippet() {
  return (
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionTriggerComponent>Available Feature</AccordionTriggerComponent>
        <AccordionContentComponent>
          This feature is available and can be accessed by all users.
        </AccordionContentComponent>
      </AccordionItem>

      <AccordionItem value="item-2" disabled>
        <AccordionTriggerComponent>Coming Soon</AccordionTriggerComponent>
        <AccordionContentComponent>
          This feature is currently under development and will be available soon.
        </AccordionContentComponent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTriggerComponent>Beta Feature</AccordionTriggerComponent>
        <AccordionContentComponent>
          This feature is in beta testing and available for selected users.
        </AccordionContentComponent>
      </AccordionItem>
    </Accordion>
  );
}