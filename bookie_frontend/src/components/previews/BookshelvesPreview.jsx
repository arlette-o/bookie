import * as React from "react";
import Box from "@mui/material/Box";

import Shelf from "../Shelf.jsx";

export default function BookshelvesPreview() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
    </Box>
  );
}
