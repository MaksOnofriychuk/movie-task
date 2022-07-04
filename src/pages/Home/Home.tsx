import * as React from "react";
import { Box } from "@mui/material";
import HomeCard from "./components/HomeCard/HomeCard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getFilms } from "../../store/actions/Film";
import { TFilmList } from "../../store/reducers/fIlmSlice/types";

const Home = () => {
  const dispatch = useAppDispatch();
  const { filmList, loading, error } = useAppSelector(
    (state) => state.filmReducer
  );

  React.useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  return (
    <>
      {loading && "Loading"}
      {error && "Error"}
      <Box
        maxWidth="1000px"
        sx={{
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          p: "100px 40px",
          m: "0px auto",
        }}
      >
        {filmList &&
          filmList.map((film: TFilmList) => {
            return (
              <HomeCard
                key={film.id}
                posterPath={film.posterPath}
                originalTitle={film.originalTitle}
                releaseDate={film.releaseDate}
                id={film.id}
              />
            );
          })}
      </Box>
    </>
  );
};

export default Home;
