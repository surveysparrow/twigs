import React, { useState } from "react";
import { Input, Box, Text } from "@sparrowengg/twigs-react";
import { SearchIcon, EyeOpenIcon, EyeCloseIcon, UserIcon, LockIcon } from "@sparrowengg/twigs-react-icons";

export default function InputComprehensive() {
  const [showPassword, setShowPassword] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$10",width: "100%" }}>
        <Input
          placeholder="Search with left icon"
          size="md"
          variant="default"
          leftIcon={<SearchIcon />} 
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        />
        <Input
          placeholder="Password toggle"
          size="md"
          variant="default"
          type={showPassword ? "text" : "password"}
          rightElement={
            <Box
              css={{
                cursor: "pointer",
                padding: "$2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "$neutral800",
                "&:hover": {
                  color: "$neutral900"
                }
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeCloseIcon size={18} /> : <EyeOpenIcon size={18} />}
            </Box>
          }
        />
        <Input
          placeholder="Email with user icon"
          size="lg"
          variant="filled"
          type="email"
          leftIcon={<UserIcon />}
          value={emailValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)}
        />
        <Input
          placeholder="Password with lock icon"
          size="lg"
          variant="default"
          type="password"
          leftIcon={<LockIcon />}
          errorBorder
        />
      <Box css={{ display: "flex", flexDirection: "column", gap: "$2", alignItems: "center" }}>
        <Text css={{ fontSize: "$sm", color: "$neutral600" }}>
          Search: {searchValue || "No search term"}
        </Text>
        <Text css={{ fontSize: "$sm", color: "$neutral600" }}>
          Email: {emailValue || "No email entered"}
        </Text>
      </Box>
    </Box>
  );
}