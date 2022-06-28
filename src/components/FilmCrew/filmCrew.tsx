import * as React from "react";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

const FilmCrew = () => {
  return (
    <Box
      className="left"
      sx={{
        width: "78%",
        height: "600px",
      }}
    >
      <Box sx={{ ml: 2.5 }}>
        <Typography variant="h6">Top Billed Cast</Typography>
      </Box>
      <Box
        sx={{
          p: 2,
          display: "flex",
          width: "1000px",
          overflow: "scroll",
          position: "relative",
        }}
      >
        {[
          { id: 1, value: 1 },
          { id: 2, value: 1 },
          { id: 3, value: 1 },
          { id: 4, value: 1 },
          { id: 5, value: 1 },
          { id: 6, value: 1 },
          { id: 7, value: 1 },
        ].map((_) => {
          return (
            <Card
              key={_.id}
              sx={{
                minWidth: 130,
                maxWidth: 130,
                height: 300,
                borderRadius: "6px",
                mr: 3,
                boxShadow: "0px 4px 12px 2px #ccc",
              }}
            >
              <CardActionArea>
                <CardMedia
                  sx={{ width: "130px", mb: 1 }}
                  component="img"
                  height="156"
                  image="https://www.themoviedb.org/t/p/original/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg"
                  alt="green iguana"
                />
                <Typography
                  sx={{ fontWeight: "bold", mb: 1, ml: 1 }}
                  variant="caption"
                  component="div"
                >
                  Benedict Cumberbatch
                </Typography>
                <Typography sx={{ ml: 1 }} variant="caption" component="div">
                  Dr. Stephen
                  <br /> Strange / Sinister Strange / Defender Strange
                </Typography>
              </CardActionArea>
            </Card>
          );
        })}

        <Box
          sx={{
            minWidth: 130,
            maxWidth: 130,
            height: 300,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              position: "relative",
              cursor: "pointer",
            }}
            variant="caption"
          >
            View More
            <ArrowRightAlt
              sx={{
                fontSize: 26,
                position: "absolute",
                top: "3px",
                right: "-30px",
                cursor: "pointer",
              }}
            />
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 2, ml: 2.5, pb: 5, borderBottom: 1, width: "96%" }}>
        <Typography variant="h6">Top Billed Cast</Typography>
      </Box>
    </Box>
  );
};

export default FilmCrew;
