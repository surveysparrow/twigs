"use client";
import { getRecaptchaToken } from "@/lib/utils";
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
import Script from "next/script";
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
  // Get environment variables from Next.js
  const API_ENDPOINT = process.env.NEXT_PUBLIC_LABS_API_URL;
  const PUBLIC_RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const [versions, setVersions] = useState<string[]>([]);
  const [versionsLoading, setVersionsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [aiResponse, setAiResponse] = useState("");
  const [isGeneratingAiResponse, setIsGeneratingAiResponse] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

      // Check if environment variables are available
      if (!API_ENDPOINT || !PUBLIC_RECAPTCHA_SITE_KEY) {
        setError("API endpoint or reCAPTCHA key not configured");
        return;
      }

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
    [
      selectedPackage,
      sourceVersion,
      targetVersion,
      API_ENDPOINT,
      PUBLIC_RECAPTCHA_SITE_KEY,
    ]
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
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
      <form
        onSubmit={handleSubmit}
        className="bg-fd-card p-5 rounded-lg border border-fd-border shadow-sm"
      >
        <Flex
          gap="$3"
          flexDirection="column"
          css={{
            width: "100%",
          }}
        >
          {isClient && (
            <div className="flex gap-5 flex-col">
              <Select
                size="md"
                label="Package"
                value={packageOptions.find(
                  (opt) => opt.value === selectedPackage
                )}
                onChange={handlePackageChange}
                isDisabled={versionsLoading}
                options={packageOptions}
                isSearchable={false}
                css={{
                  '&:focus-within': {
                    $$shadowColor: '$colors$primary200',
                    borderRadius: '$lg',
                    boxShadow:
                      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px !important',
                  },
                }}
              />
              <Select
                size="md"
                label="Source Version"
                value={versionOptions.find(
                  (opt) => opt.value === sourceVersion
                )}
                onChange={(option: { value: string; label: string } | null) =>
                  option && setSourceVersion(option.value)
                }
                isDisabled={versionsLoading}
                options={versionOptions}
                                isSearchable={false}
                css={{
                  '&:focus-within': {
                    $$shadowColor: '$colors$primary200',
                    borderRadius: '$lg',
                    boxShadow:
                      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px !important',
                  },
                }}
              />
              <Select
                size="md"
                label="Target Version"
                value={versionOptions.find(
                  (opt) => opt.value === targetVersion
                )}
                onChange={(option: { value: string; label: string } | null) =>
                  option && setTargetVersion(option.value)
                }
                isDisabled={versionsLoading}
                options={versionOptions}
                                isSearchable={false}
                css={{
                  '&:focus-within': {
                    $$shadowColor: '$colors$primary200',
                    borderRadius: '$lg',
                    boxShadow:
                      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px !important',
                  },
                }}
              />
            </div>
          )}
        </Flex>
        <Text size="sm" className="mt-8 !text-fd-muted-foreground">
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
          className="mt-5 !bg-fd-primary/10 !text-fd-primary !border !border-fd-primary/10 !font-normal"
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
