import React from "react";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent, 
  Box, 
  Text,
  Input
} from "@sparrowengg/twigs-react";

export default function TabsBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
      {/* Basic Tabs */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>Basic Tabs</Text>
        
        <Tabs defaultValue="tab1">
          <TabsList aria-label="Basic tabs example">
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Password</TabsTrigger>
            <TabsTrigger value="tab3" disabled>Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tab1">
            <Box css={{ padding: "$6" }}>
              <Text css={{ fontSize: "$md", marginBottom: "$4" }}>
                Make changes to your account here. Click save when you&apos;re done.
              </Text>
              <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
                <Box>
                  <Text css={{ fontSize: "$sm", fontWeight: "$5", marginBottom: "$2" }}>Name</Text>
                  <Input 
                    placeholder="Enter your name"
                    defaultValue="Pedro Duarte"
                    size="md"
                  />
                </Box>
                <Box>
                  <Text css={{ fontSize: "$sm", fontWeight: "$5", marginBottom: "$2" }}>Username</Text>
                  <Input 
                    placeholder="Enter your username"
                    defaultValue="@peduarte"
                    size="md"
                  />
                </Box>
              </Box>
            </Box>
          </TabsContent>
          
          <TabsContent value="tab2">
            <Box css={{ padding: "$6" }}>
              <Text css={{ fontSize: "$md", marginBottom: "$4" }}>
                Change your password here. After saving, you&apos;ll be logged out.
              </Text>
              <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
                <Box>
                  <Text css={{ fontSize: "$sm", fontWeight: "$5", marginBottom: "$2" }}>Current password</Text>
                  <Input 
                    placeholder="Enter current password"
                    type="password"
                    size="md"
                  />
                </Box>
                <Box>
                  <Text css={{ fontSize: "$sm", fontWeight: "$5", marginBottom: "$2" }}>New password</Text>
                  <Input 
                    placeholder="Enter new password"
                    type="password"
                    size="md"
                  />
                </Box>
                <Box>
                  <Text css={{ fontSize: "$sm", fontWeight: "$5", marginBottom: "$2" }}>Confirm password</Text>
                  <Input 
                    placeholder="Confirm new password"
                    type="password"
                    size="md"
                  />
                </Box>
              </Box>
            </Box>
          </TabsContent>
          
          <TabsContent value="tab3">
            <Box css={{ padding: "$6" }}>
              <Text css={{ fontSize: "$md", color: "$neutral600" }}>
                Settings tab is disabled and cannot be accessed.
              </Text>
            </Box>
          </TabsContent>
        </Tabs>
      </Box>
    </Box>
  );
} 