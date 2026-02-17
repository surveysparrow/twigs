import React from "react";
import { Heading, Button, Flex, Text } from "@sparrowengg/twigs-react";

export default function GettingStarted() {
  return (
    <Flex 
      flexDirection="column" 
      alignItems="center" 
      css={{ 
        padding: '$16', 
        gap: '$8',
        textAlign: 'center'
      }}
    >
      <Heading size="h1" css={{ color: '$primary500' }}>
        Hello, Developer 😍!
      </Heading>
      <Text size="lg" css={{ color: '$secondary600', maxWidth: '410px' }}>
        Twigs is a composable component system that 
        helps you build modern web apps faster.
      </Text>
      <Button color="primary" size="lg">
        Get Started Now
      </Button>
    </Flex>
  );
}