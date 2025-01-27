import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function ReviewCard({ review }) {
  return (
    <Card sx={{ display: "flex", minWidth: 345, margin: 0.5 }}>
      <CardMedia
        sx={{ width: 140, height: 140 }}
        image="https://static01.nyt.com/images/2024/06/30/books/books-flat-slide-21TH/books-flat-slide-21TH-articleLarge.png"
        title="green iguana"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {review.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {review.review}
          </Typography>
          <Rating
            name="text-feedback"
            value={review.rating}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </CardContent>
      </Box>
    </Card>
  );
}
