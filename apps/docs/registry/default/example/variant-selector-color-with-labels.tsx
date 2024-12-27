"use client";

import * as React from "react";
import {
  VariantSelectorColor,
  VariantSelectorLabel,
  VariantGroupLegend,
  VariantSelectorGroup,
  VariantSelectorItem,
  VariantItem,
} from "@/registry/default/ui/variant-selector-color";

const variants: VariantItem[] = [
  { value: "LightCoral", color: "rgb(205, 92, 92)", label: "LightCoral" },
  { value: "Coral", color: "rgb(255, 127, 80)", label: "Coral" },
  { value: "Khaki", color: "rgb(240, 230, 140)", label: "Khaki" },
  { value: "MediumOrchid", color: "rgb(186, 85, 211)", label: "MediumOrchid" },
  {
    value: "SlateBlue",
    color: "rgb(106, 90, 205)",
    label: "SlateBlue",
  },
];
export default function VariantSelectorColorWithLabels() {
  const handleSelect = (value: string) => {
    console.log("Selected variant:", value);
  };
  return (
    <>
      <VariantSelectorColor className="space-y-4">
        <VariantGroupLegend>Choose color:</VariantGroupLegend>
        <VariantSelectorGroup
          className="grid grid-cols-1 gap-2"
          defaultValue="Coral"
          onValueChange={handleSelect}
        >
          {variants.map((variant) => (
            <VariantSelectorLabel key={variant.value}>
              <VariantSelectorItem
                id={variant.value}
                value={variant.value}
                color={variant.color}
                disabled={variant.disabled}
              />
              <p className="text-sm font-medium leading-none">
                {variant.label}
              </p>
            </VariantSelectorLabel>
          ))}
        </VariantSelectorGroup>
      </VariantSelectorColor>
    </>
  );
}
