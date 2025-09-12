"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import logoDarkMode from "@/assets/images/logo-w-text-darkmode.svg";
import logoLightMode from "@/assets/images/logo-w-text-lightmode.svg";
import { useEffect, useState } from "react";

const logoThemeMap = {
  dark: logoDarkMode,
  light: logoLightMode,
};

export function Logo() {
  const { theme, resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const resolved =
      theme === "system" ? (resolvedTheme ?? "light") : (theme ?? "light");
    setCurrentTheme(resolved as "dark" | "light");
  }, [theme, resolvedTheme]);

  return (
    <Image
      className="h-7 w-auto ml-0 pl-0"
      src={
        logoThemeMap[currentTheme as keyof typeof logoThemeMap] ?? logoDarkMode
      }
      alt="Twigs Charts"
    />
  );
}
