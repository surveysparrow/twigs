import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Chip,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  Slider,
} from "@sparrowengg/twigs-react";
import React, { memo } from "react";
import {
  PageIcon,
  UnorderedListIcon,
  DocumentClipIcon,
  UserCirclePlusIcon,
  HomeIcon,
  ColorSwatchesIcon,
  LinkIcon,
  UserIcon,
  RocketIcon,
  SearchIcon,
  CalendarIcon,
  FilterIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@sparrowengg/twigs-react-icons";
import logo from "@/assets/images/Group 1694.png";
import { DashboardSliderComponents } from "../shared";

// Shared styles moved outside component
const sidebarMenuItemStyles = {
  cursor: "pointer",
  padding: "$4",
  borderRadius: "$lg",
  "&:hover": {
    backgroundColor: "$neutral50",
  },
};

const sidebarActiveMenuItemStyles = {
  cursor: "pointer",
  padding: "$4",
  borderRadius: "$lg",
  backgroundColor: "$neutral50",
};

const campaignCardContainerStyles = {
  width: "35%",
  "@media (max-width: 768px)": {
    width: "100%",
  },
};

const campaignCardStyles = {
  padding: "$6",
  borderRadius: "$lg",
  border: "1px solid $neutral200",
};

// Static data moved outside component
const FAVOURITE_ITEMS = [
  { icon: PageIcon, label: "Technical Docs" },
  { icon: PageIcon, label: "Campaign Guidelines" },
  { icon: DocumentClipIcon, label: "Important Rules" },
  { icon: UserCirclePlusIcon, label: "Onboarding" },
] as const;

const MAIN_MENU_ITEMS = [
  { icon: HomeIcon, label: "Dashboard", active: false },
  { icon: ColorSwatchesIcon, label: "Campaigns", active: true },
  { icon: LinkIcon, label: "Chat", active: false },
  { icon: UserIcon, label: "Support Center", active: false },
] as const;

const CAMPAIGNS_DATA = [
  {
    status: "Draft",
    count: "2",
    title: "10 simple steps to revolutionize workflows with our product",
    avatars: ["0", "1", "2"],
    startLabel: "Start :",
    startValue: "Not started",
    endLabel: null,
    endValue: null,
    progress: 0,
    lastUpdated: "Oct 16, 2025",
    agenda: "product features analysis",
  },
  {
    status: "In Progress",
    count: "2",
    title: "Boost your performance: start using our amazing product",
    avatars: ["7"],
    startLabel: "Start :",
    startValue: "June 1, 2025",
    endLabel: "End :",
    endValue: "Oct 16, 2025",
    progress: 40,
    lastUpdated: "Oct 16, 2025",
    agenda: "Marketing campaign analysis",
  },
  {
    status: "Archived",
    count: "1",
    title: "The power of our product: a new era in SaaS",
    avatars: ["0", "1", "2", "3"],
    startLabel: "Ended :",
    startValue: "Jun 16, 2025",
    endLabel: null,
    endValue: null,
    progress: 0,
    lastUpdated: "Oct 16, 2025",
    agenda: "SaaS product features analysis and implementation planning",
  },
] as const;

// Memoized sidebar menu item
interface SidebarMenuItemProps {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  label: string;
  active?: boolean;
}

const SidebarMenuItem = memo(function SidebarMenuItem({
  icon: Icon,
  label,
  active = false,
}: SidebarMenuItemProps) {
  return (
    <Flex
      alignItems="center"
      gap="$4"
      css={active ? sidebarActiveMenuItemStyles : sidebarMenuItemStyles}
    >
      <Icon size={20} strokeWidth={1.2} />
      <Text>{label}</Text>
    </Flex>
  );
});

// Memoized stat card component
interface StatCardProps {
  title: string;
  value: string;
  change: number;
  isPositive: boolean;
  chipLabel: string;
  chipColor: "accent" | "warning";
  gradient: string;
  hasBorderRight?: boolean;
}

const StatCard = memo(function StatCard({
  title,
  value,
  change,
  isPositive,
  chipLabel,
  chipColor,
  gradient,
  hasBorderRight = true,
}: StatCardProps) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      css={{
        height: "130px",
        padding: "$10",
        width: "35%",
        borderRight: hasBorderRight ? "1px solid $neutral200" : "none",
        background: gradient,
        "@media (max-width: 768px)": {
          borderBottom: hasBorderRight ? "1px solid $neutral200" : "none",
          borderRight: "none",
          width: "100%",
        },
      }}
    >
      <Text size="md" weight="medium">
        {title}
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flexDirection="column">
          <Flex alignItems="center" gap="$2">
            <Text size="lg" weight="bold">
              {value}
            </Text>
            <Box
              css={{
                backgroundColor: isPositive ? "$primary50" : "$warning50",
                borderRadius: "$round",
                color: isPositive ? "$primary500" : "$warning500",
                padding: "$2",
              }}
            >
              {isPositive ? (
                <ArrowUpIcon size={10} strokeWidth={1.2} />
              ) : (
                <ArrowDownIcon size={10} strokeWidth={1.2} />
              )}
            </Box>
            <Text
              size="sm"
              weight="medium"
              css={{
                color: isPositive ? "$primary500" : "$warning500",
              }}
            >
              {change}%
            </Text>
          </Flex>
          <Flex>
            <Text css={{ color: "$neutral600" }}>compared to last week</Text>
          </Flex>
        </Flex>
        <Flex>
          <Chip color={chipColor} size="lg">
            {chipLabel}
          </Chip>
        </Flex>
      </Flex>
    </Flex>
  );
});

