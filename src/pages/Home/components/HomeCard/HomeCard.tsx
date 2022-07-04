import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface IHomeCardProps {
  posterPath: string;
  originalTitle: string;
  releaseDate: string;
  id: number;
}

export const HomeCard: React.FC<IHomeCardProps> = ({
  posterPath,
  originalTitle,
  releaseDate,
  id,
}) => {
  const navigate = useNavigate();

  const toFilmPage = () => {
    navigate(`film${id}`);
  };

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
        <Typography gutterBottom variant="h5" component="div">
          {originalTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
