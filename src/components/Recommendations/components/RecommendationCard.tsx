import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { transformRating } from "../../../utils/helpersMovie";
import { TRecommendationCardProps } from "../../../ComponentTypes/types";
import HoverBlock from "./HoverBlock";

const RecommendationCard: React.FC<TRecommendationCardProps> = ({
  recommendation,
  index,
}) => {
  const [isHovering, setIsHovering] = React.useState<null | number>(null);

  const handleMouseOver = (index: number) => {
    setIsHovering(index);
  };

  const handleMouseOut = () => {
    setIsHovering(null);
  };

  const rate = transformRating(recommendation.voteAverage);
  return (
    <Box
      onMouseOver={() => handleMouseOver(index)}
      onMouseOut={handleMouseOut}
      key={recommendation.id}
      sx={{
        height: "240px",
        maxWidth: "300px",
        minWidth: "300px",
        mr: 2,
        position: "relative",
        zIndex: "1",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "80%",
          borderRadius: "12px",
          position: "relative",
          zIndex: "2",
          cursor: "pointer",
        }}
        src={recommendation.backdropPath}
        alt="recommendation"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          height: "10%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: "180px",
            minWidth: "180px",
            overflowX: "hidden",
            height: "100%",
            pl: "5px",
          }}
        >
          <Typography sx={{ fontSize: "14px" }} variant="caption">
            {recommendation.title}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "14px" }} variant="caption">
            {rate}%
          </Typography>
        </Box>
      </Box>
      {index === isHovering ? (
        <HoverBlock releaseDate={recommendation.releaseDate} />
      ) : (
        ""
      )}
    </Box>
  );
};
export default RecommendationCard;
