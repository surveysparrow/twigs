import React from "react";
import {
  Drawer,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  Button,
  Heading,
  Box,
  Flex,
  FormInput,
  Textarea,
  Avatar,
  Text,
  FormLabel,
} from "@sparrowengg/twigs-react";

const initialData = {
  fullName: "Sarah Mitchell",
  email: "sarah.mitchell@company.com",
  role: "Product Designer",
  bio: "Passionate about creating intuitive user experiences and design systems.",
};

export default function DrawerBasic() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [savedData, setSavedData] = React.useState(initialData);
  const [formData, setFormData] = React.useState(initialData);

  const handleSave = () => {
    setSavedData(formData);
    setIsDrawerOpen(false);
  };

  const handleCancel = () => {
    setFormData(savedData);
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleCancel}
        placement="right"
        size="sm"
      >
        <DrawerHeader>
          <Heading size="h6">Edit Profile</Heading>
        </DrawerHeader>
        <DrawerBody>
          <Box>
            {/* Avatar Section */}
            <Flex
              alignItems="center"
              gap="$6"
              css={{
                paddingBottom: "$6",
                marginBottom: "$8",
                borderBottom: "1px solid $neutral200",
              }}
            >
              <Avatar
                size="2xl"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
              />
              <Box>
                <Text weight="medium" size="md">
                  {savedData.fullName}
                </Text>
                <Text size="sm" css={{ color: "$neutral600", marginTop: "$1" }}>
                  {savedData.role}
                </Text>
              </Box>
            </Flex>

            {/* Form Fields */}
            <Flex flexDirection="column" gap="$8">
              <FormInput
                label="Full Name"
                size="lg"
                value={formData.fullName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="Enter your full name"
              />

              <FormInput
                label="Email Address"
                size="lg"
                type="email"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email"
              />

              <FormInput
                label="Role"
                size="lg"
                value={formData.role}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                placeholder="Enter your role"
              />

              <Box>
                <FormLabel size="sm" css={{ marginBottom: "$2" }}>
                  Bio
                </FormLabel>
                <Textarea
                  size="lg"
                  rows={3}
                  value={formData.bio}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setFormData({ ...formData, bio: e.target.value })
                  }
                  placeholder="Write a short bio about yourself"
                />
                <Text
                  size="xs"
                  css={{ color: "$neutral600", marginTop: "$2" }}
                >
                  Brief description for your profile.
                </Text>
              </Box>
            </Flex>
          </Box>
        </DrawerBody>
        <DrawerFooter>
          <Flex gap="$3" justifyContent="flex-end">
            <Button color="default" onClick={handleCancel} size="lg">
              Cancel
            </Button>
            <Button color="primary" onClick={handleSave} size="lg">
              Save Changes
            </Button>
          </Flex>
        </DrawerFooter>
      </Drawer>
      <Button css={{ width: "$30" }} onClick={() => setIsDrawerOpen(true)}>
        Open Drawer
      </Button>
    </>
  );
} 