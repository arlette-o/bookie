import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";

import TopFive from "../components/TopFive";
import ProfilePreview from "../components/previews/ProfilePreview";
import FollowingPreview from "../components/previews/FollowingPreview";
import BooklistPreview from "../components/previews/BooklistPreview";
import WishlistPreview from "../components/previews/WishlistPreview";
import RatingPreview from "../components/previews/ReviewsPreview";
import BookshelvesPreview from "../components/previews/BookshelvesPreview";

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
