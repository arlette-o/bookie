import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function RatingCard() {
  const value = 3.5;
  return (
    <Card sx={{ display: "flex", maxWidth: 345 }}>
      <CardMedia
        sx={{ width: 140, height: 140 }}
        image="https://static01.nyt.com/images/2024/06/30/books/books-flat-slide-21TH/books-flat-slide-21TH-articleLarge.png"
        title="green iguana"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lord of the Rings
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            I thought this book was pretty incredible
          </Typography>
          <Rating
            name="text-feedback"
            value={value}
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
