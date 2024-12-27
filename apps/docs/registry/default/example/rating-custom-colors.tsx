"use client";

import * as React from "react";
import { Rating } from "@/registry/default/ui/rating";

export default function RatingCustomColors() {
  return (
    <div className="flex flex-col gap-4">
      <Rating
        id="rating-custom-colors"
        rating={3.5}
        maxRating={6}
        fullColor="#b806f8"
        strokeFullColor="#b806f8"
      />
      <Rating
        id="rating-custom-colors-2"
        rating={3.5}
        maxRating={6}
        fullColor="#b806f8"
        strokeFullColor="#b806f8"
        emptyColor="#31005a"
        strokeEmptyColor="#8b06f8"
      />
      <Rating
        id="rating-custom-colors-3"
        rating={3.5}
        maxRating={6}
        fullColor="#06f86b"
        strokeFullColor="#06f86b"
        emptyColor="#005841"
        strokeEmptyColor="#003527"
      />
    </div>
  );
}
