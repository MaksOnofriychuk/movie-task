import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAppSelector } from "../../hooks/redux";
import { TRecommendations } from "../../store/reducers/fIlmSlice/types";
import RecommendationCard from "./components/RecommendationCard";

const Recommendations = () => {
  const { recommendations } = useAppSelector((state) => state.filmReducer);

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
                  <RecommendationCard
                    key={recommendation.id}
                    recommendation={recommendation}
                    index={index}
                  />
                );
              })
            : "...Loading"}
        </Box>
      </Box>
    </>
  );
};
export default Recommendations;
