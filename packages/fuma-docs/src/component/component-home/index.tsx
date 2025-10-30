"use client";
import React from "react";
import { Box, Grid, Text, Flex } from "@sparrowengg/twigs-react";
import { ForwardArrowIcon } from "@sparrowengg/twigs-react-icons";
import { useRouter } from "next/navigation";

const components = [
  // Data Display
  {
    title: "Accordion",
    description:
      "Used to display content in a collapsible section. Perfect for showing and hiding content with smooth animations.",
    href: "/docs/components/accordion",
    category: "Data Display"
  },
  {
    title: "Avatar",
    description:
      "Used to represent user profile picture or initials. Supports images, fallbacks, and different sizes for user interfaces.",
    href: "/docs/components/avatar",
    category: "Data Display",
  },
  {
    title: "Chip",
    description:
      "Used for categorizing or labeling content. Perfect for tags, filters, and status indicators in modern interfaces.",
    href: "/docs/components/chip",
    category: "Data Display",
  },
  {
    title: "Image",
    description:
      "Used to display images with proper loading states, error handling, and responsive behavior across devices.",
    href: "/docs/components/image",
    category: "Data Display",
  },
  {
    title: "Table",
    description:
      "Used to display data in a tabular format. Supports sorting, filtering, and responsive design for complex data sets.",
    href: "/docs/components/table",
    category: "Data Display",
  },

  // Overlay
  {
    title: "Alert Dialog",
    description:
      "Used to display a alert dialog prompt. Perfect for displaying important information to the user.",
    href: "/docs/components/alert-dialog",
    category: "Overlay",
  },
  {
    title: "Dialog",
    description:
      "Used to display a dialog prompt. Modal component for confirmations, forms, and important user interactions.",
    href: "/docs/components/dialog",
    category: "Overlay",
  },
  {
    title: "Dialogs Manager",
    description:
      "Used for programmatically controlling multiple dialogs. Manages dialog state and provides easy API for complex workflows.",
    href: "/docs/components/dialogs-manager",
    category: "Overlay",
  },
  {
    title: "Drawer",
    description:
      "Used to render content that slides in from the side of the screen. Perfect for navigation menus and secondary content.",
    href: "/docs/components/drawer",
    category: "Overlay",
  },
  {
    title: "Dropdown",
    description:
      "Used to create an accessible dropdown menu. Perfect for action menus, user profiles, and contextual options.",
    href: "/docs/components/dropdown",
    category: "Overlay",
  },
  {
    title: "Hover Card",
    description:
      "Used to display content when hovering over an element. Rich hover interactions with complex content and media.",
    href: "/docs/components/hover-card",
    category: "Overlay",
  },
  {
    title: "Popover",
    description:
      "Used to show detailed information inside a pop-up. Perfect for additional context, forms, and interactive content.",
    href: "/docs/components/popover",
    category: "Overlay",
  },
  {
    title: "Tooltip",
    description:
      "Used to display additional information when a user hovers over an element. Provides contextual help and descriptions.",
    href: "/docs/components/tooltip",
    category: "Overlay",
  },

  // Feedback
  {
    title: "Alert",
    description:
      "Used to communicate a state that affects a system, feature or page. Provides contextual feedback to users.",
    href: "/docs/components/alert",
    category: "Feedback",
  },
  {
    title: "Toast",
    description:
      "Used to display a temporary message to the user. Perfect for notifications, confirmations, and status updates.",
    href: "/docs/components/toast",
    category: "Feedback",
  },

  // Layout
  {
    title: "Box",
    description:
      "The most abstract styling component on top of which all other components are built. Provides flexible layout capabilities.",
    href: "/docs/components/box",
    category: "Layout",
  },
  {
    title: "Flex",
    description:
      "Used to manage flex layouts. Provides easy-to-use flexbox properties for responsive and flexible designs.",
    href: "/docs/components/flex",
    category: "Layout",
  },
  {
    title: "Grid",
    description:
      "Used to manage grid layouts. CSS Grid component for complex two-dimensional layouts and responsive designs.",
    href: "/docs/components/grid",
    category: "Layout",
  },
  {
    title: "Stack",
    description:
      "Used to layout its children in a vertical or horizontal stack. Perfect for organizing content with consistent spacing.",
    href: "/docs/components/stack",
    category: "Layout",
  },

  // Form
  {
    title: "Button",
    description:
      "Used to trigger an action or event. Supports multiple variants, sizes, and states for different use cases.",
    href: "/docs/components/button",
    category: "Form",
  },
  {
    title: "Icon Button",
    description:
      "A button that contains only an icon. Perfect for toolbar actions, close buttons, and compact interfaces.",
    href: "/docs/components/icon-button",
    category: "Form",
  },
  {
    title: "Split Button",
    description:
      "A button with a dropdown menu attached. Combines primary action with secondary options in one component.",
    href: "/docs/components/split-button",
    category: "Form",
  },
  {
    title: "Checkbox",
    description:
      "Used in forms when a user needs to select multiple values from several options. Supports indeterminate state.",
    href: "/docs/components/checkbox",
    category: "Form",
  },
  {
    title: "Form Helper Text",
    description:
      "Used to provide additional context and instructions for form fields. Supports error and info states.",
    href: "/docs/components/form-helper-text",
    category: "Form",
  },
  {
    title: "Form Label",
    description:
      "Used to add labels to form fields. Supports required indicators, tooltips, and accessibility features.",
    href: "/docs/components/form-label",
    category: "Form",
  },
  {
    title: "Form Input",
    description:
      "Enhanced input component with label, helper text, and error states. Perfect for complex form layouts.",
    href: "/docs/components/form-input",
    category: "Form",
  },
  {
    title: "Input",
    description:
      "Used to get user input in a text field. Supports various types, validation, and accessibility features.",
    href: "/docs/components/input",
    category: "Form",
  },
  {
    title: "Radio",
    description:
      "Used to select one option from several options. Perfect for single-choice selections in forms and surveys.",
    href: "/docs/components/radio",
    category: "Form",
  },
  {
    title: "Select",
    description:
      "Used to pick a value from predefined options. Supports single and multi-select with search functionality.",
    href: "/docs/components/select",
    category: "Form",
  },
  {
    title: "Seperator",
    description:
      "Used to visually separate content. Horizontal or vertical divider component for organizing interface sections.",
    href: "/docs/components/separator",
    category: "Form",
  },
  {
    title: "Slider",
    description:
      "Used to allow users to make selections from a range of values. Perfect for numeric inputs and settings.",
    href: "/docs/components/slider",
    category: "Form",
  },
  {
    title: "Switch",
    description:
      "Used to capture a binary state. Toggle switch component for on/off settings and preferences.",
    href: "/docs/components/switch",
    category: "Form",
  },
  {
    title: "Textarea",
    description:
      "Used to enter multiple lines of text. Perfect for comments, descriptions, and long-form content input.",
    href: "/docs/components/textarea",
    category: "Form",
  },

  // Date & Time
  {
    title: "Calendar Range",
    description:
      "Used to select a range of dates from a calendar interface. Supports date ranges, validation, and localization.",
    href: "/docs/components/calendar-range",
    category: "Date & Time",
  },
  {
    title: "Calendar",
    description:
      "Used to display a calendar interface. Supports date ranges, validation, and localization.",
    href: "/docs/components/calendar",
    category: "Date & Time",
  },
  {
    title: "DatePicker",
    description:
      "Used to select dates from a calendar interface. Supports date ranges, validation, and localization.",
    href: "/docs/components/datepicker",
    category: "Date & Time",
  },
  {
    title: "TimePicker",
    description:
      "Used to select time values with hour and minute precision. Supports 12/24 hour formats and validation.",
    href: "/docs/components/timepicker",
    category: "Date & Time",
  },

  // Typography
  {
    title: "Text",
    description:
      "Used to render text and paragraphs within an interface. Provides consistent typography with size and weight variants.",
    href: "/docs/components/text",
    category: "Typography",
  },
  {
    title: "Heading",
    description:
      "Used to render semantic HTML heading elements. Provides consistent heading styles with proper hierarchy and accessibility.",
    href: "/docs/components/heading",
    category: "Typography",
  },

  // Navigation
  {
    title: "Link",
    description:
      "Used to provide accessible navigation between pages. Supports internal and external links with proper styling.",
    href: "/docs/components/link",
    category: "Navigation",
  },
  {
    title: "Pagination",
    description:
      "Used to navigate through a series of pages. Provides numbered navigation for large datasets and content lists.",
    href: "/docs/components/pagination",
    category: "Navigation",
  },
  {
    title: "Stepper",
    description:
      "Used to indicate progress through a multi-step process. Perfect for wizards, forms, and guided workflows.",
    href: "/docs/components/stepper",
    category: "Navigation",
  },
  {
    title: "Tabs",
    description:
      "Used to display content in a tabbed interface. Organizes content into sections with easy navigation between them.",
    href: "/docs/components/tabs",
    category: "Navigation",
  },

  // Loader
  {
    title: "Circle Loader",
    description:
      "Used to provide a visual cue that an action is processing. Circular progress indicator for loading states.",
    href: "/docs/components/circle-loader",
    category: "Loader",
  },
  {
    title: "Line Loader",
    description:
      "Used to display progress status for a task. Linear progress indicator with customizable appearance and behavior.",
    href: "/docs/components/line-loader",
    category: "Loader",
  },
];

