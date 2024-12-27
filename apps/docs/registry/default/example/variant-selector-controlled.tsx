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
  { id: "variant-xxs", value: "variant-xxs", label: "XXS" },
  { id: "variant-xs", value: "variant-xs", label: "XS" },
  { id: "variant-s", value: "variant-s", label: "S" },
  { id: "variant-m", value: "variant-m", label: "M" },
  { id: "variant-l", value: "variant-l", label: "L" },
  { id: "variant-xl", value: "variant-xl", label: "XL" },
  { id: "variant-xxl", value: "variant-xxl", label: "XXL" },
];

export default function VariantSelectorControlled() {
  const [selectedVariant, setSelectedVariant] =
    React.useState<string>("variant-m");
  const handleSelect = (value: string) => {
    setSelectedVariant(value);
  };
  return (
    <div className="space-y-4">
      <VariantSelector className="space-y-4">
        <VariantGroupLegend>Choose size:</VariantGroupLegend>
        <VariantSelectorGroup
          className="grid grid-cols-7 gap-2"
          onValueChange={handleSelect}
          value={selectedVariant}
        >
          {variants.map((variant) => (
            <VariantSelectorLabel key={variant.id}>
              <VariantSelectorItem
                id={variant.id}
                value={variant.value}
                disabled={variant.disabled}
              />
              <p className="text-sm font-medium leading-none text-foreground">
                {variant.label}
              </p>
            </VariantSelectorLabel>
          ))}
        </VariantSelectorGroup>
      </VariantSelector>

      <div>
        <p className="text-sm font-medium leading-none text-muted-foreground ">
          Selected variant: <span className="font-mono">{selectedVariant}</span>
        </p>
      </div>
    </div>
  );
}
