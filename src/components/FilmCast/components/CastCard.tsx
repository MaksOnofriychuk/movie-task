import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import * as React from "react";

interface ICastCardProps {
  profilePath: string;
  name: string;
  character: string;
}

const CastCard: React.FC<ICastCardProps> = ({
  profilePath,
  name,
  character,
}) => {
  return (
    <Card
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
          image={`${profilePath}`}
          alt="green iguana"
        />
        <Typography sx={{ fontWeight: "bold", mb: 1, ml: 1 }} variant="caption" component="div">
          {name}
        </Typography>
        <Typography sx={{ ml: 1, maxWidth: "110px" }} variant="caption" component="div">
          {character}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default CastCard;
