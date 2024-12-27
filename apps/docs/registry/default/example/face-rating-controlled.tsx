"use client";

import * as React from "react";
import { FaceRating } from "../ui/face-rating";

export default function FaceRatingControlled() {
  const [rating, setRating] = React.useState(4);

  return (
    <FaceRating
      rating={rating}
      maxRating={5}
      onRatingChange={setRating}
      iconSize={24}
    />
  );
}
