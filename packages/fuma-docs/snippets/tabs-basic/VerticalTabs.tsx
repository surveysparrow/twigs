import React from "react";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent, 
  Box, 
  Text
} from "@sparrowengg/twigs-react";

export default function VerticalTabs() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
      {/* Vertical Tabs */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>Vertical Tabs</Text>
        
        <Tabs defaultValue="tab1" css={{
          display: 'flex !important',
          gap: '1rem !important',
          flexDirection: 'row !important'
        }}>
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