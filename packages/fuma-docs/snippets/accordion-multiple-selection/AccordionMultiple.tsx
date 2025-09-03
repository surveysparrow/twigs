import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Box,
  Text,
} from "@sparrowengg/twigs-react";

export default function AccordionMultiple() {
  return (
    <Box css={{ marginBottom: "$4"}}>
    <Text size="md" weight="regular">Accordion with multiple selection</Text>
    <Accordion type="multiple">
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
    </Box>
  );
}