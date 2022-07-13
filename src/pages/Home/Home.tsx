import * as React from "react";
import {Box} from "@mui/material";
import {getFilms} from "../../store/actions/Film";
import {TFilmList} from "../../store/reducers/fIlmSlice/types";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {dataClipping} from "../../utils/helpersMovie";
import HomeCard from "./components/HomeCard/HomeCard";
import {clearFilmlist} from "../../store/reducers/fIlmSlice/filmSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const {filmList, loading, error, page, sortBy} = useAppSelector(
    (state) => state.filmReducer
  );

  React.useEffect(() => {
    dispatch(getFilms({page, sortBy}));
  }, [dispatch]);

  React.useEffect(() => () => {
    dispatch(clearFilmlist())
  }, [])

  const slicedFilms = dataClipping(filmList, 8);

  return (
    <>
      {loading && "Loading"}
      {error && "Error"}
      <Box
        maxWidth="1000px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          p: "100px 40px",
          m: "0px auto",
        }}
      >
        {filmList &&
          slicedFilms.map((film: TFilmList) => {
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
