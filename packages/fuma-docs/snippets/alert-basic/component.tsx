import { Alert, AlertDescription } from "@sparrowengg/twigs-react";

export default function Component() {
  return (
    <Alert status="info">
      <AlertDescription>
        {" "}
        Password should have a minimum length of 6.{" "}
      </AlertDescription>
    </Alert>
  );
}