// Memoized campaign card component
interface CampaignCardProps {
  status: string;
  count: string;
  title: string;
  avatars: readonly string[];
  startLabel: string | null;
  startValue: string | null;
  endLabel: string | null;
  endValue: string | null;
  progress: number;
  lastUpdated: string;
  agenda: string;
}

const CampaignCard = memo(function CampaignCard({
  status,
  count,
  title,
  avatars,
  startLabel,
  startValue,
  endLabel,
  endValue,
  progress,
  lastUpdated,
  agenda,
}: CampaignCardProps) {
  return (
    <Box css={campaignCardContainerStyles}>
      <Flex gap="$4" css={{ marginBottom: "$4" }}>
        <Text size="sm" css={{ color: "$neutral600" }}>
          {status}
        </Text>
        <Text
          size="xs"
          weight="bold"
          css={{
            color: "$neutral700",
            borderRadius: "$sm",
            padding: "$1",
            paddingLeft: "$3",
            paddingRight: "$3",
            backgroundColor: "$neutral50",
          }}
        >
          {count}
        </Text>
      </Flex>
      <Flex flexDirection="column" gap="$4" css={campaignCardStyles}>
        <Flex justifyContent="space-between" alignItems="center" css={{ width: "100%" }}>
          <Box>
            <Image
              src={logo.src}
              alt="logo"
              width={15}
              height={15}
              css={{ borderRadius: "$sm" }}
            />
          </Box>
          <Box>
            <AvatarGroup limit={3} rounded="full" size="sm">
              {avatars.map((imgId, index) => (
                <Avatar
                  key={index}
                  src={`https://i.pravatar.cc/150?img=${imgId}`}
                />
              ))}
            </AvatarGroup>
          </Box>
        </Flex>
        <Text weight="medium">{title}</Text>
        {endLabel ? (
          <Flex alignItems="center" gap="$2" justifyContent="space-between">
            <Flex alignItems="center" gap="$2">
              <Text size="xs">{startLabel}</Text>
              <Text size="xs" css={{ color: "$neutral600" }}>
                {startValue}
              </Text>
            </Flex>
            <Flex alignItems="center" gap="$2">
              <Text size="xs">{endLabel}</Text>
              <Text size="xs" css={{ color: "$neutral600" }}>
                {endValue}
              </Text>
            </Flex>
          </Flex>
        ) : (
          <Flex alignItems="center" gap="$2">
            <Text size="xs">{startLabel}</Text>
            <Text size="xs" css={{ color: "$neutral600" }}>
              {startValue}
            </Text>
          </Flex>
        )}
        <Slider components={DashboardSliderComponents} value={[progress]} />
        <Flex alignItems="center" gap="$2">
          <Text size="xs" css={{ color: "$neutral600" }}>
            Last updated :
          </Text>
          <Text size="xs">{lastUpdated}</Text>
        </Flex>
        <Flex gap="$2">
          <Text size="xs" css={{ color: "$neutral600", textWrap: "nowrap" }}>
            Agenda :
          </Text>
          <Text size="xs">{agenda}</Text>
        </Flex>
      </Flex>
    </Box>
  );
});

