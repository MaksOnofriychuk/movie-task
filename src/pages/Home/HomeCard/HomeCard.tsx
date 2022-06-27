import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "./homeCard.scss";

interface IHomeCardProps {
  poster_path: string;
  original_title: string;
  release_date: string;
  id: number;
}

export const HomeCard: React.FC<IHomeCardProps> = ({
  poster_path,
  original_title,
  release_date,
  id,
}) => {
  const navigate = useNavigate();

  const toFilmPage = () => {
    navigate(`film${id}`);
  };

  return (
    <Card
      className="card__wrapper"
      sx={{
        maxWidth: 200,
        maxHeight: "600px",
        marginRight: "50px",
        marginBottom: "40px",
      }}
    >
      <CardMedia
        onClick={toFilmPage}
        className="card__image"
        component="img"
        alt="green iguana"
        height="300"
        image={`${process.env.React_App_Image_Base_Path}${poster_path}`}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {original_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(release_date).toDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
