import * as React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import GradeCard from "./components/GradeCard";

const Grade = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box>
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: "500",
              fontSize: "18px",
            }}
          >
            Content Score
          </Typography>
          <Box
            sx={{
              border: 1,
              width: "100%",
              borderRadius: "8px",
              background: "#000",
              mb: "4px",
              pt: "2px",
            }}
          >
            <Typography sx={{ m: 1, color: "#fff", fontWeight: "600" }}>
              100
            </Typography>
          </Box>
          <Typography variant="caption">Yes! Looking good!</Typography>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography sx={{ fontSize: "16px", mb: 1 }} variant="h6">
            Top Contributors
          </Typography>
          <Box>
            {[1, 2, 3, 4].map((_, index) => {
              return <GradeCard key={`${_}${index}`} />;
            })}
          </Box>
          <Typography
            variant="caption"
            sx={{ fontSize: "16px", fontWeight: "300" }}
          >
            View Edit History
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: "700" }}>
            Popularity Trend
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button
            sx={{
              border: 1,
              background: "#000",
              color: "#fff",
              width: "130px",
              borderRadius: "14px",
            }}
          >
            EDIT PAGE
          </Button>
          <Box
            sx={{
              mt: 4,
              display: "flex",
              alignItems: "center",
              mb: 2,
            }}
          >
            <KeyboardIcon sx={{ mr: 1 }} />
            <Typography>Keyboard Shortcuts</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ReportGmailerrorredIcon sx={{ mr: 1 }} />
            <Typography>Report an Issue</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Grade;
