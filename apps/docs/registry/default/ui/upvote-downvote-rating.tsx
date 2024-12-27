import { cn } from "@/lib/utils";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import * as React from "react";

interface UpvoteDownvoteRatingProps {
  className?: string;
  initialUpvotes?: number;
  initialDownvotes?: number;
  upvotes?: number;
  downvotes?: number;
  upvoted?: boolean;
  downvoted?: boolean;
  upvoteColor?: string;
  downvoteColor?: string;
  readOnly?: boolean;
  abbreviation?: boolean;
  abbreviationLetter?: string;
  useLocalString?: boolean;
  defaultUpvoted?: boolean;
  defaultDownvoted?: boolean;
  upvotePoints?: number;
  downvotePoints?: number;
  onUpvoteChange?: (upvoted: boolean) => void;
  onDownvoteChange?: (downvoted: boolean) => void;
  onVotesChange?: (upvotes: number, downvotes: number) => void;
}

const UpvoteDownvoteRating: React.FC<UpvoteDownvoteRatingProps> = ({
  className,
  initialUpvotes = 1500,
  initialDownvotes = 0,
  upvotes,
  downvotes,
  upvoted,
  downvoted,
  upvoteColor = "#009e42",
  downvoteColor = "#a60021",
  readOnly = false,
  abbreviation = false,
  abbreviationLetter = "K",
  useLocalString = true,
  defaultUpvoted = false,
  defaultDownvoted = false,
  upvotePoints = 1,
  downvotePoints = 1,
  onUpvoteChange,
  onDownvoteChange,
  onVotesChange,
}) => {
  const [internalUpvoted, setInternalUpvoted] = React.useState(defaultUpvoted);
  const [internalDownvoted, setInternalDownvoted] =
    React.useState(defaultDownvoted);
  const [internalUpvotes, setInternalUpvotes] = React.useState(
    Math.round(initialUpvotes),
  );
  const [internalDownvotes, setInternalDownvotes] = React.useState(
    Math.round(initialDownvotes),
  );

  const isControlled =
    upvotes !== undefined &&
    downvotes !== undefined &&
    upvoted !== undefined &&
    downvoted !== undefined;

  const currentUpvotes = isControlled ? upvotes : internalUpvotes;
  const currentDownvotes = isControlled ? downvotes : internalDownvotes;
  const currentUpvoted = isControlled ? upvoted : internalUpvoted;
  const currentDownvoted = isControlled ? downvoted : internalDownvoted;

  const handleUpvote = () => {
    if (!readOnly) {
      if (currentUpvoted) {
        if (isControlled) {
          onUpvoteChange?.(false);
          onVotesChange?.(currentUpvotes - upvotePoints, currentDownvotes);
        } else {
          setInternalUpvoted(false);
          setInternalUpvotes((prev) => prev - upvotePoints);
        }
      } else {
        if (isControlled) {
          onUpvoteChange?.(true);
          onVotesChange?.(currentUpvotes + upvotePoints, currentDownvotes);
          if (currentDownvoted) {
            onDownvoteChange?.(false);
            onVotesChange?.(
              currentUpvotes + upvotePoints,
              currentDownvotes - downvotePoints,
            );
          }
        } else {
          setInternalUpvoted(true);
          setInternalUpvotes((prev) => prev + upvotePoints);
          if (currentDownvoted) {
            setInternalDownvoted(false);
            setInternalDownvotes((prev) => prev - downvotePoints);
          }
        }
      }
    }
  };

  const handleDownvote = () => {
    if (!readOnly) {
      if (currentDownvoted) {
        if (isControlled) {
          onDownvoteChange?.(false);
          onVotesChange?.(currentUpvotes, currentDownvotes - downvotePoints);
        } else {
          setInternalDownvoted(false);
          setInternalDownvotes((prev) => prev - downvotePoints);
        }
      } else {
        if (isControlled) {
          onDownvoteChange?.(true);
          onVotesChange?.(currentUpvotes, currentDownvotes + downvotePoints);
          if (currentUpvoted) {
            onUpvoteChange?.(false);
            onVotesChange?.(
              currentUpvotes - upvotePoints,
              currentDownvotes + downvotePoints,
            );
          }
        } else {
          setInternalDownvoted(true);
          setInternalDownvotes((prev) => prev + downvotePoints);
          if (currentUpvoted) {
            setInternalUpvoted(false);
            setInternalUpvotes((prev) => prev - upvotePoints);
          }
        }
      }
    }
  };

  const formatNumber = (number: number) => {
    if (abbreviation && number >= 1000) {
      return (number / 1000).toFixed(1) + abbreviationLetter;
    }
    return useLocalString ? number.toLocaleString() : number;
  };

  const totalVotes = formatNumber(currentUpvotes - currentDownvotes);

  return (
    <div
      className={cn(
        "flex flex-row gap-0 items-middle justify-between rounded-full border",
        className,
      )}
      style={{
        backgroundColor: currentUpvoted
          ? upvoteColor
          : currentDownvoted
            ? downvoteColor
            : "transparent",
      }}
    >
      <div
        className={`rounded-full p-1 ${
          currentUpvoted && !readOnly
            ? "hover:bg-zinc-800/30 "
            : "hover:bg-zinc-800/30"
        } ${readOnly ? "cursor-auto" : "cursor-pointer"}`}
        onClick={handleUpvote}
      >
        <ArrowBigUp
          size={24}
          color="white"
          fill={currentUpvoted ? "white" : "transparent"}
        />
      </div>

      <div className="p-1 min-w-8 text-center">
        <span>{totalVotes}</span>
      </div>
      <div
        className={`rounded-full p-1 ${
          currentDownvoted && !readOnly
            ? "hover:bg-zinc-800/30"
            : "hover:bg-zinc-800/30"
        } ${readOnly ? "cursor-auto" : "cursor-pointer"}
        `}
        onClick={handleDownvote}
      >
        <ArrowBigDown
          size={24}
          color="white"
          fill={currentDownvoted ? "white" : "transparent"}
        />
      </div>
    </div>
  );
};

export { UpvoteDownvoteRating };
