import React, { useState } from "react";
import {
  Image,
  Text,
  Flex,
  Box,
  TabsList,
  Tabs,
  TabsContent,
  TabsTrigger,
  Switch,
  Chip,
} from "@sparrowengg/twigs-react";
import {InfoIcon} from "@sparrowengg/twigs-react-icons";
import cardlogo from "@/assets/images/card-logo.svg";
import cardbg from "@/assets/images/Union.svg"
import pointsIcon from "@/assets/images/points.png";

export default function ProductCard() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <Flex
      flexDirection="column"
      gap="$3"
      css={{
        width: "100%",
        borderRadius: "$2xl",
        backgroundColor: "white",
        overflow: "hidden",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Box
        css={{
          height: "140px",
          width: "100%",
          backgroundColor: "$neutral300",
          borderRadius: "$2xl",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Box css={{ position: "absolute", bottom: -45, left: 18 }}>
          <Image
            src={cardlogo.src}
            alt="card logo"
            width={177}
            height={100}
          />
        </Box>
        <Box css={{ position: "absolute", top: 0, right: 0 }}>
          <Image
            src={cardbg.src}
            alt="card background"
            width={155}
            height={100}
          />
        </Box>
      </Box>
      <Flex
        gap="$4"
        alignItems="center"
        css={{ paddingLeft: "$8", paddingRight: "$8", marginTop: "$30" }}
      >
        <Text size="lg" weight="medium" css={{ color: "$neutral900" }}>
          Airbnb Credits
        </Text>
        <Chip size="sm" color="default" css={{ borderRadius: "100px", backgroundColor: "$black800", color: "$white900", fontSize: "$xs" }}> <Image src={pointsIcon.src} alt="points" width={16} height={16} style={{ marginRight: "4px", color: "white" }} /> 500 pts</Chip>
      </Flex>
      <Text
        css={{ color: "$neutral800", paddingLeft: "$8", paddingRight: "$8", paddingBottom: "$5" }}
      >
        Give Airbnb—amazing places to stay and things to do, all around the
        world. Give the perfect getaway.
      </Text>
      <Tabs defaultValue="denominations" css={{ width: "100%" }}>
        <TabsList
          aria-label="Account settings"
          css={{
            borderBottom: "1px solid $neutral200",
            paddingLeft: "$8",
            paddingRight: "$8",
          }}
        >
          <TabsTrigger value="denominations" css={{ fontSize: "$sm", fontWeight: "$5", fontFamily: "var(--font-dm-sans) !important" }}>Denominations</TabsTrigger>
          <TabsTrigger value="steps-to-redeem" css={{ fontSize: "$sm", fontWeight: "$5", fontFamily: "var(--font-dm-sans) !important", textWrap: "nowrap" }}>Steps to Redeem</TabsTrigger>
        </TabsList>

        <TabsContent value="denominations" css={{ padding: "0 !important" }}>
          <Flex justifyContent="space-between" alignItems="center" css={{borderBottom: "1px solid $neutral200", padding: "$6 $8" }} >
            <Flex alignItems="center" gap="$6">
              <Switch
                size="sm"
                checked={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
              />
              <Text size="md" weight="bold" css={{ color: "#6A6A6A", lineHeight: "24px" }}>$5000</Text>
            </Flex>
            <Flex alignItems="center" gap="$2" justifyContent="space-between"
            css={{
              backgroundColor: "$neutral100",
              borderRadius: "$md",
              padding: "$2 $4",
              width: "50%",
            }}
            >
              <Text css={{ color: "$neutral900" }}>1000</Text>
              <Text css={{ color: "$neutral500" }}>Points</Text>
            </Flex>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" css={{borderBottom: "1px solid $neutral200", padding: "$6 $8" }} >
            <Flex alignItems="center" gap="$6">
              <Switch
                size="sm"
                checked={checked2}
                onChange={() => {
                  setChecked2(!checked2);
                }}
              />
              <Text size="md" weight="bold" css={{ color: "#6A6A6A", lineHeight: "24px" }}>$2000</Text>
            </Flex>
            <Flex alignItems="center" gap="$2" justifyContent="space-between"
            css={{
              backgroundColor: "$neutral100",
              borderRadius: "$md",
              padding: "$2 $4",
              width: "50%",
            }}
            >
              <Text css={{ color: "$neutral900" }}>1000</Text>
              <Text css={{ color: "$neutral500" }}>Points</Text>
            </Flex>
          </Flex>
          <Flex gap="$2" css={{ padding: "$12 $8" }}>
            <InfoIcon size={26} style={{ width: "86px" }}/>
            <Text css={{ color: "$neutral500" }}>Disclaimer: Company name is not a sponsor of the rewards or otherwise affiliated with the reward program. Please visit amazon.com/gc-legal for more terms and conditions. </Text>
          </Flex>
        </TabsContent>

        <TabsContent value="steps-to-redeem" css={{ padding: "0 !important" }}>
          <Flex flexDirection="column" gap="$5" css={{ padding: "$8", paddingTop: "$11", "@media (min-width: 1600px)": { paddingBottom: "$12", gap: "$7" } }}>
            <Flex gap="$6">
              <Text css={{ color: "$neutral900", padding: "$1 $4", border:"1px solid $neutral200", borderRadius: "$round", height:"fit-content" }}>1</Text>
              <Text>Add your Amazon.com account to your Amazon Rewards account.</Text>
            </Flex>
            <Flex gap="$6">
              <Text css={{ color: "$neutral900", padding: "$1 $4", border:"1px solid $neutral200", borderRadius: "$round", height:"fit-content" }}>2</Text>
              <Text>Select the denomination you want to redeem. Don&apos;t see the denomination you want? Contact Support.</Text>
            </Flex>
            <Flex gap="$6">
              <Text css={{ color: "$neutral900", padding: "$1 $4", border:"1px solid $neutral200", borderRadius: "$round", height:"fit-content" }}>3</Text>
              <Text>Click the “Redeem” button. You will receive an email with your gift card code.</Text>
            </Flex>
            <Flex gap="$6">
              <Text css={{ color: "$neutral900", padding: "$1 $4", border:"1px solid $neutral200", borderRadius: "$round", height:"fit-content" }}>4</Text>
              <Text>You will receive an email with your gift card</Text>
            </Flex>
          </Flex>
        </TabsContent>
      </Tabs>
    </Flex>
  );
}
