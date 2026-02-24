import React from "react";
import { Flex, Box, Text, Image } from "@sparrowengg/twigs-react";
import scoreCard from "@/assets/images/Vector 96.svg";
import { ChevronUpFillIcon } from "@sparrowengg/twigs-react-icons";

// Segment data for the multi-color progress bar
const segments = [
  { value: 50, color: "#56B0BB", hoverColor: "#459AA4" }, 
  { value: 25, color: "#FCBD4F", hoverColor: "#E5A838" }, 
  { value: 25, color: "#FA7659", hoverColor: "#E55F42" }, 
];

export default function ScoreCard() {
  return (
    <Flex
      flexDirection="column"
      css={{
        paddingTop: "$7",
        paddingBottom: "$7",
        paddingLeft: "$7",
        paddingRight: "$7",
        backgroundColor: "white",
        borderRadius: "$2xl",
        position: "relative",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Image
        src={scoreCard.src}
        alt="score card"
        width={100}
        height={100}
        css={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "150px",
          height: "100px",
          borderTopRightRadius: "$2xl",
        }}
      />
      <Flex flexDirection="column" css={{ padding: "$4" }}>
        <Text weight="medium" size="xs" css={{ color: "$neutral700" }}>
          NPS SCORE
        </Text>
        <Flex
          alignItems="center"
          gap="$4"
          css={{ paddingTop: "$8", paddingBottom: "$15" }}
        >
          <Text weight="bold" css={{ color: "$neutral900", fontSize: "$4xl" }}>
            37
          </Text>
          <Text
            size="xs"
            css={{ color: "$primary500", marginTop: "$5", paddingLeft: "$2", paddingRight: "$2", backgroundColor: "$primary50", borderRadius: "$sm", display: "flex", alignItems: "center", gap: "$1" }}
          >
            <ChevronUpFillIcon size={12} strokeWidth={1.2} />
            12%
          </Text>
          <Text
            size="xs"
            css={{ color: "$neutral700", marginTop: "$5" }}
          >
            higher in comparison
          </Text>
        </Flex>
        <Flex
          gap="$1"
          css={{
            width: "100%",
            height: "20px",
            borderRadius: "999px",
            overflow: "hidden",
            marginBottom: "$27",
          }}
        >
          {segments.map((segment, index) => (
            <Box
              key={index}
              css={{
                width: `${segment.value}%`,
                height: "100%",
                backgroundColor: segment.color,
                borderTopLeftRadius: index === 0 ? "999px" : "0",
                borderBottomLeftRadius: index === 0 ? "999px" : "0",
                borderTopRightRadius:
                  index === segments.length - 1 ? "999px" : "0",
                borderBottomRightRadius:
                  index === segments.length - 1 ? "999px" : "0",
                "&:hover": {
                  backgroundColor: segment.hoverColor,
                },
              }}
            />
          ))}
        </Flex>
        <Flex alignItems="center" gap="$8" css={{ "@media (max-width: 768px)": { gap: "$4" } }}>
          <Flex alignItems="center" gap="$4" css={{ "@media (max-width: 768px)": { gap: "$2" } }}>
            <Box css={{ width: "12px", height: "12px", backgroundColor: "#7DBFC4", borderRadius: "$sm" }}></Box>
            <Text>Promoters</Text>
          </Flex>
          <Flex alignItems="center" gap="$4" css={{ "@media (max-width: 768px)": { gap: "$2" } }}>
            <Box css={{ width: "12px", height: "12px", backgroundColor: "#F4C86C", borderRadius: "$sm" }}></Box>
            <Text>Passives</Text>
          </Flex>
          <Flex alignItems="center" gap="$4" css={{ "@media (max-width: 768px)": { gap: "$2" } }}>
            <Box css={{ width: "12px", height: "12px", backgroundColor: "#E88D7D", borderRadius: "$sm" }}></Box>
            <Text>Detractors</Text>
          </Flex>
        </Flex>

      </Flex>
    </Flex>
  );
}
