"use client";

import * as React from "react";
import { StarRating } from "@/registry/default/ui/star-rating";

export default function RatingCustomColors() {
  return (
    <div className="flex flex-col gap-4">
      <StarRating
        id="rating-custom-colors"
        defaultRating={3.5}
        maxRating={6}
        fullColor="#b806f8"
        strokeFullColor="#b806f8"
      />
      <StarRating
        id="rating-custom-colors-2"
        defaultRating={3.5}
        maxRating={6}
        fullColor="#b806f8"
        strokeFullColor="#b806f8"
        emptyColor="#31005a"
        strokeEmptyColor="#8b06f8"
      />
      <StarRating
        id="rating-custom-colors-3"
        defaultRating={3.5}
        maxRating={6}
        fullColor="#06f86b"
        strokeFullColor="#06f86b"
        emptyColor="#005841"
        strokeEmptyColor="#003527"
      />
    </div>
  );
}
