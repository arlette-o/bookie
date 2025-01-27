import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function WishlistPreview() {
  return (
    <Box sx={{ background: "#F9f2dc" }}>
      [Arlette's] Wishlist
      <ImageList sx={{ height: 180 }} cols={10} rowHeight={164}>
        {Array.from(Array(10)).map((index) => (
          <ImageListItem key={index} sx={{ width: "100px" }}>
            <img
              srcSet="https://static01.nyt.com/images/2024/06/30/books/books-flat-slide-21TH/books-flat-slide-21TH-articleLarge.png"
              src="https://static01.nyt.com/images/2024/06/30/books/books-flat-slide-21TH/books-flat-slide-21TH-articleLarge.png"
              alt="book"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
