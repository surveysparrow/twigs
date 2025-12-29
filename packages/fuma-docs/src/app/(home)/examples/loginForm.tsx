import React from "react";
import {
  Avatar,
  Button,
  Box,
  FormHelperText,
  Heading,
  Input,
  Text,
  Flex,
} from "@sparrowengg/twigs-react";
import Image from "next/image";
import thriveSparrowLogo from "@/assets/images/logo.png";
import loginbg from "@/assets/images/loginbg.png";

export default function LoginForm() {
  return (
    <Flex
      css={{
        height: "655px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: "$2xl",
        "@media (max-width: 768px)": {
          height: "100%",
        },
      }}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        css={{
          width: "50%",
          backgroundColor: "white",
          borderTopLeftRadius: "$2xl",
          borderBottomLeftRadius: "$2xl",
          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      >
        <Box
          css={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            gap: "$3",
          }}
        >
          <Box>
            <Avatar
              src="https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              name="John Doe"
              size="4xl"
              rounded="3xl"
            />
          </Box>
          <Heading
            size="h4"
            weight="medium"
            css={{ color: "$neutral900", fontFamily: "tenon, sans-serif" }}
          >
            Glad you made it!
          </Heading>
          <Heading
            size="h6"
            weight="regular"
            css={{ color: "$neutral900", fontFamily: "tenon, sans-serif" }}
          >
            Welcome Gautham Srinivasan. Yup! you aren&apos;t a stranger here 🤗.
          </Heading>
          <Text
            size="sm"
            weight="regular"
            css={{
              color: "$neutral800",
              lineHeight: "$2",
              paragraphSpacing: "$2",
            }}
          >
            Maneesh, Akshay and 10 others are already waiting for you.
          </Text>
        </Box>
      </Flex>
      <Flex
        className="login-div"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="$10"
        css={{
          width: "50%",
          padding: "$4",
          borderTopRightRadius: "$2xl",
          borderBottomRightRadius: "$2xl",
          backgroundImage: `url(${loginbg.src})`,
          backgroundColor: "#F2F5F8",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom left",
          "@media (max-width: 768px)": {
            width: "100%",
            borderRadius: "$2xl",
          },
        }}
      >
        <Box
          css={{
            display: "flex",
            flexDirection: "row",
            gap: "$2",
            alignItems: "center",
            "@media (max-width: 768px)": {
              marginTop: "20px",
            },
          }}
        >
          <Box>
            <Image
              src={thriveSparrowLogo}
              alt="ThriveSparrow"
              width={25}
              height={25}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Text size="md" weight="bold" css={{ color: "$secondary400" }}>
            ThriveSparrow
          </Text>
        </Box>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$10",
            backgroundColor: "white",
            padding: "$20 $12",
            borderRadius: "$2xl",
            maxWidth: "75%",
            "@media (max-width: 768px)": {
              maxWidth: "100%",
            },
          }}
        >
          <Heading
            size="h5"
            weight="bold"
            css={{
              color: "#2B2B2B",
              textAlign: "center",
              fontFamily: "tenon, sans-serif",
              "@media (max-width: 768px)": {
                fontSize: "17px !important",
              },
            }}
          >
            Join your colleagues
          </Heading>
          <Box>
            <FormHelperText css={{ marginBottom: "$2" }}>
              What do they call you?
            </FormHelperText>
            <Input
              size="lg"
              aria-label="username"
              variant="filled"
              value="Gautham"
              onChange={() => {}}
            />
          </Box>
          <Box>
            <FormHelperText css={{ marginBottom: "$2" }}>
              Create your login password
            </FormHelperText>
            <Input size="lg" aria-label="password" variant="filled" />
          </Box>
          <Box>
            <Button
              aria-label="Continue"
              variant="solid"
              size="xl"
              css={{
                width: "100%",
                fontWeight: "700",
                fontSize: "19.2px",
                "@media (max-width: 768px)": {
                  fontSize: "16px",
                },
              }}
            >
              Join the flock!
            </Button>
          </Box>
          <Box>
            <Text
              size="xs"
              weight="regular"
              css={{
                color: "$neutral700",
                textAlign: "center",
              }}
            >
              In future, you can login to acmecorp.thrivesparrow.com using{" "}
              <span
                style={{
                  color: "var(--twigs-colors-neutral900)",
                }}
              >
                gautham@surveysparrow.com
              </span>{" "}
              and the above password.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
