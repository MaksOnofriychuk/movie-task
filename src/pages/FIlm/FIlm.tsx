import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useParams } from "react-router-dom";
import {
  getCasts,
  getFilmById,
  getImagesAndVideos,
  getKeywords,
  getRecommendations,
  getReviews,
} from "../../store/actions/Film";
import { Container } from "@mui/system";
import FilmStatistic from "../../components/FilmStatistic/FIlmStatistic";
import FilmCast from "../../components/FilmCast/filmCast";
import Social from "../../components/Social/Social";
import Media from "../../components/Media/Media";
import Collection from "../../components/Collection/Collection";
import Recommendations from "../../components/Recommendations/Recommendations";

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
          <Box sx={{ mb: 3 }} className="film__wrapper">
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

                  <Box
                    sx={{
                      width: "100%",
                      height: "600px",
                    }}
                  >
                    <Box sx={{ border: 1 }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography>Content Score</Typography>
                        <Box>
                          <Typography>100</Typography>
                        </Box>
                        <Typography>Yes! Looking good!</Typography>
                      </Box>

                      <Box>
                        <Typography>Top Contributors</Typography>
                        <Box>
                          {[1, 2, 3, 4].map((_) => {
                            return (
                              <Box>
                                <img src="s" alt="dwd" />
                                <Box>
                                  <Typography>412</Typography>
                                  <Typography>raze464</Typography>
                                </Box>
                              </Box>
                            );
                          })}
                        </Box>
                        <Typography>View Edit History</Typography>
                        <Typography>Popularity Trend</Typography>
                      </Box>
                      <Box>
                        <Button>EDIT PAGE</Button>
                        <Box>
                          <Typography>Keyboard Shortcuts</Typography>
                        </Box>
                        <Box>
                          <Typography>Report an Issue</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
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
