"use client";

import { Label } from "@/components/ui/label";
import {
  MultilangInput,
  MultiLangValue,
} from "@/components/naseem-ui/elements/multilang-input";
import { useState } from "react";

const MultiLangInputDemo = () => {
  const [values, setValues] = useState<MultiLangValue>({
    en: "",
    ar: "",
  });

  const handleChange = (newValues: MultiLangValue) => {
    setValues(newValues);
    console.log("Current values:", newValues);
  };

  return (
    <div className="w-full max-w-[400px] space-y-4">
      <div>
        <Label>Multi Language Input</Label>
        <MultilangInput
          className="w-full"
          onChange={handleChange}
          value={values}
          locales={[
            {
              code: "en",
              name: "English",
            },
            {
              code: "ar",
              name: "Arabic",
            },
          ]}
          placeholder="Enter text in multiple languages"
        />
      </div>

      <div className="bg-muted rounded-lg p-4">
        <p className="mb-2 font-medium">Current Values:</p>
        <pre className="text-sm">{JSON.stringify(values, null, 2)}</pre>
      </div>
    </div>
  );
};

export default MultiLangInputDemo;
