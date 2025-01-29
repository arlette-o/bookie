import React from "react";
import { useState, useEffect } from "react";

import Stack from "@mui/material/Stack";
import BookInfo from "./BookInfo.jsx";

import books from "../static/json/top5.json";

export default function TopFive() {
  const [topFive, setTopFive] = useState(books);

  useEffect(() => {
    getBookCover();
  }, []);

  //for thing in top 5,
  //  fetch oclc
  //  use oclc to get the cover URL
  //  replace the url in the top5 json for usage

  const getBookCover = async () => {
    const url1 = "https://covers.openlibrary.org/b/id/";
    const url2 = "-M.jpg";

    const newFive = await Promise.all(
      topFive.map(async (book) => {
        const queryTitle = book.title.toLowerCase().replace(/ /g, "+");

        const bookOCLC = await fetchOCLC(queryTitle);
        book.image = url1 + bookOCLC + url2;

        return book;
      })
    );

    setTopFive(newFive);
  };

  const fetchOCLC = async (booktitle) => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${booktitle}&lang=eng`
      );

      const data = await response.json();

      //this api call is fine
      //console.log(data);
      return data?.docs[0]?.cover_i;
    } catch (error) {
      console.log(error.message);
      return "000000";
    }
  };

  return (
    <Stack direction="row" spacing={2}>
      {topFive.map((book, index) => {
        return <BookInfo book={book} rank={index + 1} />;
      })}
    </Stack>
  );
}
