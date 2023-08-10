import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { AllColors, AllFontSizes, AllFontWeights, AllBorderWidths, AllRadii, AllSpaces, AllSizes, CustomizedButton, DefaultThemeContainer } from '@site/src/components/theming';
import Divider from '@site/src/components/common/divider';
export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Divider,
  AllColors,
  AllFontSizes,
  AllFontWeights,
  AllBorderWidths,
  AllRadii,
  AllSpaces, AllSizes, CustomizedButton, DefaultThemeContainer
};