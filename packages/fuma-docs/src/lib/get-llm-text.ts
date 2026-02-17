import { source } from "@/lib/source";
import type { InferPageType } from "fumadocs-core/source";

type PageType = InferPageType<typeof source>;

export async function getLLMText(page: PageType) {
  const { data } = page as PageType & {
    data: PageType["data"] & {
      getText: (type: "raw" | "processed") => Promise<string>;
    };
  };

  const processed = await data.getText("processed");

  return `# ${data.title} (${page.url})

${processed}`;
}
