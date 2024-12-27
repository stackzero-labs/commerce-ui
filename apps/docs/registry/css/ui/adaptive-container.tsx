"use client";

import {
  AnimationControls,
  TargetAndTransition,
  Transition,
} from "motion/react";
import * as React from "react";
// import useMeasure from "react-use-measure"

const AdaptiveContainer = ({
  children,
  animate,
  transition,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  animate?: AnimationControls | TargetAndTransition;
  transition?: Transition;
}) => {
  // const [ref, { width, height }] = useMeasure()

  return <div>{children}</div>;
};

export { AdaptiveContainer };
