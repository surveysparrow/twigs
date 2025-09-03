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

export default function Component() {
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

      {/* Vertical Tabs */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>Vertical Tabs</Text>
        
        <Tabs defaultValue="tab1" orientation="vertical">
          <TabsList aria-label="Vertical tabs example" css={{ flexDirection: "column" }}>
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Analytics</TabsTrigger>
            <TabsTrigger value="tab3">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tab1">
            <Box css={{ padding: "$6" }}>
              <Text css={{ fontSize: "$lg", fontWeight: "$6", marginBottom: "$4" }}>Overview</Text>
              <Text css={{ fontSize: "$md", lineHeight: "$6" }}>
                This is the overview tab content. Here you can see a summary of your data and key metrics.
              </Text>
            </Box>
          </TabsContent>
          
          <TabsContent value="tab2">
            <Box css={{ padding: "$6" }}>
              <Text css={{ fontSize: "$lg", fontWeight: "$6", marginBottom: "$4" }}>Analytics</Text>
              <Text css={{ fontSize: "$md", lineHeight: "$6" }}>
                This is the analytics tab content. Here you can view detailed analytics and performance metrics.
              </Text>
            </Box>
          </TabsContent>
          
          <TabsContent value="tab3">
            <Box css={{ padding: "$6" }}>
              <Text css={{ fontSize: "$lg", fontWeight: "$6", marginBottom: "$4" }}>Reports</Text>
              <Text css={{ fontSize: "$md", lineHeight: "$6" }}>
                This is the reports tab content. Here you can generate and view various reports.
              </Text>
            </Box>
          </TabsContent>
        </Tabs>
      </Box>

    </Box>
  );
} 