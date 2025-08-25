import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@sparrowengg/twigs-react";

export default function AccordionMultipleSnippet() {
  return (
    <Accordion type="multiple" defaultValue={["item-1", "item-3"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Account Settings</AccordionTrigger>
        <AccordionContent>
          Manage your account settings including email, password, and security
          preferences.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Notification Preferences</AccordionTrigger>
        <AccordionContent>
          Configure how you receive notifications via email, SMS, and push
          notifications.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Privacy & Security</AccordionTrigger>
        <AccordionContent>
          Control your privacy settings and manage data sharing preferences.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
