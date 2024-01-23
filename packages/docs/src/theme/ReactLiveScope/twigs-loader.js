import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export function twigsComponentLoader(componentExportName) {
  return function LibComponentBrowserOnly(props) {
    return (
      <BrowserOnly fallback={<div>...</div>}>
        {() => {
          const Component = require("@site/../react-components/dist/es")[componentExportName];
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
          const Component = require("@site/../react-icons/dist/es")[componentExportName];
          return <Component {...props} />;
        }}
      </BrowserOnly>
    );
  }
};
export function remToPix(remVal) {
  return parseFloat(remVal.replace('rem', '')) * 16;
}