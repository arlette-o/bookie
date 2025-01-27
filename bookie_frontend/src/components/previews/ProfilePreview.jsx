import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ProfilePreview() {
  return (
    <Card sx={{ display: "flex", background: "#F9f2dc" }}>
      <CardMedia
        component="img"
        sx={{ width: 151, borderRadius: "50%" }}
        image="https://images.ctfassets.net/o78em1y1w4i4/LHN0F94cNFCx1drEcfcsY/984e632abf38018f2a6ab22c4b61fdc6/teaser-book-with-heart-pages.jpg?fm=webp&w=1160&q=75"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Arlette Olalde
          </Typography>
          Current Book: The Obelisk Gate by N.K. Jemison
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            I like to read read read apples and bananas
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            Favorite Genres: Fantasy, Fiction, Horror
          </Typography>
        </CardContent>
        {/* causes hydration Error*/}
        {/* <CardActionArea>
          <Button variant="contained" sx={{ background: "#60463B" }}>
            Follow
          </Button>
        </CardActionArea> */}
      </Box>
    </Card>
  );
}
