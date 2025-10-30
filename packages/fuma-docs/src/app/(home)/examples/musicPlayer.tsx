import React from "react";
import {
  Image,
  Text,
  Chip,
  Slider,
  SliderThumb,
  SliderRange,
  SliderTrack,
  IconButton,
  Flex,
  Box,
} from "@sparrowengg/twigs-react";
import {
  ShuffleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  GiftWithHeartIcon,
} from "@sparrowengg/twigs-react-icons";

export default function MusicPlayer() {
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
      flexDirection="column"
      gap="$5"
      css={{
        padding: "$6",
        borderRadius: "$2xl",
        backgroundColor: "white",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        height: "100%",
        minWidth: "310px",
        width: "100%",
        "@media (min-width: 768px)": {
          height: "fit-content",
        },
      }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Flex
          alignItems="center"
          gap="$5"
          css={{
            paddingBottom: "$4",
          }}
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1739786996022-5ed5b56834e2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
            css={{
              width: "$12",
              height: "$12",
              borderRadius: "$md",
            }}
          />
          <Flex flexDirection="column" gap="$1">
            <Text
              size="md"
              weight="medium"
              css={{
                color: "$neutral900",
              }}
            >
              Going to the moon
            </Text>
            <Text
              size="sm"
              weight="regular"
              css={{
                color: "$neutral600",
              }}
            >
              by Sophia Bennett
            </Text>
          </Flex>
        </Flex>
        <Box>
          <Chip variant="solid" size="md" color="success">
            99% match
          </Chip>
        </Box>
      </Flex>
      <Box>
        <Text
          css={{
            color: "$neutral900",
            paddingLeft: "$4",
            borderLeft: "2px solid $primary500 !important",
          }}
        >
          cause the beauty of the sunrise
        </Text>
        <Text
          css={{
            color: "$neutral600",
            paddingLeft: "$5",
          }}
        >
          and god knows im trying,
        </Text>
      </Box>
      <Box>
        <Slider
          components={{
            Thumb: RenderedThumb,
            Range: RenderedRange,
            Track: RenderedTrack,
          }}
          value={[30]}
        />
        <Flex justifyContent="space-between">
          <Text
            css={{
              color: "$neutral600",
            }}
          >
            1:10
          </Text>
          <Text
            css={{
              color: "$neutral600",
            }}
          >
            5:25
          </Text>
        </Flex>
      </Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        css={{
          paddingBottom: "$3",
        }}
      >
        <Box>
          <IconButton
            icon={<ShuffleIcon />}
            aria-label="Edit"
            size="md"
            color="secondary"
            variant="ghost"
          />
        </Box>
        <Flex alignItems="center" gap="$20">
          <IconButton
            icon={<ChevronLeftIcon />}
            aria-label="Edit"
            size="lg"
            color="secondary"
            variant="ghost"
          />
          <svg
            className="play-button-shadow"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            style={{
              fill: "var(--twigs-colors-primary500)",
              cursor: "pointer",
            }}
          >
            <path d="M7 6v12l10-6z"></path>
          </svg>
          <IconButton
            icon={<ChevronRightIcon />}
            aria-label="Edit"
            size="lg"
            color="secondary"
            variant="ghost"
          />
        </Flex>
        <Box>
          <IconButton
            icon={<GiftWithHeartIcon size={26} />}
            aria-label="Edit"
            size="lg"
            variant="ghost"
            shape="round"
            css={{
              color: "$negative500",
              "&:hover": {
                backgroundColor: "$negative100 !important",
                color: "$negative500 !important",
              },
              "&:focus": {
                backgroundColor: "$negative100 !important",
                color: "$negative500 !important",
              },
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
