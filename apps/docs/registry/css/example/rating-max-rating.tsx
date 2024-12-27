"use client";

import * as React from "react";
import { Rating } from "@/registry/default/ui/rating";

export default function RatingMaxRating() {
  return (
    <div className="flex flex-col gap-4">
      <Rating rating={2} maxRating={3} />
      <Rating rating={6} maxRating={7} />
      <Rating rating={8.5} maxRating={10} />
    </div>
  );
}
