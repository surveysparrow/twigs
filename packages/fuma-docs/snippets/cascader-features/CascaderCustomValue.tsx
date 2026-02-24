import { useState } from "react";
import { Cascader } from "@sparrowengg/twigs-react";
import { Flex, Text } from "@sparrowengg/twigs-react";
import { data } from "./test-data";

export default function CascaderCustomValue() {
  const [value, setValue] = useState({
    value: "ambalappuzha",
    label: "Ambalappuzha",
  });

  return (
    <Cascader
      data={data}
      value={value}
      label="Custom value"
      onChange={(val) => setValue(val)}
      renderBreadCrumb={() => null}
      renderValueText={(val, selectionPath) => (
        <Flex>
          {selectionPath.map((item, index) => (
            <Text
              key={item.value}
              css={{
                color:
                  val?.value === item.value ? "$neutral900" : "$neutral500",
                paddingLeft: index === 0 ? 0 : "$2",
              }}
            >
              {item.label}
              {index < selectionPath.length - 1 && " > "}
            </Text>
          ))}
        </Flex>
      )}
    />
  );
}

