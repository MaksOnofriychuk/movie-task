import * as React from "react";
import { useNavigate } from "react-router-dom";
import { getDateHomeCard } from "../../../../utils/helpersMovie";
import { THomeCardProps } from "../../../../ComponentTypes/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const HomeCard: React.FC<THomeCardProps> = ({
  posterPath,
  originalTitle,
  releaseDate,
  id,
}) => {
  const navigate = useNavigate();

  const toFilmPage = () => {
    navigate(`film${id}`);
  };

  const releaseTime = getDateHomeCard(releaseDate);

  return (
    <Card
      sx={{
        maxWidth: 200,
        maxHeight: "600px",
        marginRight: "50px",
        marginBottom: "40px",
        position: "relative",
        zIndex: "10",
      }}
    >
      <CardMedia
        onClick={toFilmPage}
        sx={{ cursor: "pointer" }}
        className="card__image"
        component="img"
        alt="green iguana"
        height="300"
        image={`${posterPath}`}
      />

      <CardContent>
        <Typography gutterBottom variant="h5">
          {originalTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {releaseTime}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
