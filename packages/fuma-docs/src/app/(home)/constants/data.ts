// Redeemers component data
export const REDEEMERS_USERS = [
  {
    id: 1,
    name: "Abigail Fisher",
    department: "Marketing",
    avatar: "https://i.pravatar.cc/150?img=30",
    points: 3050,
  },
  {
    id: 2,
    name: "Benedict Cumberbatch",
    department: "Sales",
    avatar: "https://i.pravatar.cc/150?img=31",
    points: 2500,
  },
  {
    id: 3,
    name: "Charlie Chaplin",
    department: "Engineering",
    avatar: "https://i.pravatar.cc/150?img=32",
    points: 2000,
  },
  {
    id: 4,
    name: "Diana Prince",
    department: "Customer Success",
    avatar: "https://i.pravatar.cc/150?img=33",
    points: 1500,
  },
  {
    id: 5,
    name: "Ethan Hunt",
    department: "Post Sales",
    avatar: "https://i.pravatar.cc/150?img=4",
    points: 1000,
  },
  {
    id: 6,
    name: "Fiona Green",
    department: "Pre Sales",
    avatar: "https://i.pravatar.cc/150?img=49",
    points: 3500,
  },
  {
    id: 7,
    name: "Karan Patel",
    department: "Marketing",
    avatar: "https://i.pravatar.cc/150?img=56",
    points: 3000,
  },
] as const;

// Accounts component data
export const ACCOUNTS_USERS = [
  {
    id: 1,
    name: "Unable to Save Customer Response",
    priority: "High",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?img=0",
  },
  {
    id: 2,
    name: "Error Encountered While Accessing Surveys from Yesterday",
    priority: "Medium",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?img=1",
    team: "Customer Success",
    assignee: "Harry Potter",
  },
  {
    id: 3,
    name: "November Customer Experience Survey",
    priority: "High",
    status: "Completed",
    avatar: "https://i.pravatar.cc/150?img=2",
    team: "Post Sales",
    assignee: "Jane Smith",
  },
  {
    id: 4,
    name: "Slack share on Customer Satisfaction Surveys",
    priority: "Low",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?img=3",
    team: "Customer Success",
    assignee: "Alice Brown",
  },
  {
    id: 5,
    name: "Unable to Save Customer Response",
    priority: "Medium",
    status: "Completed",
    avatar: "https://i.pravatar.cc/150?img=4",
    team: "Customer Success",
    assignee: "Alice Brown",
  },
  {
    id: 6,
    name: "November Customer Experience Survey",
    priority: "Low",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 7,
    name: "Always Facing Trouble in Payment Section",
    priority: "High",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?img=5",
    team: "Customer Success",
    assignee: "Hermione Granger",
  },
  {
    id: 8,
    name: "Unable to Save Customer Response",
    priority: "Medium",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?img=8",
    team: "Customer Success",
    assignee: "Harry Potter",
  },
  {
    id: 9,
    name: "Always Facing Trouble in Payment Section",
    priority: "Medium",
    status: "Pending",
    avatar: "https://i.pravatar.cc/150?img=9",
    team: "Customer Success",
    assignee: "Harry Potter",
  },
] as const;

// Conversation component messages
export const CONVERSATION_MESSAGES = [
  {
    id: 1,
    sender: "Cristofer Franci",
    avatar: "https://i.pravatar.cc/150?img=32",
    content: "self assigned the issue",
    time: "Just now",
    isSystem: true,
    isAgent: true,
  },
  {
    id: 2,
    sender: "Cristofer Franci",
    avatar: "https://i.pravatar.cc/150?img=32",
    content:
      "We apologise for any inconvenience you've experienced with our payment system. We understand the importance of a smooth transaction process.",
    time: "Just now",
    isAgent: true,
  },
  {
    id: 3,
    sender: "Cristofer Franci",
    avatar: "https://i.pravatar.cc/150?img=32",
    content:
      "We apologise for any inconvenience you've experienced with our payment system. We understand the importance of a smooth transaction process.",
    time: "Just now",
    isAgent: true,
    isHighlighted: true,
  },
  {
    id: 4,
    sender: "Alfonso Culhane",
    avatar: "https://i.pravatar.cc/150?img=12",
    content:
      "I've attempted to on both Google Chrome and Mozilla Firefox, but the issue persists. Any guidance on resolving this would be greatly appreciated.",
    time: "Just now",
    isAgent: false,
  },
  {
    id: 5,
    sender: "Cristofer Franci",
    avatar: "https://i.pravatar.cc/150?img=32",
    content:
      'Thank you for providing more details. We apologize for the inconvenience you\'re facing. The "Error 500: Internal Server Error" indicates a problem on our server side. Our technical team is investigating this issue.',
    time: "Just now",
    isAgent: true,
  },
  {
    id: 6,
    sender: "Alfonso Culhane",
    avatar: "https://i.pravatar.cc/150?img=12",
    content:
      "Thank you for the suggestion. I've cleared my browser cache and cookies, and I've also tried the incognito mode, but unfortunately, the problem persists",
    time: "Just now",
    isAgent: true,
  },
] as const;

// EmailAgent options
export const EMAIL_AGENT_OPTIONS = [
  { value: "SurveySparrow Support Squad", label: "SurveySparrow Support Squad" },
  { value: "SurveySparrow Marketing Squad", label: "SurveySparrow Marketing Squad" },
] as const;

// Features configuration
export const FEATURES_CONFIG = {
  CYCLE_DURATION: 9000, // 9 seconds per tab
  UPDATE_INTERVAL: 30, // Update every 30ms for smooth animation
  FEATURES: [
    { id: "accessible" },
    { id: "extensible" },
    { id: "themeable" },
  ] as const,
};

// Footer links
export const FOOTER_DOCUMENTATION_LINKS = [
  { label: "Getting Started", href: "/docs/getting-started" },
  { label: "Theming", href: "/docs/getting-started/theming" },
  { label: "Frameworks", href: "/docs/getting-started/nextjs" },
  { label: "Icons", href: "/docs/icons" },
] as const;

export const FOOTER_COMPONENT_LINKS = [
  { label: "Accordion", href: "/docs/components/accordion" },
  { label: "Hover card", href: "/docs/components/hover-card" },
  { label: "Calendar", href: "/docs/components/calendar" },
] as const;

export const FOOTER_OTHER_LINKS = [
  { label: "Editor", href: "/docs/editor" },
  { label: "Extensions", href: "/docs/tools" },
  { label: "Upgrade guide", href: "/docs/tools/upgrade-guide" },
] as const;

// Settings Select options
export const SETTINGS_LANGUAGE_OPTIONS = [
  { label: "English", value: "english" },
  { label: "Hindi", value: "hindi" },
  { label: "Marathi", value: "marathi" },
] as const;

export const SETTINGS_TIMEZONE_OPTIONS = [
  { label: "India", value: "india" },
  { label: "USA", value: "usa" },
  { label: "UK", value: "uk" },
] as const;

export const SETTINGS_CURRENCY_OPTIONS = [
  { label: "INR", value: "inr" },
  { label: "USD", value: "usd" },
  { label: "GBP", value: "gbp" },
] as const;

export const SETTINGS_DATE_FORMAT_OPTIONS = [
  { label: "DD/MM/YYYY", value: "dd/mm/yyyy" },
  { label: "MM/DD/YYYY", value: "mm/dd/yyyy" },
  { label: "YYYY/MM/DD", value: "yyyy/mm/dd" },
] as const;