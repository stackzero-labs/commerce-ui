"use client";

import * as React from "react";
import {
  VariantSelector,
  VariantSelectorLabel,
  VariantGroupLegend,
  VariantSelectorGroup,
  VariantSelectorItem,
} from "@/registry/default/ui/variant-selector";
import Image from "next/image";

interface VariantItem {
  id: string;
  value: string;
  label: string;
  url: string;
  disabled?: boolean;
}
const variants: VariantItem[] = [
  {
    id: "cat-default",
    value: "cat-default",
    label: "Default Cat",
    url: "/placeholders/cat-default.webp",
  },
  {
    id: "cat-steampunk",
    value: "cat-steampunk",
    label: "Steampunk Cat",
    url: "/placeholders/cat-steampunk.webp",
  },
  {
    id: "cat-cyberpunk",
    value: "cat-cyberpunk",
    label: "Cyberpunk Cat",
    url: "/placeholders/cat-cyberpunk.webp",
  },
];

export default function VariantSelectorImages() {
  return (
    <div className="flex flex-col gap-6  justify-start">
      <VariantSelector className="w-fit">
        <VariantGroupLegend>Choose your cat variant:</VariantGroupLegend>
        <VariantSelectorGroup
          className="grid grid-cols-3 gap-2"
          defaultValue="cat-default"
        >
          {variants.map((variant) => (
            <VariantSelectorLabel key={variant.id}>
              <VariantSelectorItem
                id={variant.id}
                value={variant.value}
                disabled={variant.disabled}
              />
              <Image
                alt={variant.label}
                src={variant.url}
                width={150}
                height={150}
              />
              <p className="text-xs text-muted-foreground">{variant.label}</p>
            </VariantSelectorLabel>
          ))}
        </VariantSelectorGroup>
      </VariantSelector>
    </div>
  );
}
