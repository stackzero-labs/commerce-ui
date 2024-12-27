"use client";

import * as React from "react";
import { UpvoteDownvoteRating } from "@/registry/default/ui/upvote-downvote-rating";

export default function UpvoteDownvoteRatingAbbreviation() {
  return (
    <div className="flex flex-col gap-2">
      <UpvoteDownvoteRating initialUpvotes={1500} abbreviation />
      <UpvoteDownvoteRating initialUpvotes={35500} abbreviation />
    </div>
  );
}
