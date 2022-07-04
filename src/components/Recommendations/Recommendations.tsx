import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAppSelector } from "../../hooks/redux";
import { TRecommendations } from "../../store/reducers/fIlmSlice/types";
import HoverBlock from "./HoverBlock";

const Recommendations = () => {
  const { recommendations } = useAppSelector((state) => state.filmReducer);
  const [isHovering, setIsHovering] = React.useState<null | number>(null);

  const handleMouseOver = (index: number) => {
    setIsHovering(index);
  };

  const handleMouseOut = () => {
    setIsHovering(null);
  };

  if (!recommendations) {
    return (
      <Box>
        <Typography>...Loading</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="caption"
          sx={{ fontSize: "22px", fontWeight: "700" }}
        >
          Recommendations
        </Typography>
        <Box
          sx={{
            height: "240px",
            mt: 2,
            width: "98%",
            overflow: "scroll",
            display: "flex",
          }}
        >
          {recommendations
            ? recommendations.map((recommendation: TRecommendations, index) => {
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
                        <Typography
                          sx={{ fontSize: "14px" }}
                          variant="caption"
                          component="div"
                        >
                          {recommendation.title}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{ fontSize: "14px" }}
                          variant="caption"
                          component="div"
                        >
                          {Math.round(recommendation.voteAverage * 10)}%
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
              })
            : "...Loading"}
        </Box>
      </Box>
    </>
  );
};
export default Recommendations;
