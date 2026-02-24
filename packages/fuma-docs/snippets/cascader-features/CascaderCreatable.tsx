import { useState } from "react";
import { Cascader, CascaderOption } from "@sparrowengg/twigs-react";
import { data } from "./test-data";

export default function CascaderCreatable() {
  const [dataState, setDataState] = useState(data);
  const [value, setValue] = useState<CascaderOption | { label: string; value: string }>({ label: "", value: "" });

  return (
    <Cascader
      data={dataState}
      value={value}
      creatable
      label="Creatable"
      placeholder="Select or type to create location"
      onChange={(val) => {
        if (val.isNew) {
          setDataState([
            ...dataState,
            {
              label: val.label,
              value: val.value,
              options: [],
            },
          ]);
        }
        setValue(val);
      }}
    />
  );
}

