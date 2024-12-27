"use client";

import { cn } from "@/lib/utils";
import {
  AngryIcon,
  FrownIcon,
  LaughIcon,
  MehIcon,
  SmileIcon,
} from "lucide-react";
import * as React from "react";

interface TintVariantColor {
  color: string;
  intensity: number;
}

// You can replace this function with your own color logic or a color manipulation library
function getTintVariantColor({ color, intensity }: TintVariantColor): string {
  // Convert hex color to RGB
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate new RGB values based on intensity
  const newR = Math.round(r + (255 - r) * intensity);
  const newG = Math.round(g + (255 - g) * intensity);
  const newB = Math.round(b + (255 - b) * intensity);

  // Convert RGB back to hex
  const newHex = `#${((1 << 24) + (newR << 16) + (newG << 8) + newB)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;

  return newHex;
}

interface FaceRatingProps {
  /** Called when rating changes */
  onRatingChange?: (rating: number) => void;
  /** Color from which to generate other colors */
  baseColor?: string;
  className?: string;
  colors?: {
    angry?: string;
    frown?: string;
    meh?: string;
    smile?: string;
    laugh?: string;
  };
  iconSize?: number;
  id?: string;
  /** The maximum rating. Can be any number */
  maxRating?: number;
  size?: number;
  /** The value of the rating. Use with controlled component*/
  rating?: number;
  defaultRating?: number;
  /** Determins whether the value can be changed */
  readOnly?: boolean;
}

const FaceRating = ({
  baseColor,
  colors = {},
  className,
  iconSize = 24,
  id,
  maxRating = 5,
  onRatingChange,
  rating,
  defaultRating = 0,
  readOnly = false,
}: FaceRatingProps) => {
  const [internalRating, setInternalRating] = React.useState(defaultRating);

  const isControlled = rating !== undefined;
  const currentRating = isControlled ? rating : internalRating;

  const defaultColors = {
    angry: "red",
    frown: "orange",
    meh: "yellow",
    smile: "lightgreen",
    laugh: "green",
  };

  const computedColors = baseColor
    ? {
        angry: getTintVariantColor({ color: baseColor, intensity: 0.8 }),
        frown: getTintVariantColor({ color: baseColor, intensity: 0.6 }),
        meh: getTintVariantColor({ color: baseColor, intensity: 0.4 }),
        smile: getTintVariantColor({ color: baseColor, intensity: 0.2 }),
        laugh: baseColor,
      }
    : defaultColors;

  const mergedColors = { ...computedColors, ...colors };

  const handleIconClick = (index: number) => {
    if (!readOnly) {
      const newRating = (index + 1) * (maxRating / 5);
      if (!isControlled) {
        setInternalRating(newRating);
      }
      onRatingChange?.(newRating);
    }
  };

  const filledIcons = Math.round((currentRating / maxRating) * 5);

  const icons = [
    <AngryIcon
      key="angry"
      size={iconSize}
      color={filledIcons >= 1 ? mergedColors.angry : "gray"}
      onClick={() => handleIconClick(0)}
      className={`transition-transform duration-200 ${readOnly ? "" : "hover:scale-110"}`}
      style={{ cursor: readOnly ? "auto" : "pointer" }}
    />,
    <FrownIcon
      key="frown"
      size={iconSize}
      color={filledIcons >= 2 ? mergedColors.frown : "gray"}
      onClick={() => handleIconClick(1)}
      className={`transition-transform duration-200 ${readOnly ? "" : "hover:scale-110"}`}
      style={{ cursor: readOnly ? "auto" : "pointer" }}
    />,
    <MehIcon
      key="meh"
      size={iconSize}
      color={filledIcons >= 3 ? mergedColors.meh : "gray"}
      onClick={() => handleIconClick(2)}
      className={`transition-transform duration-200 ${readOnly ? "" : "hover:scale-110"}`}
      style={{ cursor: readOnly ? "auto" : "pointer" }}
    />,
    <SmileIcon
      key="smile"
      size={iconSize}
      color={filledIcons >= 4 ? mergedColors.smile : "gray"}
      onClick={() => handleIconClick(3)}
      className={`transition-transform duration-200 ${readOnly ? "" : "hover:scale-110"}`}
      style={{ cursor: readOnly ? "auto" : "pointer" }}
    />,
    <LaughIcon
      key="laugh"
      size={iconSize}
      color={filledIcons >= 5 ? mergedColors.laugh : "gray"}
      onClick={() => handleIconClick(4)}
      className={`transition-transform duration-200 ${readOnly ? "" : "hover:scale-110"}`}
      style={{ cursor: readOnly ? "auto" : "pointer" }}
    />,
  ];

  return (
    <div className={cn("flex items-center gap-x-0.5", className)}>
      {icons}
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {currentRating.toFixed(2)}
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        out of
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {maxRating}
      </p>
    </div>
  );
};

export { FaceRating };
