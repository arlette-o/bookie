import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "", width: 20 },
  {
    field: "title",
    headerName: "Title",
    width: 200,
  },
  {
    field: "author",
    headerName: "Author",
    width: 200,
  },
  {
    field: "rating",
    headerName: "Rating",
    type: "number",
    width: 110,
    renderCell: (params) => (
      <Rating value={params.value} readOnly size="small" />
    ),
  },
];

const rows = [
  {
    id: 1,
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    rating: 5,
  },
  { id: 2, title: "The Two Towers", author: "J.R.R. Tolkien", rating: 5 },
  {
    id: 3,
    title: "The Return of the King",
    author: "J.R.R. Tolkien",
    rating: 5,
  },
  { id: 4, title: "Project Hail Mary", author: "Andy Weir", rating: 5 },
  {
    id: 5,
    title: "The Will of the Many",
    author: "James Islington",
    rating: 4,
  },
  { id: 6, title: "The Fifth Season", author: "N. K. Jemison", rating: 5 },
  { id: 7, title: "Circe", author: "Madeline Miller", rating: 2 },
  { id: 8, title: "Farenheit 451", author: "Ray Bradbury", rating: 3 },
  { id: 9, title: "Piranesi", author: "Susanna Clark", rating: 3 },
];

export default function BooklistPreview() {
  const getRowClassName = (params) => {
    return params.rowIndex % 2 === 0 ? "even-row" : "odd-row";
  };

  return (
    <Box sx={{ width: "100%" }}>
      Books Read
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[20]}
        disableRowSelectionOnClick
        getRowClassName={getRowClassName}
        sx={{
          "& .even-row": {
            backgroundColor: "#f5f5f5", // Light gray for even rows
          },
          "& .odd-row": {
            backgroundColor: "#ffffff", // White for odd rows
          },
        }}
      />
    </Box>
  );
}
