import React, { memo } from "react";
import logo from "@/assets/images/settings-logo.svg";
import Image from "next/image";
import {
  Avatar,
  IconButton,
  Text,
  Box,
  FormInput,
  Select,
  Flex,
  Separator,
  AccordionContent,
  AccordionTrigger,
  Accordion,
  AccordionItem,
  Button,
} from "@sparrowengg/twigs-react";
import {
  ColorSwatchesIcon,
  HomeIcon,
  PageIcon,
  SaveIcon,
  SearchIcon,
  SettingsIcon,
  ImagePlusIcon,
} from "@sparrowengg/twigs-react-icons";
import icon from "@/assets/images/Icon wrapper - New.png";
import boxbg from "@/assets/images/boxbg.png";
import { MenuItem } from "../shared";
import {
  SETTINGS_LANGUAGE_OPTIONS,
  SETTINGS_TIMEZONE_OPTIONS,
  SETTINGS_CURRENCY_OPTIONS,
  SETTINGS_DATE_FORMAT_OPTIONS,
} from "../constants";

// Shared styles
const accordionItemStyles = { borderBottom: "0 !important" };
const accordionTriggerStyles = {
  backgroundColor: "#F6F6F6 !important",
  cursor: "pointer",
};
const accordionContentStyles = {
  backgroundColor: "#F6F6F6 !important",
  "&>div": { padding: "0 !important" },
};
const sidebarIconStyles = { color: "$secondary400" };
const formFieldContainerStyles = {
  width: "48%",
  "@media (max-width: 768px)": { width: "100%" },
};

// Menu section data
const PREFERENCE_ITEMS = ["Personal", "Notifications", "Messages"] as const;
const ACCOUNT_ITEMS = ["Branding", "Marketing", "Billing", "Integrations", "Users & Teams"] as const;
const MODULE_ITEMS = ["Projects", "Library", "Templates"] as const;
const LOG_ITEMS = ["Member Logs", "Audit Logs"] as const;

// Memoized sidebar icon button component
const SidebarIconButton = memo(function SidebarIconButton({ 
  icon: IconComponent, 
  label 
}: { 
  icon: React.ReactNode; 
  label: string;
}) {
  return (
    <IconButton
      icon={IconComponent}
      aria-label={label}
      size="md"
      css={sidebarIconStyles}
      color="secondary"
      variant="ghost"
    />
  );
});

// Memoized accordion section component
interface AccordionSectionProps {
  title: string;
  value: string;
  items: readonly string[];
  activeItem?: string;
}

