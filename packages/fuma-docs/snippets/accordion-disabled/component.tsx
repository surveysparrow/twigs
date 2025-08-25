import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@sparrowengg/twigs-react";

export default function AccordionDisabledSnippet() {
  return (
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>Available Feature</AccordionTrigger>
        <AccordionContent>
          This feature is available and can be accessed by all users.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Coming Soon</AccordionTrigger>
        <AccordionContent>
          This feature is currently under development and will be available
          soon.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Beta Feature</AccordionTrigger>
        <AccordionContent>
          This feature is in beta testing and available for selected users.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
