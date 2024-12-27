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

export default function VariantSelectorDemo() {
  const handleSelect = (value: string) => {
    console.log("Selected variant:", value);
  };
  return (
    <>
      <VariantSelector className="space-y-4">
        <VariantGroupLegend>Choose size:</VariantGroupLegend>
        <VariantSelectorGroup
          className="grid grid-cols-7 gap-2"
          defaultValue="variant-m"
          onValueChange={handleSelect}
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
    </>
  );
}
