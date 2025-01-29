import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";

import TopFive from "../components/TopFive.jsx";
import ProfilePreview from "../components/previews/ProfilePreview.jsx";
import FollowingPreview from "../components/previews/FollowingPreview.jsx";
import BooklistPreview from "../components/previews/BooklistPreview.jsx";
import WishlistPreview from "../components/previews/WishlistPreview.jsx";
import RatingPreview from "../components/previews/ReviewsPreview.jsx";
import BookshelvesPreview from "../components/previews/BookshelvesPreview.jsx";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, background: "#DBD3D8", padding: "10px" }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <TopFive />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <ProfilePreview />
          <FollowingPreview />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <WishlistPreview />
          <Stack
            direction={{ md: "row", sm: "column" }}
            spacing={2}
            sx={{ background: "#F9F2DC" }}
          >
            <RatingPreview />
            <BookshelvesPreview />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <BooklistPreview />
        </Grid>
      </Grid>
    </Box>
  );
}
