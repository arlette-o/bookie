import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { socialMedia } from "../static/constants/socialMedia.jsx";

export default function Footer() {
  const openWebPage = (url) => {
    window.open(url);
  };
  return (
    <Box sx={{ background: "#60463b" }}>
      <Stack
        direction={{ md: "row", xs: "column" }}
        justifyContent={{ xs: "center" }}
      >
        <Stack
          direction="row"
          spacing={3}
          ml={{ xl: "10vw", xs: "2vw" }}
          width={{ md: "45%" }}
          m={{ md: 6 }}
        >
          <Box sx={{ width: { xl: "20%", lg: "20%", xs: "150%" } }}>
            <br />
            <img
              className="image"
              src="/images/olalde_square.jpg"
              alt="Arlette Profile Pic"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <Box alignContent={"center"} width={{ md: "45%" }}>
            <Typography color="white" sx={{ fontSize: "1 rem" }}>
              This app depends on the generosity and functionality of
              OpenLibrary Internet Archive APIs. Please check them out!
              Supporting their site means supporting Bookie!
              <a href="https://openlibrary.org/">https://openlibrary.org/</a>
            </Typography>
          </Box>
        </Stack>
        {/* Socials here */}

        <Stack
          direction={"column"}
          spacing={2}
          alignItems="center" // Centers items horizontally
          m={6}
        >
          {" "}
          {socialMedia.map((web, _) => (
            <Box width={{ md: "100%", xs: "35%" }} key={web.name}>
              <Button
                fullWidth
                variant="contained"
                startIcon={web.logo}
                sx={{ background: "#f9f2dc", color: "#60463b" }}
                onClick={() => openWebPage(web.url)}
              >
                {web.name}
              </Button>
            </Box>
          ))}
        </Stack>
      </Stack>
      <Typography color="white" textAlign="center">
        Designed and created by Arlette Olalde
      </Typography>
    </Box>
  );
}
