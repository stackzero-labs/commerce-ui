"use client";

import * as React from "react";
import { StarRating } from "@/registry/default/ui/star-rating";

export default function StarRatingDemo() {
  const [rating, setRating] = React.useState(4.5);

  return (
    <StarRating
      // rating={rating}
      maxRating={5}
      // onRatingChange={(rating) => setRating(rating)}
      defaultRating={4.5}
    />
  );
}
