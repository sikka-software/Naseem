"use client";

import { useState } from "react";
import { ColorPicker } from "../naseem-ui/elements/color-picker";

const ColorPickerDemo = () => {
  const [color, setColor] = useState("#3b82f6");

  return (
    <div className="flex flex-col gap-6">
      <ColorPicker
        label="Pick a color"
        color={color}
        handleChange={(e) => setColor(e.target.value)}
      />

      <ColorPicker
        label="Preview mode"
        color="#10b981"
        preview
      />

      <ColorPicker
        label="Loading state"
        color="#ef4444"
        isLoading
      />
    </div>
  );
};

export default ColorPickerDemo;
