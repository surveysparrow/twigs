import { useState } from "react";
import { Cascader } from "@sparrowengg/twigs-react";
import { data } from "./test-data";

export default function CascaderDisabledOptions() {
  const [value, setValue] = useState({
    value: "kerala",
    label: "Kerala",
  });

  const dataSet = JSON.parse(JSON.stringify(data));
  dataSet[0].options[1].options[0].disabled = true;
  // karnataka will be disabled
  dataSet[0].options[1].options.push({
    label: 'Tamil Nadu',
    value: 'tamil-nadu'
  });

  return (
    <Cascader
      data={dataSet}
      value={value}
      label="Disabled options"
      onChange={(val) => setValue(val)}
    />
  );
}

