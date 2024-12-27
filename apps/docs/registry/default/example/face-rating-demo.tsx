"use client";

import * as React from "react";
import { FaceRating } from "../ui/face-rating";

export default function FaceRatingDemo() {
  return <FaceRating defaultRating={3} maxRating={5} iconSize={24} />;
}
