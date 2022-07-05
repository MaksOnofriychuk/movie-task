import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/redux";
import { TCasts } from "../../store/reducers/fIlmSlice/types";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import CastCard from "./components/CastCard";

const FilmCast = () => {
  const { casts } = useAppSelector((state) => state.filmReducer);

  const cutCasts = casts.slice(0, 7);

  const isLengthCheck = cutCasts.length > 6;

  const memoizedCastsCard = React.useMemo(() => {
    return cutCasts.map((actor: TCasts) => {
      return (
        <CastCard
          key={actor.id}
          profilePath={actor.profilePath}
          name={actor.name}
          character={actor.character}
        />
      );
    });
  }, [cutCasts]);

  return (
    <>
      <Typography ml={2.5} variant="h6">
        Top Billed Cast
      </Typography>
      <Box
        sx={{
          p: 2,
          display: "flex",
          width: "95%",
          overflow: "scroll",
          position: "relative",
        }}
      >
        {casts.length
          ? memoizedCastsCard
          : "We don't have any cast added to this movie. You can help by adding some!"}

        <Box
          sx={{
            minWidth: 130,
            maxWidth: 130,
            height: 300,
            display: "flex",
            alignItems: "center",
          }}
        >
          {isLengthCheck && (
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
          )}
        </Box>
      </Box>
      <Box sx={{ mt: 2, ml: 2.5, pb: 5, borderBottom: 1, width: "96%" }}>
        <Typography variant="h6">
          {!casts.length ? "Add Missing Cast & Crew" : "Full Cast & Crew"}
        </Typography>
      </Box>
    </>
  );
};

export default FilmCast;
