# Welcome to twigs ⚡️

In house component library for [SurveySparrow](https://surveysparrow.com).

## Features

1. Themeable
2. Customisable
3. Fully accessible

## Installation

```
npm i @sparrowengg/twigs-react;

yarn add @sparrowengg/twigs-react;
```

## Usage

```
import { Box, Avatar, AvatarImage, AvatarFallback } from '@sparrowengg/twigs-react';

<Box css={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
  <Avatar size="lg">
     <AvatarImage
       src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
       alt="John Doe"
      />
     <AvatarFallback delayMs={600}>JD</AvatarFallback>
   </Avatar>
</Box>
```