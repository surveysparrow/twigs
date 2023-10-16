import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export function twigsComponentLoader(componentExportName) {
  return function LibComponentBrowserOnly(props) {
    return (
      <BrowserOnly fallback={<div>...</div>}>
        {() => {
          const Component = require("@site/../react-components/src/index")[componentExportName];
          return <Component {...props} />;
        }}
      </BrowserOnly>
    );
  }
};
export function twigsIconLoader(componentExportName) {
  return function LibComponentBrowserOnly(props) {
    return (
      <BrowserOnly fallback={<div>...</div>}>
        {() => {
          const Component = require("@site/../react-icons/src/index")[componentExportName];
          return <Component {...props} />;
        }}
      </BrowserOnly>
    );
  }
};
export function remToPix(remVal) {
  return parseFloat(remVal.replace('rem', '')) * 16;
}