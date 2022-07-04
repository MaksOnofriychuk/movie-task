import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import userCommentPhoto1 from "../../../../assets/img/user-comment-img1.jpeg";

interface TUserComment {
  text: string;
  status: string;
  count: number;
  date: string;
  nameBy: string;
}

const UserComment: React.FC<TUserComment> = ({
  text,
  status,
  count,
  date,
  nameBy,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "56px",
        border: 1,
        boxShadow: "0px 0px 5px #000",
        borderRadius: "6px",
        borderColor: "transparent",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "30px",
            height: "30px",
            ml: 2,
          }}
        >
          <img
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            src={userCommentPhoto1}
            alt="user"
          />
        </Box>
        <Typography
          variant="caption"
          sx={{ ml: 2, fontSize: "14px", minWidth: "600px" }}
        >
          {text}
        </Typography>
        <Typography sx={{ ml: 6, fontSize: "14px", color: "#696969" }}>
          {status}
        </Typography>
        <Typography
          variant="caption"
          sx={{ ml: 6, fontSize: "14px", color: "#696969" }}
        >
          {count}
        </Typography>
        <Box sx={{ ml: 12 }}>
          <Typography variant="caption" sx={{ color: "#696969" }}>
            {date}
          </Typography>
          <Typography
            variant="caption"
            sx={{ display: "flex", color: "#696969" }}
          >
            by
            <Typography
              variant="caption"
              sx={{ fontWeight: "700", ml: "4px", color: "#000" }}
            >
              {nameBy}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserComment;
