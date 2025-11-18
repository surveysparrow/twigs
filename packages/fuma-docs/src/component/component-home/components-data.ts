export type ComponentItem = {
  title: string;
  description: string;
  href: string;
  category: string;
};

export const components: ComponentItem[] = [
  // Data Display
  {
    title: "Accordion",
    description:
      "Display content in a collapsible section. Perfect for showing and hiding content.",
    href: "/docs/components/accordion",
    category: "Data Display",
  },
  {
    title: "Avatar",
    description:
      "Represent user profile picture or initials. Supports images, fallbacks, and different sizes for user interfaces.",
    href: "/docs/components/avatar",
    category: "Data Display",
  },
  {
    title: "Chip",
    description:
      "Categorize or label content. Perfect for tags, filters, and status indicators",
    href: "/docs/components/chip",
    category: "Data Display",
  },
  {
    title: "Image",
    description:
      "Component for handling images wrapped around the HTML img element.",
    href: "/docs/components/image",
    category: "Data Display",
  },
  {
    title: "Table",
    description:
      "Display data in a tabular format with configurable border styles.",
    href: "/docs/components/table",
    category: "Data Display",
  },

  // Overlay
  {
    title: "Alert Dialog",
    description:
      "For displaying a alert dialog prompt. Perfect for displaying important information to the user.",
    href: "/docs/components/alert-dialog",
    category: "Overlay",
  },
  {
    title: "Dialog",
    description:
      "Display of a modal component for confirmations, forms, and important user interactions.",
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
      "Render content that slides in from the side of the screen. Perfect for navigation menus and secondary content.",
    href: "/docs/components/drawer",
    category: "Overlay",
  },
  {
    title: "Dropdown",
    description:
      "Create an accessible dropdown menu. Perfect for action menus, user profiles, and contextual options.",
    href: "/docs/components/dropdown",
    category: "Overlay",
  },
  {
    title: "Hover Card",
    description:
      "Display content when hovering over an element. Rich hover interactions with complex content and media.",
    href: "/docs/components/hover-card",
    category: "Overlay",
  },
  {
    title: "Popover",
    description:
      "Show detailed information inside a pop-up. Perfect for additional context and interactive content.",
    href: "/docs/components/popover",
    category: "Overlay",
  },
  {
    title: "Tooltip",
    description:
      "Display additional information when a user hovers over an element. Provides contextual help and descriptions.",
    href: "/docs/components/tooltip",
    category: "Overlay",
  },

  // Feedback
  {
    title: "Alert",
    description:
      "Communicate a state that affects a system, feature or page. Provides contextual feedback to users.",
    href: "/docs/components/alert",
    category: "Feedback",
  },
  {
    title: "Toast",
    description:
      "Display a temporary message to the user. Perfect for notifications, confirmations, and status updates.",
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
      "Manage flex layouts. Provides easy-to-use flexbox properties for responsive and flexible designs.",
    href: "/docs/components/flex",
    category: "Layout",
  },
  {
    title: "Grid",
    description:
      "Manage grid layouts. CSS Grid component for complex two-dimensional layouts and responsive designs.",
    href: "/docs/components/grid",
    category: "Layout",
  },
  {
    title: "Stack",
    description:
      "Layout its children in a vertical or horizontal stack. Perfect for organizing content with consistent spacing.",
    href: "/docs/components/stack",
    category: "Layout",
  },

  // Form
  {
    title: "Button",
    description:
      "Trigger an action or event. Supports multiple variants, sizes, and states for different use cases.",
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
    title: "Cascader",
    description:
      "Select values from hierarchical nested options. Perfect for location selection, category browsing, and multi-level data selection.",
    href: "/docs/components/cascader",
    category: "Form",
  },
  {
    title: "Checkbox",
    description:
      "Select multiple values from several options. Supports indeterminate state.",
    href: "/docs/components/checkbox",
    category: "Form",
  },
  {
    title: "Form Helper Text",
    description:
      "Provide additional context and instructions for form fields. Supports error and info states.",
    href: "/docs/components/form-helper-text",
    category: "Form",
  },
  {
    title: "Form Label",
    description:
      "Add labels to form fields. Supports required indicators, tooltips, and accessibility features.",
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
      "Get user input in a text field. Supports various types, validation, and accessibility features.",
    href: "/docs/components/input",
    category: "Form",
  },
  {
    title: "Radio",
    description:
      "Select one option from several options. Perfect for single-choice selections in forms and surveys.",
    href: "/docs/components/radio",
    category: "Form",
  },
  {
    title: "Select",
    description:
      "Pick a value from predefined options. Supports single and multi-select with search functionality.",
    href: "/docs/components/select",
    category: "Form",
  },
  {
    title: "Separator",
    description:
      "Visually separate content. Horizontal or vertical divider component for organizing interface sections.",
    href: "/docs/components/separator",
    category: "Form",
  },
  {
    title: "Slider",
    description:
      "Allow users to make selections from a range of values. Perfect for numeric inputs and settings.",
    href: "/docs/components/slider",
    category: "Form",
  },
  {
    title: "Switch",
    description:
      "Capture a binary state. Toggle switch component for on/off settings and preferences.",
    href: "/docs/components/switch",
    category: "Form",
  },
  {
    title: "Textarea",
    description:
      "Enter multiple lines of text. Perfect for comments, descriptions, and long-form content input.",
    href: "/docs/components/textarea",
    category: "Form",
  },

  // Date & Time
  {
    title: "Calendar Range",
    description:
      "Select a range of dates from a calendar interface. Supports date ranges, validation, and localization.",
    href: "/docs/components/calendar-range",
    category: "Date & Time",
  },
  {
    title: "Calendar",
    description:
      "Display a calendar interface. Supports date ranges, validation, and localization.",
    href: "/docs/components/calendar",
    category: "Date & Time",
  },
  {
    title: "DatePicker",
    description:
      "Select dates from a calendar interface. Supports date ranges, validation, and localization.",
    href: "/docs/components/datepicker",
    category: "Date & Time",
  },
  {
    title: "TimePicker",
    description:
      "Select time values with hour and minute precision. Supports 12/24 hour formats and validation.",
    href: "/docs/components/timepicker",
    category: "Date & Time",
  },

  // Typography
  {
    title: "Text",
    description:
      "Render text and paragraphs within an interface. Provides consistent typography with size and weight variants.",
    href: "/docs/components/text",
    category: "Typography",
  },
  {
    title: "Heading",
    description:
      "Render semantic HTML heading elements. Provides consistent heading styles with proper hierarchy and accessibility.",
    href: "/docs/components/heading",
    category: "Typography",
  },

  // Navigation
  {
    title: "Link",
    description:
      "Provide accessible navigation between pages. Supports internal and external links with proper styling.",
    href: "/docs/components/link",
    category: "Navigation",
  },
  {
    title: "Pagination",
    description:
      "Navigate through a series of pages. Provides numbered navigation for large datasets and content lists.",
    href: "/docs/components/pagination",
    category: "Navigation",
  },
  {
    title: "Stepper",
    description:
      "Indicate progress through a multi-step process. Perfect for wizards, forms, and guided workflows.",
    href: "/docs/components/stepper",
    category: "Navigation",
  },
  {
    title: "Tabs",
    description:
      "Display content in a tabbed interface. Organizes content into sections with easy navigation between them.",
    href: "/docs/components/tabs",
    category: "Navigation",
  },

  // Loader
  {
    title: "Circle Loader",
    description:
      "Provide a visual cue that an action is processing. Circular progress indicator for loading states.",
    href: "/docs/components/circle-loader",
    category: "Loader",
  },
  {
    title: "Line Loader",
    description:
      "Display progress status for a task. Linear progress indicator with customizable appearance and behavior.",
    href: "/docs/components/line-loader",
    category: "Loader",
  },
];

