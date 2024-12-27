"use client";

import * as React from "react";

// import { Button } from "@/components/ui/button"
import { AdaptiveContainer } from "@/registry/default/ui/adaptive-container";

export default function AdaptiveContainerDemo() {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <AdaptiveContainer>
      An example
      <div>Another example</div>
    </AdaptiveContainer>
  );
}
