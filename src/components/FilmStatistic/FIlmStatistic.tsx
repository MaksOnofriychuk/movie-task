import * as React from "react";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HomeIcon from "@mui/icons-material/Home";
import SocialLink from "./components/SocialLink/SocialLink";

const FilmStatistic = () => {
  return (
    <Box
      className="right"
      sx={{ width: "25%", height: "600px", borderBottom: 1 }}
    >
      <Box
        sx={{
          display: "flex",
          maxWidth: "200px",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <SocialLink title="Visit Facebook">
          <FacebookIcon sx={{ fontSize: "32px", cursor: "pointer" }} />
        </SocialLink>
        <SocialLink title="Visit Twitter">
          <TwitterIcon sx={{ fontSize: "32px", cursor: "pointer" }} />
        </SocialLink>
        <SocialLink title="Visit Instagram">
          <InstagramIcon sx={{ fontSize: "32px", cursor: "pointer" }} />
        </SocialLink>
        <SocialLink title="Visit JustWatch">
          <PlayArrowIcon sx={{ fontSize: "32px", cursor: "pointer" }} />
        </SocialLink>
        <SocialLink title="Visit Homepage">
          <HomeIcon sx={{ fontSize: "32px", cursor: "pointer" }} />
        </SocialLink>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography>Status</Typography>
        <Typography>Released</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography>Original Language</Typography>
        <Typography>English</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography>Budget</Typography>
        <Typography>$200,000,000,000</Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography>Revenue</Typography>
        <Typography>$944,913,572.00</Typography>
      </Box>

      <Box>
        <Box sx={{ mb: 1 }}>
          <Typography>Keywords</Typography>
        </Box>
        <Box
          sx={{
            maxWidth: "200px",
            maxHeight: "400px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {[{ id: 1, text: "magic" }].map((item) => (
            <Typography
              key={item.id}
              sx={{
                border: 1,
                padding: "10px 10px",
                borderColor: "transparent",
                background: "grey",
                borderRadius: "4px",
                mr: 1,
                mb: 1,
                lineHeight: "0",
                color: "#fff",
                letterSpacing: "0",
                cursor: "pointer",
              }}
              variant="caption"
              component="span"
            >
              {item.text}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FilmStatistic;
