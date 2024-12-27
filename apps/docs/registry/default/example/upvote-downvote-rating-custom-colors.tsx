"use client";

import * as React from "react";
import { UpvoteDownvoteRating } from "@/registry/default/ui/upvote-downvote-rating";

export default function UpvoteDownvoteRatingCustomColorDemo() {
  return (
    <div className="flex flex-col gap-2">
      <UpvoteDownvoteRating upvoteColor="#ec3300" downvoteColor="#6735f0" />
      <UpvoteDownvoteRating
        upvoteColor="#ec3300"
        downvoteColor="#6735f0"
        initialUpvotes={10}
        defaultUpvoted
      />
      <UpvoteDownvoteRating
        upvoteColor="#ec3300"
        downvoteColor="#6735f0"
        initialUpvotes={-4}
        defaultDownvoted
      />
    </div>
  );
}
