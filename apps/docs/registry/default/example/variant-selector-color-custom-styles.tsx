"use client";

import * as React from "react";
import {
  VariantSelectorColor,
  VariantSelectorLabel,
  VariantGroupLegend,
  VariantSelectorGroup,
  VariantSelectorItem,
  VariantSelectorIndicator,
  VariantItem,
} from "@/registry/default/ui/variant-selector-color";
import { CheckCircleIcon, CheckIcon } from "lucide-react";

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
export default function VariantSelectorColorCustomStyles() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-row gap-6">
        <p className="font-muted-foreground text-xs font-mono">
          Custom radio size:
        </p>
      </div>
      <VariantSelectorColor className="space-y-4">
        <VariantGroupLegend>Choose color:</VariantGroupLegend>
        <VariantSelectorGroup
          className="grid grid-cols-6 gap-2"
          defaultValue="Coral"
        >
          {variants.map((variant) => (
            <VariantSelectorItem
              key={variant.value}
              value={variant.value}
              color={variant.color}
              disabled={variant.disabled}
              className="size-10"
            />
          ))}
        </VariantSelectorGroup>
      </VariantSelectorColor>

      <div className="flex flex-row gap-6">
        <p className="font-muted-foreground text-xs font-mono">
          Custom indicator:
        </p>
      </div>
      <VariantSelectorColor className="space-y-4">
        <VariantGroupLegend>Choose color:</VariantGroupLegend>
        <VariantSelectorGroup
          className="grid grid-cols-6 gap-2"
          defaultValue="Coral"
        >
          {variants.map((variant) => (
            <VariantSelectorItem
              key={variant.value}
              value={variant.value}
              color={variant.color}
              disabled={variant.disabled}
            >
              <VariantSelectorIndicator>
                <CheckIcon />
              </VariantSelectorIndicator>
            </VariantSelectorItem>
          ))}
        </VariantSelectorGroup>
      </VariantSelectorColor>
    </div>
  );
}
