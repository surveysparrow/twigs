import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Text,
  Button,
  Input,
  Box,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Flex,
} from "@sparrowengg/twigs-react";
import {
  EmailIcon,
  QuestionCircleIcon,
  CommentIcon,
  RocketIcon,
} from "@sparrowengg/twigs-react-icons";

export default function TabsComponent() {
  return (
    <Flex
      flexDirection="column"
      gap="$8"
      css={{
        width: "100%",
        height: "fit-content",
        padding: "$6",
        paddingBottom: "$2",
        borderRadius: "$2xl",
        backgroundColor: "white",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Box>
        <Box>
          <Tabs defaultValue="tab1">
            <TabsList
              aria-label="Basic tabs example"
              css={{
                overflowX: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <TabsTrigger
                value="tab1"
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: "$2",
                  color: "$neutral700",
                  fontWeight: "normal",
                  borderBottom: "2px solid white !important",
                  "&[data-state='active']": {
                    borderBottom: "2px solid $primary500 !important",
                  },
                }}
              >
                <Box>Subscribe</Box> <EmailIcon size={17} />
              </TabsTrigger>
              <TabsTrigger
                value="tab2"
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: "$2",
                  color: "$neutral700",
                  fontWeight: "normal",
                  borderBottom: "2px solid white !important",
                  "&[data-state='active']": {
                    borderBottom: "2px solid $primary500 !important",
                  },
                }}
              >
                <Box>FAQ</Box> <QuestionCircleIcon size={17} />
              </TabsTrigger>
              <TabsTrigger
                value="tab3"
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: "$4",
                  color: "$neutral700",
                  fontWeight: "normal",
                  borderBottom: "2px solid white !important",
                  "&[data-state='active']": {
                    borderBottom: "2px solid $primary500 !important",
                  },
                }}
              >
                <Box>Contact</Box> <CommentIcon size={17} />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <Flex flexDirection="column" gap="$4">
                <Text size="md" weight="medium">
                  We would love to hear from you!
                </Text>
                <Text css={{ color: "$neutral700" }}>
                  Subscribe to our newsletter to get the latest updates and
                  news.
                </Text>
                <Flex gap="$4">
                  <Input placeholder="Enter your email" />
                  <Button
                    variant="solid"
                    size="md"
                    css={{
                      fontWeight: "normal",
                    }}
                  >
                    Subscribe
                  </Button>
                </Flex>
              </Flex>
            </TabsContent>
            <TabsContent
              value="tab2"
              css={{
                padding: "$8",
                display: "flex",
                flexDirection: "column",
                gap: "$4",
              }}
            >
              <Flex flexDirection="column" gap="$2">
                <Text size="md" weight="medium">
                  Frequently Asked Questions
                </Text>
                <Text css={{ color: "$neutral700" }}>
                  you can find all the frequently asked questions right here.
                </Text>
              </Flex>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger
                    css={{
                      paddingLeft: 0,
                      fontWeight: "normal",
                    }}
                  >
                    Page settings
                  </AccordionTrigger>
                  <AccordionContent
                    css={{
                      paddingTop: "0 !important",
                      paddingLeft: "0 !important",
                      color: "$neutral700",
                      "& > div": {
                        paddingTop: "0 !important",
                      },
                    }}
                  >
                    Configure your page settings including layout, theme, and
                    display options.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger
                    css={{
                      paddingLeft: 0,
                      fontWeight: "normal",
                    }}
                  >
                    Profile Information
                  </AccordionTrigger>
                  <AccordionContent
                    css={{
                      paddingTop: "0 !important",
                      paddingLeft: "0 !important",
                      color: "$neutral700",
                      "& > div": {
                        paddingTop: "0 !important",
                      },
                    }}
                  >
                    Manage your profile details, avatar, and personal
                    preferences.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent
              value="tab3"
              css={{
                padding: "$8",
                display: "flex",
                flexDirection: "column",
                gap: "$4",
              }}
            >
              <Flex flexDirection="column" gap="$2">
                <Text size="md" weight="medium">
                  Follow us on social media
                </Text>
                <Text css={{ color: "$neutral700" }}>
                  share your feedback with us. We&apos;re here to help you.
                </Text>
              </Flex>
              <Flex flexDirection="column" gap="$4">
                <Box
                  css={{
                    borderRadius: "$2xl",
                    border: "1px solid $primary100 !important",
                    display: "flex",
                    flexDirection: "row",
                    gap: "$2",
                    padding: "$3 $6",
                    color: "$primary500",
                    alignItems: "center",
                  }}
                >
                  <EmailIcon size={20} /> <Text>write an email to us</Text>
                </Box>
                <Box
                  css={{
                    borderRadius: "$2xl",
                    border: "1px solid $primary100 !important",
                    display: "flex",
                    flexDirection: "row",
                    gap: "$2",
                    padding: "$3 $6",
                    color: "$primary500",
                    alignItems: "center",
                  }}
                >
                  <RocketIcon size={20} /> <Text>follow us on Twitter</Text>
                </Box>
              </Flex>
            </TabsContent>
          </Tabs>
        </Box>
      </Box>
    </Flex>
  );
}
