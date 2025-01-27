import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Shelf() {
  return (
    <Card sx={{ display: "flex", width: "100%", margin: 0.5 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title of Shelf
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Description and Tags
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        sx={{ width: 140, height: 140 }}
        image="https://static01.nyt.com/images/2024/06/30/books/books-flat-slide-21TH/books-flat-slide-21TH-articleLarge.png"
        title="green iguana"
      />
      <CardMedia
        sx={{ width: 140, height: 140 }}
        image="https://static01.nyt.com/images/2024/06/30/books/books-flat-slide-21TH/books-flat-slide-21TH-articleLarge.png"
        title="green iguana"
      />
      <CardMedia
        sx={{ width: 140, height: 140 }}
        image="https://static01.nyt.com/images/2024/06/30/books/books-flat-slide-21TH/books-flat-slide-21TH-articleLarge.png"
        title="green iguana"
      />
      <CardMedia
        sx={{ width: 140, height: 140 }}
        image="https://static01.nyt.com/images/2024/06/30/books/books-flat-slide-21TH/books-flat-slide-21TH-articleLarge.png"
        title="green iguana"
      />
      <CardMedia
        sx={{ width: 140, height: 140 }}
        image="https://static01.nyt.com/images/2024/06/30/books/books-flat-slide-21TH/books-flat-slide-21TH-articleLarge.png"
        title="green iguana"
      />
    </Card>
  );
}
