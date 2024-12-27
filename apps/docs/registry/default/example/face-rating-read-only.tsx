"use client";

import * as React from "react";
import { FaceRating } from "../ui/face-rating";

export default function FaceRatingReadOnly() {
  return <FaceRating defaultRating={4} iconSize={24} readOnly />;
}
