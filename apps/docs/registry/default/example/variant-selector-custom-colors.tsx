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
import Image from "next/image";

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
  return (
    <div className="flex flex-col gap-6  justify-start">
      <VariantSelector className="w-fit">
        <VariantGroupLegend>Choose size:</VariantGroupLegend>
        <VariantSelectorGroup
          className="grid grid-cols-7 gap-2"
          defaultValue="variant-m"
        >
          {variants.map((variant) => (
            <VariantSelectorLabel
              key={variant.id}
              className="has-[[data-state=checked]]:border-lime-300 has-[[data-state=checked]]:bg-lime-300/30 "
            >
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
    </div>
  );
}
