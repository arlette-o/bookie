import * as React from "react";
import Box from "@mui/material/Box";

import ReviewCard from "../ReviewCard";

import reviews from "../../static/json/reviews.json";

export default function RatingPreview() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {reviews.map((review) => {
        return <ReviewCard review={review} />;
      })}
    </Box>
  );
}
