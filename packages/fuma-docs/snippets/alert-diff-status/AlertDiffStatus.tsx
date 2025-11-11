import { Alert, AlertDescription, Box } from "@sparrowengg/twigs-react";
import { UserIcon } from "@sparrowengg/twigs-react-icons";

export default function AlertDiffStatus() {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "$5",
        width: "50%",
        padding: "$2",
      }}
    >
      <Alert status="info" icon={<UserIcon  size={20}/>}>
        <AlertDescription> This is an info alert with different icon</AlertDescription>
      </Alert>
      <Alert status="success">
        <AlertDescription> This is a success alert. </AlertDescription>
      </Alert>
      <Alert status="error" size="md">
        <AlertDescription> This is an error alert. </AlertDescription>
      </Alert>
      <Alert status="warning" size="md" closable>
        <AlertDescription> This is a warning alert. </AlertDescription>
      </Alert>
    </Box>
  );
}