export function ComponentHome() {
  const router = useRouter();
  return (
    <Box>
      {Object.entries(
        components.reduce((acc, component) => {
          if (!acc[component.category]) {
            acc[component.category] = [];
          }
          acc[component.category].push(component);
          return acc;
        }, {} as Record<string, typeof components>)
      ).map(([category, categoryComponents]) => (
        <Box key={category} className="mb-5 pb-5 border-b border-fd-border">
          <Text size="md" css={{ marginBottom: "$6" }}>
            {category}
          </Text>
          <Grid
            css={{
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "$4",
              marginBottom: "$8",
            }}
          >
            {categoryComponents.map((component) => (
              <Box
                key={component.title}
                onClick={() => {
                  router.push(component.href);
                }}
              >
                <Box
                  className="border-1 border-fd-border hover:border-fd-primary/50 rounded-lg p-1 cursor-pointer"
                >
                  <Flex flexDirection="column" gap="$1">
                    <Box className="flex justify-between items-center">
                      <Text size="md" className="!m-0 !p-2 !text-fd-primary">
                        {component.title}
                      </Text>
                      <ForwardArrowIcon
                        className="text-fd-muted-foreground mr-2"
                        size={20}
                      />
                    </Box>
                    <Box className="p-2 bg-fd-secondary rounded-lg !m-0">
                      <Text size="sm" className="!text-fd-muted-foreground">
                        {component.description}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
