"use client";

import * as React from "react";
import {
  VariantSelector,
  VariantSelectorLabel,
  VariantGroupLegend,
  VariantSelectorGroup,
  VariantSelectorItem,
  VariantItem,
} from "@/registry/default/ui/variant-selector";

const variants: VariantItem[] = [
  { id: "LightCoral", value: "rgb(205, 92, 92)", label: "LightCoral" },
  { id: "Coral", value: "rgb(255, 127, 80)", label: "Coral" },
  { id: "Khaki", value: "rgb(240, 230, 140)", label: "Khaki" },
  { id: "MediumOrchid", value: "rgb(186, 85, 211)", label: "MediumOrchid" },
  { id: "SlateBlue", value: "rgb(106, 90, 205)", label: "SlateBlue" },
];

export default function VariantSelectorColors() {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-fit">
        <VariantSelector className="space-y-4">
          <VariantGroupLegend>Choose color:</VariantGroupLegend>
          <VariantSelectorGroup
            className="grid grid-cols-7 gap-2"
            defaultValue="variant-m"
          >
            {variants.map((variant) => (
              <VariantSelectorLabel
                key={variant.id}
                className="p-3 rounded-full"
                style={{
                  backgroundColor: variant.value,
                }}
              >
                <VariantSelectorItem
                  id={variant.id}
                  value={variant.value}
                  disabled={variant.disabled}
                />
              </VariantSelectorLabel>
            ))}
          </VariantSelectorGroup>
        </VariantSelector>
      </div>
    </div>
  );
}
