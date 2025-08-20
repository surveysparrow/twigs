import React from "react";
import { 
    Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger 
  } from "@sparrowengg/twigs-react";

const AccordionTriggerComponent = AccordionTrigger as any;
const AccordionContentComponent = AccordionContent as any;

export default function AccordionSizesSnippet() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Small Size (sm)</h3>
        <Accordion type="single" size="sm">
          <AccordionItem value="item-1">
            <AccordionTriggerComponent>Small accordion item</AccordionTriggerComponent>
            <AccordionContentComponent>
              This is a small sized accordion with compact spacing.
            </AccordionContentComponent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTriggerComponent>Another small item</AccordionTriggerComponent>
            <AccordionContentComponent>
              Perfect for dense layouts where space is at a premium.
            </AccordionContentComponent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Medium Size (md)</h3>
        <Accordion type="single" size="md">
          <AccordionItem value="item-1">
            <AccordionTriggerComponent>Medium accordion item</AccordionTriggerComponent>
            <AccordionContentComponent>
              This is a medium sized accordion with more generous spacing.
            </AccordionContentComponent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTriggerComponent>Another medium item</AccordionTriggerComponent>
            <AccordionContentComponent>
              Great for general use cases where readability is important.
            </AccordionContentComponent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}