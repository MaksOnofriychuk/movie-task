import * as React from "react";
import { Box } from "@mui/material";
import FirstScreen from "../../components/FirstScreen/FirstScreen";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useParams } from "react-router-dom";
import { getFilmById } from "../../store/actions/Film";

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
      <Box>{film && <FirstScreen />}</Box>
    </>
  );
};

export default Film;
