"use client";

import { Label } from "@/components/ui/label";
import { CurrencyInput } from "@/components/naseem-ui/elements/currency-input";

const CurrencyInputDemo = () => {
  return (
    <div className="w-full max-w-[400px] space-y-4">
      <div>
        <Label>Currency Input</Label>
        <CurrencyInput className="w-full" value={1234.56} />
      </div>
    </div>
  );
};

export default CurrencyInputDemo;
