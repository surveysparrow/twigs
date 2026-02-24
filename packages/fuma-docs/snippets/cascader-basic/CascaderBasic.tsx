import { useState } from "react";
import { Cascader, CascaderOption } from "@sparrowengg/twigs-react";
import { data } from "./test-data";

export default function CascaderBasic() {
  const [value, setValue] = useState<CascaderOption | { label: string; value: string }>({ label: "", value: "" });

  return (
    <Cascader
      data={data}
      label="Basic"
      placeholder="Select location"
      value={value}
      onChange={(val) => setValue(val)}
    />
  );
}

