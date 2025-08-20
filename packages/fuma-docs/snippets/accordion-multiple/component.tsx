import React from "react";
import { 
    Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger 
  } from "@sparrowengg/twigs-react";

const AccordionTriggerComponent = AccordionTrigger as any;
const AccordionContentComponent = AccordionContent as any;

export default function AccordionMultipleSnippet() {
  return (
    <Accordion type="multiple" defaultValue={["item-1", "item-3"]}>
      <AccordionItem value="item-1">
        <AccordionTriggerComponent>Account Settings</AccordionTriggerComponent>
        <AccordionContentComponent>
          Manage your account settings including email, password, and security preferences.
        </AccordionContentComponent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTriggerComponent>Notification Preferences</AccordionTriggerComponent>
        <AccordionContentComponent>
          Configure how you receive notifications via email, SMS, and push notifications.
        </AccordionContentComponent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTriggerComponent>Privacy & Security</AccordionTriggerComponent>
        <AccordionContentComponent>
          Control your privacy settings and manage data sharing preferences.
        </AccordionContentComponent>
      </AccordionItem>
    </Accordion>
  );
}