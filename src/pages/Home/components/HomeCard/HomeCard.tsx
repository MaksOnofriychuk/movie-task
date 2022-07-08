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
    navigate(`../film${id}`, { replace: true });
  };

  const releaseTime = getDateHomeCard(releaseDate);

  return (
    <Card
      sx={{
        width: '180px',
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
        <Typography gutterBottom variant="h6" component="div" sx={{fontSize: '15px'}}>
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
