import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { getRecaptchaToken } from "@site/src/utils/get-recaptcha-token";
import {
  Alert,
  Box,
  Button,
  Flex,
  Select,
  Text,
  keyframes,
  styled,
} from "@sparrowengg/twigs-react";
import { marked } from "marked";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { packages } from "./constants";
import "./style.css";

const versionsInfoCache = new Map<string, string[]>();

const skeletonAnimation = keyframes({
  "0%": {
    backgroundColor: "#e0e0e0",
  },
  "50%": {
    backgroundColor: "#f0f0f0",
  },
});

const Skeleton = styled("div", {
  width: "100%",
  height: "1rem",
  backgroundColor: "#e0e0e0",
  borderRadius: "0.5rem",
  animation: `${skeletonAnimation} 2s infinite`,
  marginBottom: "$4",
});

export const UpgradeGuide = () => {
  const {
    siteConfig: {
      customFields: {
        labsAPIURL: API_ENDPOINT,
        recaptchaSiteKey: PUBLIC_RECAPTCHA_SITE_KEY,
      },
    },
  } = useDocusaurusContext();

  const [versions, setVersions] = useState<string[]>([]);
  const [versionsLoading, setVersionsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [aiResponse, setAiResponse] = useState("");
  const [isGeneratingAiResponse, setIsGeneratingAiResponse] = useState(false);

  const [selectedPackage, setSelectedPackage] = useState(
    packages["twigs-react"].value
  );
  const [sourceVersion, setSourceVersion] = useState<string | undefined>(
    undefined
  );
  const [targetVersion, setTargetVersion] = useState<string | undefined>(
    undefined
  );

  const packageOptions = useMemo(
    () =>
      Object.keys(packages).map((key) => ({
        value: packages[key].value,
        label: key,
      })),
    []
  );

  const versionOptions = useMemo(
    () =>
      versions.map((version) => ({
        value: version,
        label: version,
      })),
    [versions]
  );

  useEffect(() => {
    const fetchVersions = async () => {
      if (!versionsInfoCache.has(selectedPackage)) {
        setVersionsLoading(true);
        try {
          const res = await fetch(packages[selectedPackage].url);
          const data = await res.json();
          const newVersions = Object.keys(data.versions).reverse();
          versionsInfoCache.set(packages[selectedPackage].value, newVersions);

          setVersions(newVersions);
          setSourceVersion(newVersions[Math.min(newVersions.length - 1, 10)]);
          setTargetVersion(newVersions[0]);
        } catch (err) {
          console.error(err);
        } finally {
          setVersionsLoading(false);
        }
      } else {
        const cachedVersions = versionsInfoCache.get(selectedPackage) ?? [];
        setVersions(cachedVersions);
        setSourceVersion(
          cachedVersions[Math.min(cachedVersions.length - 1, 10)]
        );
        setTargetVersion(cachedVersions[0]);
      }
    };

    fetchVersions();
  }, [selectedPackage]);

  const handlePackageChange = useCallback(
    async (option: { value: string; label: string } | null) => {
      if (!option) return;
      setSelectedPackage(option.value);
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsGeneratingAiResponse(true);
      try {
        const token = await getRecaptchaToken(
          PUBLIC_RECAPTCHA_SITE_KEY as string
        );
        const headers = new Headers();
        headers.set("x-recaptcha-token", token as string);

        const res = await fetch(
          `${API_ENDPOINT}/twigs-upgrade-guide?packageName=${selectedPackage}&currentVersion=${sourceVersion}&targetVersion=${targetVersion}`,
          {
            headers,
            method: "GET",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        setAiResponse(data.content);
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsGeneratingAiResponse(false);
      }
    },
    [selectedPackage, sourceVersion, targetVersion]
  );

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const htmlOutput = useMemo(() => {
    return marked.parse(
      aiResponse.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "")
    ) as string;
  }, [aiResponse]);

  return (
    <Box>
      <Head>
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${PUBLIC_RECAPTCHA_SITE_KEY}`}
        ></script>
      </Head>
      <form onSubmit={handleSubmit}>
        <Flex
          gap="$3"
          css={{
            wdith: "100%",

            "& > div": {
              flex: 1,
            },
          }}
        >
          <Select
            id="package"
            name="package"
            size="md"
            label="Package"
            value={packageOptions.find((opt) => opt.value === selectedPackage)}
            onChange={handlePackageChange}
            isDisabled={versionsLoading}
            options={packageOptions}
          />
          <Select
            id="sourceVersion"
            name="sourceVersion"
            size="md"
            label="Source Version"
            value={versionOptions.find((opt) => opt.value === sourceVersion)}
            onChange={(option) => option && setSourceVersion(option.value)}
            isDisabled={versionsLoading}
            options={versionOptions}
          />
          <Select
            id="targetVersion"
            size="md"
            label="Target Version"
            name="targetVersion"
            value={versionOptions.find((opt) => opt.value === targetVersion)}
            onChange={(option) => option && setTargetVersion(option.value)}
            isDisabled={versionsLoading}
            options={versionOptions}
          />
        </Flex>
        <Text
          size="sm"
          css={{
            marginTop: "$3",
          }}
        >
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
          <a href="https://policies.google.com/terms">Terms of Service</a>{" "}
          apply.
        </Text>
        {error && <Alert status="error">{error}</Alert>}
        <Button
          type="submit"
          disabled={
            isGeneratingAiResponse ||
            !sourceVersion ||
            !targetVersion ||
            versionsLoading
          }
          loading={isGeneratingAiResponse}
          size="md"
          css={{
            marginTop: "$5",
          }}
        >
          Get Changes
        </Button>
      </form>
      {isGeneratingAiResponse ? (
        <SkeletonLoader />
      ) : (
        aiResponse && (
          <Box
            css={{
              marginTop: "$10",

              p: {
                marginTop: "$4",
              },

              "h1, h2, h3": {
                marginBottom: "$6",
              },
            }}
            dangerouslySetInnerHTML={{ __html: htmlOutput }}
          />
        )
      )}
    </Box>
  );
};

const SkeletonLoader = () => {
  return (
    <Box
      css={{
        marginTop: "$10",
      }}
    >
      <Skeleton
        css={{
          width: "20%",
        }}
      />
      <Skeleton
        css={{
          width: "100%",
        }}
      />
      <Skeleton
        css={{
          width: "60%",
        }}
      />
      <Skeleton
        css={{
          width: "80%",
        }}
      />
      <Skeleton
        css={{
          width: "50%",
        }}
      />
    </Box>
  );
};
