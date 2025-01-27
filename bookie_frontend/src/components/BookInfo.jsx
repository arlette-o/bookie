import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function BookInfo({ book, rank }) {
  return (
    <Card sx={{ width: "30vw", background: "#F9F2DC" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 1,
        }}
      >
        <CardMedia
          sx={{ width: "5vw", height: "15vh" }}
          image={book.image}
          title={book.title}
        />
      </Box>
      <Divider />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
        >
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
