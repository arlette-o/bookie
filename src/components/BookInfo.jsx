import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function BookInfo({ book, rank }) {
  return (
    <Card sx={{ maxWidth: 200, background: "#F9F2DC" }}>
      <CardMedia sx={{ height: 120 }} image={book.image} title={book.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {rank}. {book.title}
        </Typography>
        <Typography variant="body" sx={{ color: "text.secondary" }}>
          {book.author}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          [QUICK DESCRIPTION]
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          [Genre]
        </Typography>
      </CardContent>
    </Card>
  );
}
