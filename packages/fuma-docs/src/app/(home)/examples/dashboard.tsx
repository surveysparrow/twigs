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
  SliderThumb,
  SliderRange,
  SliderTrack,
  Text,
  Slider,
} from "@sparrowengg/twigs-react";
import React from "react";
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


export default function Dashboard() {
  const RenderedThumb = () => {
    return <SliderThumb css={{ display: "none" }} />;
  };

  const RenderedRange = () => {
    return <SliderRange css={{ backgroundColor: "$primary400" }} />;
  };

  const RenderedTrack = ({ children }: { children: React.ReactNode }) => {
    return (
      <SliderTrack
        css={{
          width: "100%",
          backgroundColor: "$neutral100",
          position: "absolute",
          borderRadius: "$md",
        }}
      >
        {children}
      </SliderTrack>
    );
  };
  return (
    <Flex
      css={{
        borderRadius: "$2xl",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        background:
          "linear-gradient(299deg,rgba(255, 255, 255, 1) 90%, rgba(240, 255, 244, 1) 100%)",
        height: "625px",
        overflow: "scroll",
        "@media (max-width: 1024px)": {
          height: "100%",
        },
      }}
    >
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
          <Box
            css={{
              cursor: "pointer",
            }}
          >
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
              <Text
                size="xs"
                css={{
                  color: "$neutral600",
                }}
              >
                Favourites
              </Text>
              <Flex
                alignItems="center"
                gap="$4"
                css={{
                  cursor: "pointer",
                  padding: "$4",
                  borderRadius: "$lg",
                  "&:hover": {
                    backgroundColor: "$neutral50",
                  },
                }}
              >
                <PageIcon size={20} strokeWidth={1.2} />
                <Text>Technical Docs</Text>
              </Flex>
              <Flex
                alignItems="center"
                gap="$4"
                css={{
                  cursor: "pointer",
                  padding: "$4",
                  borderRadius: "$lg",
                  "&:hover": {
                    backgroundColor: "$neutral50",
                  },
                }}
              >
                <PageIcon size={20} strokeWidth={1.2} />
                <Text>Campaign Guidelines</Text>
              </Flex>
              <Flex
                alignItems="center"
                gap="$4"
                css={{
                  cursor: "pointer",
                  padding: "$4",
                  borderRadius: "$lg",
                  "&:hover": {
                    backgroundColor: "$neutral50",
                  },
                }}
              >
                <DocumentClipIcon size={20} strokeWidth={1.2} />
                <Text>Important Rules</Text>
              </Flex>
              <Flex
                alignItems="center"
                gap="$4"
                css={{
                  cursor: "pointer",
                  padding: "$4",
                  borderRadius: "$lg",
                  "&:hover": {
                    backgroundColor: "$neutral50",
                  },
                }}
              >
                <UserCirclePlusIcon size={20} strokeWidth={1.2} />
                <Text>Onboarding</Text>
              </Flex>
            </Flex>
            <Flex
              flexDirection="column"
              gap="$4"
              css={{
                marginTop: "$16",
              }}
            >
              <Text
                size="xs"
                css={{
                  color: "$neutral600",
                }}
              >
                Main Menu
              </Text>
              <Flex
                alignItems="center"
                gap="$4"
                css={{
                  cursor: "pointer",
                  padding: "$4",
                  borderRadius: "$lg",
                  "&:hover": {
                    backgroundColor: "$neutral50",
                  },
                }}
              >
                <HomeIcon size={20} strokeWidth={1.2} />
                <Text>Dashboard</Text>
              </Flex>
              <Flex
                alignItems="center"
                gap="$4"
                css={{
                  cursor: "pointer",
                  padding: "$4",
                  borderRadius: "$lg",
                  backgroundColor: "$neutral50",
                }}
              >
                <ColorSwatchesIcon size={20} strokeWidth={1.2} />
                <Text>Campaigns</Text>
              </Flex>
              <Flex
                alignItems="center"
                gap="$4"
                css={{
                  cursor: "pointer",
                  padding: "$4",
                  borderRadius: "$lg",
                  "&:hover": {
                    backgroundColor: "$neutral50",
                  },
                }}
              >
                <LinkIcon size={20} strokeWidth={1.2} />
                <Text>Chat</Text>
              </Flex>
              <Flex
                alignItems="center"
                gap="$4"
                css={{
                  cursor: "pointer",
                  padding: "$4",
                  borderRadius: "$lg",
                  "&:hover": {
                    backgroundColor: "$neutral50",
                  },
                }}
              >
                <UserIcon size={20} strokeWidth={1.2} />
                <Text>Support Center</Text>
              </Flex>
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
              <RocketIcon size={30} 
              color="#00828D"
              />
            </Box>
            <Flex flexDirection="column" gap="$2">
              <Text size="sm" weight="medium">
                Get the Extension
              </Text>
              <Text size="xs" css={{
                color: "$neutral700",
              }}>Install Now</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        gap="$4"
        css={{
          padding: "$8",
          width: "100%",
        }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          css={{
            paddingBottom: "$4",
          }}
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
            <Text size="sm" weight="medium" css={{
              "@media (max-width: 768px)": {
                display: "none",
              },
            }}>
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
                "&:hover": {
                  border: "none !important",
                },
                "&:focus": {
                  border: "none !important",
                },
                boxShadow: "none !important",
                "@media (min-width: 1024px)": {
                  width: "300px",
                },
              }}
            />
          </Box>
        </Flex>
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
            <Heading size="h4" weight="bold" 
            css={{
              fontFamily: "DM Sans, sans-serif !important",
            }}
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
                fontFamily: "DM Sans, sans-serif !important",
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
        <Flex
          css={{
            border: "1px solid $neutral200",
            borderRadius: "$lg",
            "@media (max-width: 768px)": {
              flexDirection: "column",
            },
          }}
        >
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            css={{
              height: "130px",
              padding: "$10",
              width: "35%",
              borderRight: "1px solid $neutral200",
              background:
                "linear-gradient(137deg, rgba(255, 255, 255, 0.1) 58%, rgba(243, 243, 255, 1) 100%)",
              "@media (max-width: 768px)": {
                borderBottom: "1px solid $neutral200",
                borderRight: "none",
                width: "100%",
              },
            }}
          >
            <Text size="md" weight="medium">
              New Subscriptions
            </Text>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex flexDirection="column">
                <Flex alignItems="center" gap="$2">
                  <Text size="lg" weight="bold">
                    22
                  </Text>
                  <Box
                    css={{
                      backgroundColor: "$primary50",
                      borderRadius: "$round",
                      color: "$primary500",
                      padding: "$2",
                    }}
                  >
                    <ArrowUpIcon size={10} strokeWidth={1.2} />
                  </Box>
                  <Text
                    size="sm"
                    weight="medium"
                    css={{
                      color: "$primary500",
                    }}
                  >
                    15%
                  </Text>
                </Flex>
                <Flex>
                  <Text
                    css={{
                      color: "$neutral600",
                    }}
                  >
                    compared to last week
                  </Text>
                </Flex>
              </Flex>
              <Flex>
                <Chip color="accent" size="lg">
                  View all
                </Chip>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            css={{
              height: "130px",
              padding: "$10",
              width: "35%",
              borderRight: "1px solid $neutral200",
              background:
                "linear-gradient(137deg, rgba(255, 255, 255, 1) 58%, rgba(255, 246, 239, 1) 100%)",
              "@media (max-width: 768px)": {
                borderRight: "none",
                borderBottom: "1px solid $neutral200",
                width: "100%",
              },
            }}
          >
            <Text size="md" weight="medium">
              New Orders
            </Text>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex flexDirection="column">
                <Flex alignItems="center" gap="$2">
                  <Text size="lg" weight="bold">
                    320
                  </Text>
                  <Box
                    css={{
                      backgroundColor: "$warning50",
                      borderRadius: "$round",
                      color: "$warning500",
                      padding: "$2",
                    }}
                  >
                    <ArrowDownIcon size={10} strokeWidth={1.2} />
                  </Box>
                  <Text
                    size="sm"
                    weight="medium"
                    css={{
                      color: "$warning500",
                    }}
                  >
                    4%
                  </Text>
                </Flex>
                <Flex>
                  <Text
                    css={{
                      color: "$neutral600",
                    }}
                  >
                    compared to last week
                  </Text>
                </Flex>
              </Flex>
              <Flex>
                <Chip color="warning" size="lg">
                  Analyses
                </Chip>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            css={{
              height: "130px",
              padding: "$10",
              width: "35%",
              background:
                "linear-gradient(137deg, rgba(255, 255, 255, 0.1) 58%, rgba(243, 243, 255, 1) 100%)",
              "@media (max-width: 768px)": {
                borderRight: "none",
                width: "100%",
              },
            }}
          >
            <Text size="md" weight="medium">
              Avg order revenue
            </Text>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex flexDirection="column">
                <Flex alignItems="center" gap="$2">
                  <Text size="lg" weight="bold">
                    $1,080
                  </Text>
                  <Box
                    css={{
                      backgroundColor: "$primary50",
                      borderRadius: "$round",
                      color: "$primary500",
                      padding: "$2",
                    }}
                  >
                    <ArrowUpIcon size={10} strokeWidth={1.2} />
                  </Box>
                  <Text
                    size="sm"
                    weight="medium"
                    css={{
                      color: "$primary500",
                    }}
                  >
                    8%
                  </Text>
                </Flex>
                <Flex>
                  <Text
                    css={{
                      color: "$neutral600",
                    }}
                  >
                    compared to last week
                  </Text>
                </Flex>
              </Flex>
              <Flex>
                <Chip color="accent" size="lg">
                  Details
                </Chip>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          gap="$4"
          css={{
            width: "100%",
            paddingTop: "$10",
          }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            css={{
              width: "100%",
            }}
          >
            <Text size="md" weight="bold">
              Recent campaigns
            </Text>
            <Text
              size="sm"
              css={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
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
            <Box
              css={{
                width: "35%",
                "@media (max-width: 768px)": {
                  width: "100%",
                },
              }}
            >
              <Flex
                gap="$4"
                css={{
                  marginBottom: "$4",
                }}
              >
                <Text
                  size="sm"
                  css={{
                    color: "$neutral600",
                  }}
                >
                  Draft
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
                  2
                </Text>
              </Flex>
              <Flex
                flexDirection="column"
                gap="$4"
                css={{
                  padding: "$6",
                  borderRadius: "$lg",
                  border: "1px solid $neutral200",
                }}
              >
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  css={{
                    width: "100%",
                  }}
                >
                  <Box>
                    <Image
                      src={logo.src}
                      alt="campaign"
                      width={15}
                      height={15}
                      css={{
                        borderRadius: "$sm",
                      }}
                    />
                  </Box>
                  <Box>
                    <AvatarGroup limit={3} rounded="full" size="xs">
                      <Avatar src="https://i.pravatar.cc/150?img=0" key="1"/>
                      <Avatar src="https://i.pravatar.cc/150?img=1" key="2" />
                      <Avatar src="https://i.pravatar.cc/150?img=2" key="3" />
                    </AvatarGroup>
                  </Box>
                </Flex>
                <Text weight="medium">
                  10 simple steps to revolutionize workflows with our product
                </Text>
                <Flex alignItems="center" gap="$2">
                  <Text size="xs">Start :</Text>
                  <Text
                    size="xs"
                    css={{
                      color: "$neutral600",
                    }}
                  >
                    Not started
                  </Text>
                </Flex>
                <Slider
                  components={{
                    Thumb: RenderedThumb,
                    Range: RenderedRange,
                    Track: RenderedTrack,
                  }}
                  value={[0]}
                />
                <Flex alignItems="center" gap="$2">
                  <Text
                    size="xs"
                    css={{
                      color: "$neutral600",
                    }}
                  >
                    Last updated :
                  </Text>
                  <Text size="xs">Oct 16, 2025</Text>
                </Flex>
                <Flex gap="$2">
                  <Text
                    size="xs"
                    css={{
                      color: "$neutral600",
                      textWrap: "nowrap",
                    }}
                  >
                    Agenda :
                  </Text>
                  <Text size="xs">product features analysis</Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              css={{
                width: "35%",
                "@media (max-width: 768px)": {
                  width: "100%",
                },
              }}
            >
              <Flex
                gap="$4"
                css={{
                  marginBottom: "$4",
                }}
              >
                <Text
                  size="sm"
                  css={{
                    color: "$neutral600",
                  }}
                >
                  In Progress
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
                  2
                </Text>
              </Flex>
              <Flex
                flexDirection="column"
                gap="$4"
                css={{
                  padding: "$6",
                  borderRadius: "$lg",
                  border: "1px solid $neutral200",
                }}
              >
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  css={{
                    width: "100%",
                  }}
                >
                  <Box>
                    <Image
                      src={logo.src}
                      alt="campaign"
                      width={15}
                      height={15}
                      css={{
                        borderRadius: "$sm",
                      }}
                    />
                  </Box>
                  <Box>
                    <AvatarGroup limit={3} rounded="full" size="xs">
                      <Avatar src="https://i.pravatar.cc/150?img=7" key="1" />
                    </AvatarGroup>
                  </Box>
                </Flex>
                <Text weight="medium">
                  Boost your performance: start using our amazing product
                </Text>
                <Flex
                  alignItems="center"
                  gap="$2"
                  justifyContent="space-between"
                >
                  <Flex alignItems="center" gap="$2">
                    <Text size="xs">Start :</Text>
                    <Text
                      size="xs"
                      css={{
                        color: "$neutral600",
                      }}
                    >
                      June 1, 2025
                    </Text>
                  </Flex>
                  <Flex alignItems="center" gap="$2">
                    <Text size="xs">End :</Text>
                    <Text
                      size="xs"
                      css={{
                        color: "$neutral600",
                      }}
                    >
                      Oct 16, 2025
                    </Text>
                  </Flex>
                </Flex>
                <Slider
                  components={{
                    Thumb: RenderedThumb,
                    Range: RenderedRange,
                    Track: RenderedTrack,
                  }}
                  value={[40]}
                />
                <Flex alignItems="center" gap="$2">
                  <Text
                    size="xs"
                    css={{
                      color: "$neutral600",
                    }}
                  >
                    Last updated :
                  </Text>
                  <Text size="xs">Oct 16, 2025</Text>
                </Flex>
                <Flex gap="$2">
                  <Text
                    size="xs"
                    css={{
                      color: "$neutral600",
                      textWrap: "nowrap",
                    }}
                  >
                    Agenda :
                  </Text>
                  <Text size="xs">Marketing campaign analysis</Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              css={{
                width: "35%",
                "@media (max-width: 768px)": {
                  width: "100%",
                },
              }}
            >
              <Flex
                gap="$4"
                css={{
                  marginBottom: "$4",
                }}
              >
                <Text
                  size="sm"
                  css={{
                    color: "$neutral600",
                  }}
                >
                  Archived
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
                  1
                </Text>
              </Flex>
              <Flex
                flexDirection="column"
                gap="$4"
                css={{
                  padding: "$6",
                  borderRadius: "$lg",
                  border: "1px solid $neutral200",
                }}
              >
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  css={{
                    width: "100%",
                  }}
                >
                  <Box>
                    <Image
                      src={logo.src}
                      alt="campaign"
                      width={15}
                      height={15}
                      css={{
                        borderRadius: "$sm",
                      }}
                    />
                  </Box>
                  <Box>
                    <AvatarGroup limit={3} rounded="full" size="xs">
                      <Avatar src="https://i.pravatar.cc/150?img=0" key="1" />
                      <Avatar src="https://i.pravatar.cc/150?img=1" key="2" />
                      <Avatar src="https://i.pravatar.cc/150?img=2" key="3" />
                      <Avatar src="https://i.pravatar.cc/150?img=3" key="4" />
                    </AvatarGroup>
                  </Box>
                </Flex>
                <Text weight="medium">
                  The power of our product: a new era in SaaS
                </Text>
                <Flex alignItems="center" gap="$2">
                  <Text size="xs">Ended :</Text>
                  <Text
                    size="xs"
                    css={{
                      color: "$neutral600",
                    }}
                  >
                    Jun 16, 2025
                  </Text>
                </Flex>
                <Slider
                  components={{
                    Thumb: RenderedThumb,
                    Range: RenderedRange,
                    Track: RenderedTrack,
                  }}
                  value={[0]}
                />
                <Flex alignItems="center" gap="$2">
                  <Text
                    size="xs"
                    css={{
                      color: "$neutral600",
                    }}
                  >
                    Last updated :
                  </Text>
                  <Text size="xs">Oct 16, 2025</Text>
                </Flex>
                <Flex gap="$2">
                  <Text
                    size="xs"
                    css={{
                      color: "$neutral600",
                      textWrap: "nowrap",
                    }}
                  >
                    Agenda :
                  </Text>
                  <Text size="xs">SaaS product features analysis and implementation planning</Text>
                </Flex>
              </Flex>
            </Box>
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
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
