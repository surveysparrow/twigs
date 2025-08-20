import defaultMdxComponents from "fumadocs-ui/mdx";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import type { MDXComponents } from "mdx/types";
import { Playground } from "./component/playground/playground";
import * as TypeTableComponents from "fumadocs-ui/components/type-table";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...TypeTableComponents,
    ...components,
    Playground,
  };
}
