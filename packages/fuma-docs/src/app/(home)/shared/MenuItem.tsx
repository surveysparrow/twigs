"use client";
import React, { memo } from "react";
import { Text } from "@sparrowengg/twigs-react";

interface MenuItemProps {
  children: React.ReactNode;
  active?: boolean;
}

// Shared styles for menu items 
const baseStyles = {
  padding: "$3 $4",
  color: "$neutral800",
  cursor: "pointer",
};

const hoverStyles = {
  ...baseStyles,
  "&:hover": {
    backgroundColor: "$neutral100",
    borderRadius: "$lg",
  },
};

const activeStyles = {
  backgroundColor: "$primary50",
  borderRadius: "$lg",
  color: "$primary600",
  padding: "$3 $4",
  cursor: "pointer",
};

export const MenuItem = memo(function MenuItem({ children, active = false }: MenuItemProps) {
  return (
    <Text css={active ? activeStyles : hoverStyles}>
      {children}
    </Text>
  );
});

