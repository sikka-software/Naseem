import { Label } from "@/components/ui/label";
import { Input } from "@/components/naseem-ui/elements/multilang-input";
import { useEffect } from "react";
import { toast } from "sonner";

const MultiLangInputDemo = () => {
  useEffect(() => {
    console.log("MultiLangInputDemo");
    toast.success("Hello");
  }, []);
  return (
    <div>
      <Label>Multi Language Input</Label>
      <Input
        onChange={() => {}}
        locales={[
          {
            code: "en",
            label: "English",
          },
          {
            code: "ar",
            label: "Arabic",
          },
        ]}
        texts={{
          placeholder: "Search country",
          no_country_found: "No country found",
          search_country: "Search country",
        }}
      />
    </div>
  );
};

export default MultiLangInputDemo;
