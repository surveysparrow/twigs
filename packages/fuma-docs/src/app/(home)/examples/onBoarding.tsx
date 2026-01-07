import {
  Box,
  Flex,
  Text,
  FormInput,
  Button,
  Separator,
} from "@sparrowengg/twigs-react";
import React from "react";
import loginbg from "@/assets/images/login-fl-bg.png";
import logo from "@/assets/images/settings-logo.svg";
import Image from "next/image";
import { UserCircleIcon, EmailIcon } from "@sparrowengg/twigs-react-icons";
import googleIcon from "@/assets/images/google-signIn.png";

export default function OnBoarding() {
  return (
    <Flex
      css={{
        height: "734px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: "$2xl",
        backgroundColor: "white",
        padding: "$4",
        "@media (max-width: 768px)": {
          height: "100%",
        },
      }}
    >
      <Flex
        alignItems="end"
        css={{
          width: "45%",
          borderRadius: "$2xl",
          backgroundImage: `url(${loginbg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "@media (max-width: 1024px)": {
            display: "none",
          },
        }}
      >
        <Flex
          flexDirection="column"
          gap="$8"
          css={{
            padding: "$15",
            height: "fit-content",
            backdropFilter: "blur(5px)",
            borderRadius: "$2xl",
          }}
        >
          <Text weight="bold" size="lg" css={{ color: "$white900" }}>
            Get access to your personal knowledge hub for clarity and work
            productivity
          </Text>
          <Flex gap="$2" justifyContent="space-between" css={{ width: "100%" }}>
            <Box>
              <Text weight="bold" size="lg" css={{ color: "$white900" }}>
                120k+
              </Text>
              <Text size="xs" css={{ color: "$white900" }}>
                Active users
              </Text>
            </Box>
            <Box>
              <Text weight="bold" size="lg" css={{ color: "$white900" }}>
                1B+
              </Text>
              <Text size="xs" css={{ color: "$white900" }}>
                Conversations
              </Text>
            </Box>
            <Box>
              <Text weight="bold" size="lg" css={{ color: "$white900" }}>
                20k+
              </Text>
              <Text size="xs" css={{ color: "$white900" }}>
                Frontline users
              </Text>
            </Box>
            <Box>
              <Text weight="bold" size="lg" css={{ color: "$white900" }}>
                5+
              </Text>
              <Text size="xs" css={{ color: "$white900" }}>
                Countries
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        css={{
          width: "55%",
          borderRadius: "$2xl",
          backgroundColor: "white",
          padding: "100px 90px 0px 90px",
          "@media (max-width: 1024px)": {
            width: "100%",
            padding: "$20",
          },
          "@media (max-width: 768px)": {
            padding: "$10",
          },
        }}
      >
        <Flex
          css={{ height: "fit-content", marginBottom: "$16" }}
          alignItems="center"
          gap="$4"
        >
          <Image src={logo} alt="login" width={24} height={24} />
          <Text size="md" weight="medium" css={{ color: "$neutral900" }}>
            Acme Inc.
          </Text>
        </Flex>
        <Text size="lg" weight="medium" css={{ color: "$neutral900" }}>
          Get started now!
        </Text>
        <Text css={{ color: "$neutral700", marginBottom: "$16" }}>
          Please create your account to proceed
        </Text>
        <Flex gap="$8" wrap="wrap">
          <Box
            css={{
              width: "48%",
              "@media (max-width: 1024px)": {
                width: "100%",
              },
            }}
          >
            <FormInput
              size="xl"
              placeholder="First Name"
              variant="filled"
              leftIcon={<UserCircleIcon color="var(--twigs-colors-neutral600)" size={20} />}
            />
          </Box>
          <Box
            css={{
              width: "48%",
              "@media (max-width: 1024px)": {
                width: "100%",
              },
            }}
          >
            <FormInput
              size="xl"
              placeholder="Last Name"
              variant="filled"
              leftIcon={<UserCircleIcon color="var(--twigs-colors-neutral600)" size={20} />}
            />
          </Box>
          <Box
            css={{
              width: "99.5%",
              marginTop: "$5",
              "@media (max-width: 768px)": {
                width: "100%",
              },
            }}
          >
            <FormInput
              size="xl"
              placeholder="Work Email"
              variant="filled"
              leftIcon={<EmailIcon color="var(--twigs-colors-neutral600)" size={20} />}
            />
          </Box>
          <Button
            size="xl"
            variant="solid"
            color="primary"
            css={{ width: "100%", marginTop: "$5" }}
          >
            Sign Up
          </Button>
          <Flex
            alignItems="center"
            justifyContent="center"
            gap="$8"
            css={{ width: "100%", marginTop: "$5" }}
          >
            <Separator orientation="horizontal" />
            <Text size="md" weight="bold" css={{ color: "$neutral500" }}>
              OR
            </Text>
            <Separator orientation="horizontal" />
          </Flex>
          <Button
            size="xl"
            variant="outline"
            color="secondary"
            css={{ width: "100%", marginTop: "$5" }}
            leftIcon={
              <Image src={googleIcon} alt="google" width={20} height={20} />
            }
          >
            <span style={{ marginLeft: "20px" }}>Sign up with Google</span>
          </Button>
          <Text
            size="sm"
            css={{
              color: "$neutral700",
              textAlign: "center",
              width: "100%",
              marginTop: "$5",
            }}
          >
            Already have an account?{" "}
            <span style={{ color: "var(--twigs-colors-primary500)" }}>
              Login
            </span>
          </Text>
          <Text
            size="xs"
            css={{
              color: "$neutral700",
              textAlign: "center",
              width: "100%",
              marginTop: "$25",
              "@media (max-width: 1024px)": {
                marginTop: "$5",
              },
            }}
          >
            By signing up, you are agreeing to the{" "}
            <span style={{ color: "var(--twigs-colors-primary500)" }}>
              Terms and Policies
            </span>{" "}
            of Acme
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
