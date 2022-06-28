import * as React from "react";
import { Box } from "@mui/material";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useParams } from "react-router-dom";
import { getFilmById } from "../../store/actions/Film";
import { Container } from "@mui/system";
import FilmStatistic from "../../components/FilmStatistic/FIlmStatistic";
import FilmCrew from "../../components/FilmCrew/filmCrew";

const Film = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { film } = useAppSelector((state) => state.filmReducer);

  React.useEffect(() => {
    if (id) {
      dispatch(getFilmById(Number(id)));
    }
  }, [dispatch, id]);

  return (
    <>
      <Box className="film__wrapper">{film && <FirstScreen />}</Box>
      <Box sx={{ mt: 3 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", width: "100%" }}>
            <FilmCrew />
            <FilmStatistic />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Film;