export default function Dashboard() {
  return (
    <Flex
      css={{
        borderRadius: "$2xl",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        background:
          "linear-gradient(299deg, rgba(255, 255, 255, 1) 90%, $primary50 100%)",
        height: "734px",
        overflow: "scroll",
        "@media (max-width: 1024px)": {
          height: "100%",
        },
      }}
    >
      {/* Left Sidebar */}
      <Flex
        flexDirection="column"
        gap="$16"
        css={{
          padding: "$8",
          borderRight: "1px solid $neutral200",
          width: "260px",
          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Text>Dashboard</Text>
          <Box css={{ cursor: "pointer" }}>
            <UnorderedListIcon size={20} />
          </Box>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          css={{ height: "100%" }}
        >
          <Box>
            <Flex flexDirection="column" gap="$4">
              <Text size="xs" css={{ color: "$neutral600" }}>
                Favourites
              </Text>
              {FAVOURITE_ITEMS.map((item) => (
                <SidebarMenuItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                />
              ))}
            </Flex>
            <Flex flexDirection="column" gap="$4" css={{ marginTop: "$16" }}>
              <Text size="xs" css={{ color: "$neutral600" }}>
                Main Menu
              </Text>
              {MAIN_MENU_ITEMS.map((item) => (
                <SidebarMenuItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  active={item.active}
                />
              ))}
            </Flex>
          </Box>
          <Flex
            gap="$6"
            alignItems="center"
            css={{
              borderRadius: "$lg",
              padding: "$4",
              border: "1px solid $primary100 !important",
              backgroundImage:
                "linear-gradient(to top,$primary50,rgba(255, 255, 255, 1))",
            }}
          >
            <Box>
              <RocketIcon size={30} color="#00828D" />
            </Box>
            <Flex flexDirection="column" gap="$2">
              <Text size="sm" weight="medium">
                Get the Extension
              </Text>
              <Text size="xs" css={{ color: "$neutral700" }}>
                Install Now
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex
        flexDirection="column"
        gap="$4"
        css={{
          padding: "$8",
          width: "100%",
        }}
      >
        {/* Header */}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          css={{ paddingBottom: "$4" }}
        >
          <Flex gap="$2">
            <Text
              size="sm"
              css={{
                color: "$neutral600",
                "@media (max-width: 768px)": {
                  paddingRight: "10px",
                },
              }}
            >
              Campaigns
            </Text>
            <Text
              size="sm"
              weight="medium"
              css={{
                "@media (max-width: 768px)": {
                  display: "none",
                },
              }}
            >
              / Analytics
            </Text>
          </Flex>
          <Box>
            <Input
              size="md"
              placeholder="Search"
              leftIcon={<SearchIcon size={20} strokeWidth={1.2} />}
              css={{
                border: "none",
                color: "$neutral600",
                "&:hover": { border: "none !important" },
                "&:focus": { border: "none !important" },
                boxShadow: "none !important",
                "@media (min-width: 1024px)": {
                  width: "300px",
                },
              }}
            />
          </Box>
        </Flex>

        {/* Revenue Section */}
        <Flex
          justifyContent="space-between"
          css={{
            paddingBottom: "$11",
            "@media (max-width: 768px)": {
              flexDirection: "column",
              gap: "$9",
            },
          }}
        >
          <Box>
            <Heading
              size="h4"
              weight="bold"
              css={{ fontFamily: "tenon, sans-serif" }}
            >
              Your total revenue
            </Heading>
            <Heading
              size="h3"
              weight="bold"
              css={{
                backgroundImage:
                  "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
                color: "transparent",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "tenon, sans-serif",
              }}
            >
              $90,239.00
            </Heading>
          </Box>
          <Flex gap="$6" alignItems="flex-end">
            <Button
              size="md"
              variant="outline"
              color="secondary"
              leftIcon={<CalendarIcon size={20} strokeWidth={1.2} />}
              css={{
                border: "1px solid $neutral200",
                fontWeight: "500",
                textWrap: "nowrap",
              }}
            >
              Select Date
            </Button>
            <Button
              size="md"
              variant="outline"
              color="secondary"
              leftIcon={<FilterIcon size={20} strokeWidth={1.2} />}
              css={{
                border: "1px solid $neutral200",
                fontWeight: "500",
              }}
            >
              Filter
            </Button>
          </Flex>
        </Flex>

        {/* Stats Cards */}
        <Flex
          css={{
            border: "1px solid $neutral200",
            borderRadius: "$lg",
            "@media (max-width: 768px)": {
              flexDirection: "column",
            },
          }}
        >
          <StatCard
            title="New Subscriptions"
            value="22"
            change={15}
            isPositive={true}
            chipLabel="View all"
            chipColor="accent"
            gradient="linear-gradient(137deg, rgba(255, 255, 255, 0.1) 58%, rgba(243, 243, 255, 1) 100%)"
          />
          <StatCard
            title="New Orders"
            value="320"
            change={4}
            isPositive={false}
            chipLabel="Analyses"
            chipColor="warning"
            gradient="linear-gradient(137deg, rgba(255, 255, 255, 1) 58%, rgba(255, 246, 239, 1) 100%)"
          />
          <StatCard
            title="Avg order revenue"
            value="$1,080"
            change={8}
            isPositive={true}
            chipLabel="Details"
            chipColor="accent"
            gradient="linear-gradient(137deg, rgba(255, 255, 255, 0.1) 58%, rgba(243, 243, 255, 1) 100%)"
            hasBorderRight={false}
          />
        </Flex>

        {/* Recent Campaigns */}
        <Flex flexDirection="column" gap="$4" css={{ width: "100%", paddingTop: "$10" }}>
          <Flex justifyContent="space-between" alignItems="center" css={{ width: "100%" }}>
            <Text size="md" weight="bold">
              Recent campaigns
            </Text>
            <Text
              size="sm"
              css={{ textDecoration: "underline", cursor: "pointer" }}
            >
              View all
            </Text>
          </Flex>
          <Flex
            gap="$4"
            css={{
              width: "100%",
              "@media (max-width:768px)": {
                flexWrap: "wrap",
              },
            }}
          >
            {CAMPAIGNS_DATA.map((campaign) => (
              <CampaignCard key={campaign.status} {...campaign} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
