"use client";

import * as React from "react";
import { FaceRating } from "../ui/face-rating";

export default function FaceRatingCustomColors() {
  //   const [rating, setRating] = React.useState(4);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-xs text-muted-foreground pb-2">
          With 1 custom color
        </p>
        <FaceRating
          defaultRating={5}
          maxRating={5}
          iconSize={24}
          colors={{
            angry: "blue",
          }}
        />
      </div>
      <div>
        <p className="text-xs text-muted-foreground pb-2">
          With all custom colors
        </p>
        <FaceRating
          defaultRating={3}
          maxRating={5}
          iconSize={24}
          colors={{
            angry: "blue",
            frown: "green",
            meh: "yellow",
            smile: "orange",
            laugh: "red",
          }}
        />
      </div>
    </div>
  );
}
