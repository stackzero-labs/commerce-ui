"use client";

import * as React from "react";
import { UpvoteDownvoteRating } from "@/registry/default/ui/upvote-downvote-rating";

export default function UpvoteDownvoteRatingControlled() {
  const [upvotes, setUpvotes] = React.useState(150);
  const [downvotes, setDownvotes] = React.useState(10);
  const [upvoted, setUpvoted] = React.useState(false);
  const [downvoted, setDownvoted] = React.useState(false);

  return (
    <div className="flex flex-col gap-2">
      <UpvoteDownvoteRating
        upvotes={upvotes}
        downvotes={downvotes}
        upvoted={upvoted}
        downvoted={downvoted}
        onDownvoteChange={(downvoted) => setDownvoted(downvoted)}
        onUpvoteChange={(upvoted) => setUpvoted(upvoted)}
        onVotesChange={(newUpvotes, newDownvotes) => {
          setUpvotes(newUpvotes);
          setDownvotes(newDownvotes);
        }}
        upvotePoints={10}
        downvotePoints={10}
      />
      <div>
        <div>Upvotes: {upvotes}</div>
        <div>Downvotes: {downvotes}</div>
      </div>

      <UpvoteDownvoteRating
        defaultDownvoted
        initialDownvotes={10}
        initialUpvotes={100}
        upvotePoints={10}
        downvotePoints={10}
      />
    </div>
  );
}
