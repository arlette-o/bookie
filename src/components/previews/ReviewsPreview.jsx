import * as React from "react";
import Box from "@mui/material/Box";

import RatingCard from "../RatingCard";

export default function RatingPreview() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <RatingCard />
      <RatingCard />
      <RatingCard />
      <RatingCard />
    </Box>
  );
}
