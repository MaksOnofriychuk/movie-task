import * as React from "react";
import { Box } from "@mui/material";
import HomeCard from "./HomeCard/HomeCard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getFilms } from "../../store/actions/Film";
import { TFilmList } from "../../store/reducers/fIlmSlice/types";
import "./home.scss";

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
      <Box className="home__wrapper">
        {filmList &&
          filmList.map((film: TFilmList) => {
            return <HomeCard key={film.id} {...film} />;
          })}
      </Box>
    </>
  );
};

export default Home;
