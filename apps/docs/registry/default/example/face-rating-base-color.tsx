"use client";

import * as React from "react";
import { FaceRating } from "../ui/face-rating";

export default function FaceRatingBaseColor() {
  //   const [rating, setRating] = React.useState(4);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <FaceRating
          defaultRating={5}
          maxRating={5}
          iconSize={24}
          baseColor="#00ffee"
        />
      </div>
      <div>
        <FaceRating
          defaultRating={5}
          maxRating={5}
          iconSize={24}
          baseColor="#0051ff"
        />
      </div>
      <div>
        <FaceRating
          defaultRating={5}
          maxRating={5}
          iconSize={24}
          baseColor="#8c00ff"
        />
      </div>
      <div>
        <FaceRating
          defaultRating={5}
          maxRating={5}
          iconSize={24}
          baseColor="#88ff00"
        />
      </div>

      <div>
        <FaceRating
          defaultRating={5}
          maxRating={5}
          iconSize={24}
          baseColor="#ff6a00"
        />
      </div>
    </div>
  );
}
