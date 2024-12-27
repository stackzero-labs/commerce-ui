"use client";

import * as React from "react";
import { Rating } from "@/registry/default/ui/rating";

export default function RatingDemo() {
  return <Rating rating={4.5} maxRating={10} />;
}
