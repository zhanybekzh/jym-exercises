import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack alignItems="center" gap="40px" px="40px" pt="24px">
        <Stack
          gap="40px"
          sx={{ alignItems: "center" }}
          flexWrap="wrap"
          px="40px"
          pt="24px"
        >
          <img
            src={Logo}
            alt="logo"
            style={{ width: "200px", height: "41px" }}
          />
        </Stack>
        <Typography
          variant="text"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mt="41px"
          textAlign="center"
          pb="40px"
        >
          Made with ❤️ by Zhanda{" "}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
