import * as React from "react";
import { Box } from "@mui/material";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import {
  getCasts,
  getFilmById,
  getImagesAndVideos,
  getKeywords,
  getRecommendations,
  getReviews,
} from "../../store/actions/Film";
import FilmStatistic from "../../components/FilmStatistic/FIlmStatistic";
import FilmCast from "../../components/FilmCast/filmCast";
import Social from "../../components/Social/Social";
import Media from "../../components/Media/Media";
import Collection from "../../components/Collection/Collection";
import Recommendations from "../../components/Recommendations/Recommendations";
import Grade from "../../components/Grade/Grade";

const Film = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { film } = useAppSelector((state) => state.filmReducer);

  React.useEffect(() => {
    if (id) {
      dispatch(getFilmById(Number(id)));
      dispatch(getCasts(Number(id)));
      dispatch(getKeywords(Number(id)));
      dispatch(getReviews(Number(id)));
      dispatch(getImagesAndVideos(Number(id)));
      dispatch(getRecommendations(Number(id)));
    }
  }, [dispatch, id]);

  return (
    <>
      {film && (
        <>
          <Box sx={{ mb: 3 }}>
            <FirstScreen />
          </Box>
          <Box>
            <Container maxWidth="xl">
              <Box sx={{ display: "flex", width: "100%" }}>
                <Box
                  sx={{
                    width: "78%",
                  }}
                >
                  <FilmCast />
                  <Social />
                  <Media />
                  <Collection />
                  <Recommendations />
                </Box>

                <Box sx={{ width: "25%" }}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "600px",
                      borderBottom: 1,
                      mb: 5,
                    }}
                  >
                    <FilmStatistic />
                  </Box>

                  <Grade />
                </Box>
              </Box>
            </Container>
          </Box>
        </>
      )}
    </>
  );
};

export default Film;
//
