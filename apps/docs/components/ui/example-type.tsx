import { Blocks, Component, Cuboid } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ExampleType({ type }: { type: "component" | "block" }) {
  let icon = null;
  let description = null;
  switch (type) {
    case "block":
      icon = <Blocks size={24} />;
      description = (
        <p className="p-0 m-0 text-sm font-normal whitespace-normal">
          A <span className="font-mono">block</span> is a group of one or more
          components that are used to build a section of a page. It encapsulates
          a specific functionality or a specific part of the UI.
        </p>
      );
      break;
    case "component":
      icon = <Cuboid size={24} />;
      description = (
        <p className="p-0 m-0 text-sm font-normal whitespace-normal">
          A <span className="font-mono">component</span> is a reusable piece of
          UI that can be used in a page. Components are the building pieces and
          can be used alone or combined with other components to create blocks
          or pages
        </p>
      );
      break;
    default:
      break;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="px-2 py-1 border rounded-2xl flex flex-row gap-2 items-center">
            {icon}
            <p className="p-0 m-0 text-xs font-mono capitalize">{type}</p>
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-[200px]">{description}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