const AccordionSection = memo(function AccordionSection({
  title,
  value,
  items,
  activeItem,
}: AccordionSectionProps) {
  return (
    <Accordion type="single" collapsible defaultValue={value}>
      <AccordionItem value={value} css={accordionItemStyles}>
        <AccordionTrigger css={accordionTriggerStyles} className="!py-0">
          <Text size="xs" weight="bold" css={{ color: "$neutral900" }}>
            {title}{" "}
          </Text>
        </AccordionTrigger>
        <AccordionContent css={accordionContentStyles}>
          {activeItem && (
            <Text
              css={{
                backgroundColor: "$primary50",
                borderRadius: "$lg",
                color: "$primary600",
                padding: "$3 $4",
                cursor: "pointer",
              }}
            >
              {activeItem}
            </Text>
          )}
          {items.map((item) => (
            <MenuItem key={item}>{item}</MenuItem>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
});

// Memoized form field wrapper
const FormFieldWrapper = memo(function FormFieldWrapper({ 
  children 
}: { 
  children: React.ReactNode;
}) {
  return <Box css={formFieldContainerStyles}>{children}</Box>;
});

export default function Settings() {
  return (
    <Flex
      css={{
        borderRadius: "$2xl",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        backgroundColor: "#F6F6F6",
        height: "734px",
        "@media (max-width: 768px)": {
          height: "100%",
        },
      }}
    >
      {/* Left sidebar - Icon navigation */}
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        gap="$5"
        css={{
          backgroundColor: "#F6F6F6",
          padding: "$8 $6",
          borderRight: "1px solid $neutral100",
          borderTopLeftRadius: "$2xl",
          borderBottomLeftRadius: "$2xl",
          width: "5%",
          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      >
        <Flex flexDirection="column" gap="$5" alignItems="center">
          <Box css={{ marginBottom: "$3" }}>
            <Image src={logo} alt="ThriveSparrow" width={25} height={25} />
          </Box>
          <Flex flexDirection="column" gap="$3">
            <SidebarIconButton icon={<HomeIcon />} label="Home" />
            <SidebarIconButton icon={<SaveIcon />} label="Save" />
            <SidebarIconButton icon={<ColorSwatchesIcon />} label="Colors" />
            <SidebarIconButton icon={<PageIcon />} label="Pages" />
            <SidebarIconButton 
              icon={<Image src={icon} alt="icon" width={30} height={30} />} 
              label="AI" 
            />
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          gap="$7"
          alignItems="center"
          css={{ position: "relative" }}
        >
          <IconButton
            icon={<SettingsIcon />}
            aria-label="settings"
            size="md"
            color="secondary"
            variant="ghost"
            css={{
              backgroundColor: "$white",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          />
          <Separator
            orientation="horizontal"
            css={{
              width: "45% !important",
              borderBottom: "1.5px solid $primary400 !important",
              position: "absolute",
              borderRadius: "$md",
              top: "45%",
            }}
          />
          <Avatar
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=512&h=512&dpr=2&q=80"
            name="John Doe"
          />
        </Flex>
      </Flex>

      {/* Middle sidebar - Settings navigation */}
      <Flex
        flexDirection="column"
        gap="$7"
        css={{
          backgroundColor: "#F6F6F6",
          width: "20%",
          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      >
        <Flex
          gap="$3"
          alignItems="center"
          justifyContent="space-between"
          css={{
            borderBottom: "1px solid $neutral100",
            padding: "$8 $8",
          }}
        >
          <Text css={{ color: "$neutral800" }}>Settings</Text>
          <Box>
            <IconButton
              icon={<SearchIcon />}
              aria-label="search"
              color="secondary"
              variant="ghost"
              css={{ color: "$secondary500" }}
            />
          </Box>
        </Flex>
        <Flex flexDirection="column" gap="$2">
          <AccordionSection
            title="YOUR PREFERENCE"
            value="item-1"
            items={PREFERENCE_ITEMS}
          />
          <AccordionSection
            title="ACCOUNT MANAGEMENT"
            value="item-2"
            items={ACCOUNT_ITEMS}
            activeItem="General"
          />
          <AccordionSection
            title="MODULES"
            value="item-3"
            items={MODULE_ITEMS}
          />
          <AccordionSection
            title="LOGS"
            value="item-4"
            items={LOG_ITEMS}
          />
        </Flex>
      </Flex>

      {/* Main content area */}
      <Flex
        flexDirection="column"
        gap="$8"
        css={{
          backgroundColor: "white",
          padding: "$24 $32",
          borderLeft: "1px solid $neutral100",
          borderTopRightRadius: "$2xl",
          borderBottomRightRadius: "$2xl",
          width: "75%",
          "@media (max-width: 768px)": {
            width: "100%",
            borderLeft: "none",
            padding: "$10",
            borderTopLeftRadius: "$2xl",
            borderBottomLeftRadius: "$2xl",
          },
        }}
      >
        <Flex flexDirection="column" gap="$2">
          <Text weight="bold" css={{ color: "$neutral900" }}>
            General Settings
          </Text>
          <Text css={{ color: "$neutral600" }}>
            These defaults will be applied to the entire account.
          </Text>
        </Flex>
        <Box
          css={{
            width: "$15",
            height: "$15",
            borderRadius: "$2xl",
            position: "relative",
            backgroundImage: `url(${boxbg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <IconButton
            icon={<ImagePlusIcon />}
            aria-label="info"
            size="md"
            color="secondary"
            variant="solid"
            shape="round"
            css={{
              backgroundColor: "$secondary600",
              color: "white",
              position: "absolute",
              top: "60%",
              right: "70%",
              "&:hover": {
                backgroundColor: "$secondary600 !important",
                color: "white !important",
              },
              "&:focus": {
                backgroundColor: "$secondary600 !important",
                color: "white !important",
              },
            }}
          />
        </Box>
        <Flex flexDirection="row" wrap="wrap" gap="$10" css={{ marginTop: "$3" }}>
          <FormFieldWrapper>
            <FormInput
              label="Account Name"
              size="md"
              info="Enter your account name"
              value="Thrive Sparrow"
              onChange={() => {}}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Select
              instanceId="settings-language-select"
              placeholder=""
              options={[...SETTINGS_LANGUAGE_OPTIONS]}
              size="md"
              variant="default"
              label="Language"
              defaultValue={[{ label: "English", value: "english" }]}
              info="Select your language"
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Select
              instanceId="settings-timezone-select"
              placeholder=""
              options={[...SETTINGS_TIMEZONE_OPTIONS]}
              size="md"
              variant="default"
              label="Timezone"
              info="Select your timezone"
              defaultValue={[{ label: "India", value: "india" }]}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Select
              instanceId="settings-currency-select"
              placeholder=""
              options={[...SETTINGS_CURRENCY_OPTIONS]}
              size="md"
              variant="default"
              label="Currency"
              info="Select your currency"
              defaultValue={[{ label: "INR", value: "inr" }]}
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Select
              instanceId="settings-date-format-select"
              placeholder=""
              options={[...SETTINGS_DATE_FORMAT_OPTIONS]}
              size="md"
              variant="default"
              label="Date & Number Format"
              info="Select your date & number format"
            />
          </FormFieldWrapper>
        </Flex>
        <Flex flexDirection="column" gap="$2" css={{ marginTop: "$8" }}>
          <Text weight="bold" css={{ color: "$neutral900" }}>
            Company Information
          </Text>
          <Text css={{ color: "$neutral600" }}>
            This information will be used as a default where needed.
          </Text>
        </Flex>
        <Flex wrap="wrap" gap="$10" css={{ marginTop: "$3" }}>
          <FormFieldWrapper>
            <FormInput
              label="Company Name"
              size="md"
              info="Enter your company name"
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <FormInput
              label="Company Domain"
              size="md"
              info="company domain"
              disabled
              value="thrivesparrow.com"
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <FormInput
              label="Company Address"
              size="md"
              info="company address"
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <FormInput label="Company Phone" size="md" info="company phone" />
          </FormFieldWrapper>
          <Button
            size="md"
            color="secondary"
            variant="solid"
            css={{ width: "fit-content", marginTop: "$5" }}
          >
            Save Changes
          </Button>
          <Button
            size="md"
            color="secondary"
            variant="outline"
            css={{ width: "fit-content", marginTop: "$5" }}
          >
            Discard
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
