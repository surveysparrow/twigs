import { useState } from "react";
import { Cascader, CascaderOption } from "@sparrowengg/twigs-react";
import { data } from "./test-data";

const recursiveFind = (
  data: CascaderOption[],
  value: { value: string; label?: string }
): CascaderOption | null => {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (item.value === value.value) {
      return item;
    }

    if (item.options) {
      const found = recursiveFind(item.options, value);
      if (found) {
        return found;
      }
    }
  }

  return null;
};

export default function CascaderDynamicData() {
  const [value, setValue] = useState({
    value: "india",
    label: "India",
  });

  const dataSet = JSON.parse(JSON.stringify(data));
  dataSet[0].options[1].options[1].options = [];
  dataSet[0].options[1].options[1].shouldFetchOptions = true;

  const [options, setOptions] = useState([
    ...dataSet,
    {
      label: "Sri Lanka",
      value: "sri-lanka",
      shouldFetchOptions: true,
    },
  ]);

  return (
    <Cascader
      data={options}
      label="Dynamic data"
      // select sri lanka / kerala to see the dynamic data
      fetchOptions={(val) => {
        return new Promise((resolve) => {
          if (val.value === "sri-lanka") {
            setTimeout(() => {
              const obj = recursiveFind(options, val);
              if (obj) {
                obj.options = [
                  {
                    label: "Colombo",
                    value: "colombo",
                  },
                  {
                    label: "Kandy",
                    value: "kandy",
                  },
                ];
              }
              setOptions([...options]);
              resolve(true);
            }, 2000);
          } else if (val.value === "kerala") {
            setTimeout(() => {
              const obj = recursiveFind(options, val);
              if (obj) {
                obj.options = data[0].options[1].options[1].options;
              }
              setOptions([...options]);
              resolve(true);
            }, 2000);
          }
        });
      }}
      value={value}
      onChange={(val) => setValue(val)}
    />
  );
}

