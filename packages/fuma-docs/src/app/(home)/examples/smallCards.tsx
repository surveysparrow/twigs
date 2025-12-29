import React from "react";
import { Box, Flex, Text ,Image} from "@sparrowengg/twigs-react";
import { ChevronUpFillIcon } from "@sparrowengg/twigs-react-icons";
import movielogo from "@/assets/images/mv-logo.svg";
import moviebg from "@/assets/images/mv-bg.svg";
export default function SmallCards() {
  return (
    <Flex gap="$8" flexDirection="row">
      <Flex
        flexDirection="column"
        gap="$16"
        css={{
          width: "50%",
          height: "100%",
          padding: "$8",
          borderRadius: "$2xl",
          backgroundColor: "white",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          "@media (max-width: 768px)": {
            padding: "$5",
          },
        }}
      >
        <Text size="sm" weight="medium" css={{ color: "$neutral700" }}>INDIRECT SPEND</Text>
        <Text size="sm" weight="medium" css={{ color: "$neutral900", fontSize: "$3xl" }}>$ 8740</Text>
        <Flex
          alignItems="center"
          gap="$4"
        >
          <Text
            size="xs"
            css={{ color: "$primary500", paddingLeft: "$2", paddingRight: "$2", backgroundColor: "$primary50", borderRadius: "$sm", display: "flex", alignItems: "center", gap: "$1" }}
          >
            <ChevronUpFillIcon size={12} strokeWidth={1.2} />
            23.4%
          </Text>
          <Text
            size="xs"
            css={{ color: "$neutral700", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
          >
            vs last quarter
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        gap="$4"
        alignItems="center"
        css={{
          width: "50%",
          height: "100%",
          borderRadius: "$2xl",
          backgroundColor: "white",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          "@media (max-width: 768px)": {
            gap: "$2",
          },
        }}
      >
        <Box    
        css={{
          height:"100%",
          width:"100%",
          position: "relative",
        }}
        >
          <Image src={moviebg.src} alt="movie bg" css={{ borderTopLeftRadius: "$2xl", borderTopRightRadius: "$2xl" }} />
          <Box css={{ padding: "$2 0", borderRadius: "$md", position: "absolute", bottom: -15, left: "35%", backgroundColor: "white",boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.1)" }}>
          <Image src={movielogo.src} alt="movie logo" width={50} height={50} />
        </Box>
        </Box>
        <Text size="sm" weight="medium" css={{ color: "$neutral900", marginTop: "$6"}}>BookMyShow</Text>
        <Text size="xs" css={{ 
          color: "$neutral700", textAlign: "center", paddingLeft: "$4", paddingRight: "$4", paddingBottom: "$3",
          "@media (max-width: 768px)": {
            paddingLeft: "$3",
            paddingRight: "$3",
            paddingBottom: "$2",
          },
        }}>Coupon for 2 free tickets along with snacks combo.</Text>
      </Flex>
    </Flex>
  );
}
