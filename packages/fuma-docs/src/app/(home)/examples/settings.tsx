import React from "react";
import logo from "@/assets/images/Frame 2.png";
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

export default function Settings() {
  return (
    <Flex
      css={{
        borderRadius: "$2xl",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        backgroundColor: "$neutral50",
        height: "625px",
        "@media (max-width: 768px)": {
          height: "100%",
        },
      }}
    >
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        gap="$5"
        css={{
          backgroundColor: "#F8F8F8",
          padding: "$10 $6",
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
          <Box
            css={{
              marginBottom: "$3",
            }}
          >
            <Image src={logo} alt="ThriveSparrow" width={25} height={25} />
          </Box>
          <Flex flexDirection="column" gap="$3">
            <IconButton
              icon={<HomeIcon />}
              aria-label="Edit"
              size="md"
              css={{
                color: "$secondary400",
              }}
              color="secondary"
              variant="ghost"
            />
            <IconButton
              icon={<SaveIcon />}
              aria-label="save"
              size="md"
              color="secondary"
              css={{
                color: "$secondary400",
              }}
              variant="ghost"
            />
            <IconButton
              icon={<ColorSwatchesIcon />}
              aria-label="color"
              size="md"
              color="secondary"
              css={{
                color: "$secondary400",
              }}
              variant="ghost"
            />
            <IconButton
              icon={<PageIcon />}
              aria-label="page"
              size="md"
              color="secondary"
              css={{
                color: "$secondary400",
              }}
              variant="ghost"
            />
            <IconButton
              icon={<Image src={icon} alt="icon" width={30} height={30} />}
              aria-label="Ai"
              size="md"
              color="secondary"
              css={{
                color: "$secondary400",
              }}
              variant="ghost"
            />
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          gap="$7"
          alignItems="center"
          css={{
            position: "relative",
          }}
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
      <Flex
        flexDirection="column"
        gap="$7"
        css={{
          backgroundColor: "$neutral50",
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
          <Text
            css={{
              color: "$neutral800",
            }}
          >
            Settings
          </Text>
          <Box>
            <IconButton
              icon={<SearchIcon />}
              aria-label="search"
              color="secondary"
              variant="ghost"
              css={{
                color: "$secondary500",
              }}
            />
          </Box>
        </Flex>
        <Flex flexDirection="column" gap="$2">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
          >
            <AccordionItem value="item-1" css={{
                borderBottom: "0 !important",
              }}>
              <AccordionTrigger css={{
                backgroundColor: "$neutral50 !important",
                cursor: "pointer",
                textWrap: "nowrap",
              }}
              className="!py-0"
              >
                <Text
                  size="xs"
                  weight="bold"
                  css={{
                    color: "$neutral900 !important",
                  }}
                >
                  YOUR PREFERENCE{" "}
                </Text>
              </AccordionTrigger>
              <AccordionContent css={{
                backgroundColor: "$neutral50 !important",
                "&>div": {
                  padding: "0 !important",
                },
              }}
              >
                <Text
                  css={{
                    padding: "$3 $4",
                    color: "$neutral800",
                    "&:hover": {
                      backgroundColor: "$neutral100",
                      cursor: "pointer",
                      borderRadius: "$lg",
                    },
                  }}
                >
                  Personal
                </Text>
                <Text
                  css={{
                    padding: "$3 $4",
                    color: "$neutral800",
                    "&:hover": {
                      backgroundColor: "$neutral100",
                      cursor: "pointer",
                      borderRadius: "$lg",
                    },
                  }}
                >
                  Notifications
                </Text>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="item-2">
            <AccordionItem value="item-2" css={{
                borderBottom: "0 !important",
              }}>
              <AccordionTrigger css={{
                backgroundColor: "$neutral50 !important",
                cursor: "pointer",
              }}
              className="!py-0"
              >
                <Text
                  size="xs"
                  weight="bold"
                  css={{
                    color: "$neutral900",
                  }}
                >
                  ACCOUNT MANAGEMENT{" "}
                </Text>
              </AccordionTrigger>
              <AccordionContent css={{
                backgroundColor: "$neutral50 !important",
                "&>div": {
                  padding: "0 !important",
                },
              }}
              >
                <Text
                  css={{
                    backgroundColor: "$primary50",
                    borderRadius: "$lg",
                    color: "$primary600",
                    padding: "$3 $4",
                    cursor: "pointer",
                  }}
                >
                  General
                </Text>
                <Text
                  css={{
                    padding: "$3 $4",
                    color: "$neutral800",
                    "&:hover": {
                      backgroundColor: "$neutral100",
                      cursor: "pointer",
                      borderRadius: "$lg",
                    },
                  }}
                >
                  Branding
                </Text>
                <Text
                  css={{
                    padding: "$3 $4",
                    color: "$neutral800",
                    "&:hover": {
                      backgroundColor: "$neutral100",
                      cursor: "pointer",
                      borderRadius: "$lg",
                    },
                  }}
                >
                  Billing
                </Text>
                <Text
                  css={{
                    padding: "$3 $4",
                    color: "$neutral800",
                    "&:hover": {
                      backgroundColor: "$neutral100",
                      cursor: "pointer",
                      borderRadius: "$lg",
                    },
                  }}
                >
                  Integrations
                </Text>
                <Text
                  css={{
                    padding: "$3 $4",
                    color: "$neutral800",
                    "&:hover": {
                      backgroundColor: "$neutral100",
                      cursor: "pointer",
                      borderRadius: "$lg",
                    },
                  }}
                >
                  Users & Teams
                </Text>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="item-3">
            <AccordionItem value="item-3" css={{
                borderBottom: "0 !important",
              }}>
              <AccordionTrigger css={{
                backgroundColor: "$neutral50 !important",
                cursor: "pointer",
              }}
              className="!py-0"
              >
                <Text
                  size="xs"
                  weight="bold"
                  css={{
                    color: "$neutral900",
                  }}
                >
                  MODULES{" "}
                </Text>
              </AccordionTrigger>
              <AccordionContent css={{
                backgroundColor: "$neutral50 !important",
                "&>div": {
                  padding: "0 !important",
                },
              }}
              >
                <Text
                  css={{
                    padding: "$3 $4",
                    color: "$neutral800",
                    "&:hover": {
                      backgroundColor: "$neutral100",
                      cursor: "pointer",
                      borderRadius: "$lg",
                    },
                  }}
                >
                  Projects
                </Text>
                <Text
                  css={{
                    padding: "$3 $4",
                    color: "$neutral800",
                    "&:hover": {
                      backgroundColor: "$neutral100",
                      cursor: "pointer",
                      borderRadius: "$lg",
                    },
                  }}
                >
                  Library
                </Text>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible defaultValue="item-4"
          >
            <AccordionItem value="item-4" 
            css={{
                borderBottom: "0 !important",
              }}
            >
              <AccordionTrigger css={{
                backgroundColor: "$neutral50 !important",
                cursor: "pointer",
              }}
              className="!py-0"
              >
                <Text
                  size="xs"
                  weight="bold"
                  css={{
                    color: "$neutral900",
                  }}
                >
                  LOGS{" "}
                </Text>
              </AccordionTrigger>
              <AccordionContent css={{
                backgroundColor: "$neutral50 !important",
                "&>div": {
                  padding: "0 !important",
                },
              }}
              >
                <Text
                  css={{
                    padding: "$3 $4",
                    color: "$neutral800",
                    "&:hover": {
                      backgroundColor: "$neutral100",
                      cursor: "pointer",
                      borderRadius: "$lg",
                    },
                  }}
                >
                  Member Logs
                </Text>
                <Text
                  css={{
                    padding: "$3 $4",
                    color: "$neutral800",
                    "&:hover": {
                      backgroundColor: "$neutral100",
                      cursor: "pointer",
                      borderRadius: "$lg",
                    },
                  }}
                >
                  Audit Logs
                </Text>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
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
          <Text
            weight="bold"
            css={{
              color: "$neutral900",
            }}
          >
            General Settings
          </Text>
          <Text
            css={{
              color: "$neutral600",
            }}
          >
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
        <Flex
          flexDirection="row"
          wrap="wrap"
          gap="$5"
          css={{
            marginTop: "$3",
          }}
        >
          <Box
            css={{
              width: "48%",
              "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
          >
            <FormInput
              label="Account Name"
              size="md"
              info="Enter your account name"
              value="Thrive Sparrow"
              onChange={() => {}}
            />
          </Box>
          <Box
            css={{
              width: "48%",
              "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
          >
            <Select
              instanceId="settings-language-select"
              placeholder=""
              options={[
                { label: "English", value: "english" },
                { label: "Hindi", value: "hindi" },
                { label: "Marathi", value: "marathi" },
              ]}
              size="md"
              variant="default"
              label="Language"
              defaultValue={[{ label: "English", value: "english" }]}
              info="Select your language"
            />
          </Box>
          <Box
            css={{
              width: "48%",
              "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
          >
            <Select
              instanceId="settings-timezone-select"
              placeholder=""
              options={[
                { label: "India", value: "india" },
                { label: "USA", value: "usa" },
                { label: "UK", value: "uk" },
              ]}
              size="md"
              variant="default"
              label="Timezone"
              info="Select your timezone"
              defaultValue={[{ label: "India", value: "india" }]}
            />
          </Box>
          <Box
            css={{
              width: "48%",
              "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
          >
            <Select
              instanceId="settings-currency-select"
              placeholder=""
              options={[
                { label: "INR", value: "inr" },
                { label: "USD", value: "usd" },
                { label: "GBP", value: "gbp" },
              ]}
              size="md"
              variant="default"
              label="Currency"
              info="Select your currency"
              defaultValue={[{ label: "INR", value: "inr" }]}
            />
          </Box>
          <Box
            css={{
              width: "48%",
              "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
          >
            <Select
              instanceId="settings-date-format-select"
              placeholder=""
              options={[
                { label: "DD/MM/YYYY", value: "dd/mm/yyyy" },
                { label: "MM/DD/YYYY", value: "mm/dd/yyyy" },
                { label: "YYYY/MM/DD", value: "yyyy/mm/dd" },
              ]}
              size="md"
              variant="default"
              label="Date & Number Format"
              info="Select your date & number format"
            />
          </Box>
        </Flex>
        <Flex
          flexDirection="column"
          gap="$2"
          css={{
            marginTop: "$2",
          }}
        >
          <Text
            weight="bold"
            css={{
              color: "$neutral900",
            }}
          >
            Company Information
          </Text>
          <Text
            css={{
              color: "$neutral600",
            }}
          >
            This information will be used as a default where needed.
          </Text>
        </Flex>
        <Flex
          wrap="wrap"
          gap="$5"
          css={{
            marginTop: "$3",
          }}
        >
          <Box
            css={{
              width: "48%",
              "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
          >
            <FormInput
              label="Company Name"
              size="md"
              info="Enter your company name"
            />
          </Box>
          <Box
            css={{
              width: "48%",
              "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
          >
            <FormInput
              label="Company Domain"
              size="md"
              info="company domain"
              disabled
              value="thrivesparrow.com"
            />
          </Box>
          <Box
            css={{
              width: "48%",
              "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
          >
            <FormInput
              label="Company Address"
              size="md"
              info="company address"
            />
          </Box>
          <Box
            css={{
              width: "48%",
              "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
          >
            <FormInput label="Company Phone" size="md" info="company phone" />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
