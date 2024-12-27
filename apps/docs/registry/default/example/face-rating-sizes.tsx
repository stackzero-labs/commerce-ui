"use client";

import * as React from "react";
import { FaceRating } from "../ui/face-rating";

export default function FaceRatingBaseColor() {
  //   const [rating, setRating] = React.useState(4);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <FaceRating defaultRating={5} maxRating={5} iconSize={48} />
      </div>
      <div>
        <FaceRating
          defaultRating={5}
          maxRating={5}
          iconSize={64}
          baseColor="#0051ff"
        />
      </div>
    </div>
  );
}
