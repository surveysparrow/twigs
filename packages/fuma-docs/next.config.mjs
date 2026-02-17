import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  headers: async () => [
    {
      source: "/api/snippets/:snippet",
      headers: [
        {
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
      ],
    },
  ],
  rewrites: async () => [
    {
      source: "/docs/:path*.mdx",
      destination: "/llms.mdx/docs/:path*",
    },
  ],
};

export default withMDX(config);
