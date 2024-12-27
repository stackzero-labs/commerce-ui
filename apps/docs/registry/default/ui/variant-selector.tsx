"use client";

//? https://medium.com/@mayankjain1784/building-a-dynamic-product-variation-system-in-react-with-typescript-d6683c99c24d

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

export interface VariantItem {
  id: string;
  value: string;
  label: string;
  disabled?: boolean;
}
const VariantSelector = React.forwardRef<
  HTMLFieldSetElement,
  React.HTMLAttributes<HTMLFieldSetElement>
>(({ className, ...props }, ref) => (
  <fieldset ref={ref} className={cn("space-y-4", className)} {...props} />
));
VariantSelector.displayName = "VariantSelector";

const VariantSelectorGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
VariantSelectorGroup.displayName = RadioGroupPrimitive.Root.displayName;

const VariantSelectorItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn("sr-only after:absolute after:inset-0", className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
VariantSelectorItem.displayName = RadioGroupPrimitive.Item.displayName;

const VariantSelectorLabel = React.forwardRef<
  HTMLLabelElement,
  React.HTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[[data-disabled]]:opacity-50 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70",
      className,
    )}
    {...props}
  />
));
VariantSelectorLabel.displayName = "VariantSelectorLabel";

const VariantGroupLegend = React.forwardRef<
  HTMLLegendElement,
  React.HTMLAttributes<HTMLLegendElement>
>(({ className, ...props }, ref) => (
  <legend
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none text-foreground",
      className,
    )}
    {...props}
  />
));
VariantGroupLegend.displayName = "VariantGroupLegend";

export {
  VariantSelector,
  VariantSelectorGroup,
  VariantSelectorItem,
  VariantSelectorLabel,
  VariantGroupLegend,
};

// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// const items = [
//   { id: "radio-13-r1", value: "r1", label: "2 CPU" },
//   { id: "radio-13-r2", value: "r2", label: "4 CPU" },
//   { id: "radio-13-r3", value: "r3", label: "6 CPU" },
//   { id: "radio-13-r4", value: "r4", label: "8 CPU" },
//   { id: "radio-13-r5", value: "r5", label: "12 CPU" },
//   { id: "radio-13-r6", value: "r6", label: "16 CPU", disabled: true },
// ];

// export default function RadioDemo() {
//   return (
//     <fieldset className="space-y-4">
//       <legend className="text-sm font-medium leading-none text-foreground">
//         CPU Cores
//       </legend>
//       <RadioGroup className="grid grid-cols-3 gap-2" defaultValue="r1">
//         {items.map((item) => (
//           <label
//             key={item.id}
//             className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[[data-disabled]]:opacity-50 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
//           >
//             <RadioGroupItem
//               id={item.id}
//               value={item.value}
//               className="sr-only after:absolute after:inset-0"
//               disabled={item.disabled}
//             />
//             <p className="text-sm font-medium leading-none text-foreground">
//               {item.label}
//             </p>
//           </label>
//         ))}
//       </RadioGroup>
//     </fieldset>
//   );
// }
