import * as React from "react";
import {FC} from "react";
import {Box, Typography} from "@mui/material";
import {TFilmList} from "../../../store/reducers/fIlmSlice/types";
import HomeCard from "../../Home/components/HomeCard/HomeCard";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {getFilms} from "../../../store/actions/Film";
import {chooseSortOption, clearFilmlist, incrementPage} from "../../../store/reducers/fIlmSlice/filmSlice";
import ButtonLoadMore from "../../../components/ButtonLoadMore/ButtonLoadMore";
import {CircularStatic} from "../../../components/FirstScreen/components/CirclePercent/CirclePercent";
import LinearDeterminate from "../../../components/Loader/Loader";
import {useObserver} from "../../../hooks/useObserver";
import SortBox from "../../../components/SortBox/SortBox";
import FilterBox from "../../../components/FilterBox/FilterBox";

const Popular: FC = () => {
  const [loadButton, setLoadButton] = React.useState(true);
  const lastElement = React.useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const {filmList, loading, error, sortOption, params} = useAppSelector(
    (state) => state.filmReducer
  );

  useObserver(lastElement, loading, !loadButton, () => {
    dispatch(incrementPage())
  })

  React.useEffect(() => {
    dispatch(getFilms(params));
  }, [dispatch, params.page]);

  const loadMore = () => {
    dispatch(incrementPage())
    setLoadButton(false)
  }

  const searchFilms = () => {
    dispatch(clearFilmlist());
    dispatch(getFilms(params));
    dispatch(chooseSortOption(false));
    setLoadButton(true)
  }

  React.useEffect(() => () => {
    dispatch(clearFilmlist())
  }, [])

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Typography
        variant="h1"
        sx={{
          width: '76%',
          fontSize: '30px',
          fontWeight: '600',
          padding: '20px 0'
        }}
      >
        Popular Movies
      </Typography>

      <Box sx={{
        width: '80%',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <Box sx={{width: '20%'}}>
          <SortBox/>
          <FilterBox/>
          <ButtonLoadMore
            title={"Search"}
            hoverBackgroundColor={"#032541"}
            borderRadius={"25px"}
            disabled={sortOption === false}
            onClick={searchFilms}
          />
        </Box>

        <Box sx={{
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {loading && <LinearDeterminate/>}
          {error && "Error"}
          <Box
            maxWidth="1150px"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {filmList &&
              filmList.map((film: TFilmList) => {
                return (
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'stretch',
                    position: 'relative',
                  }}
                       key={film.id}
                  >
                    <HomeCard
                      posterPath={film.posterPath}
                      originalTitle={film.originalTitle}
                      releaseDate={film.releaseDate}
                      id={film.id}
                    />
                    <Box sx={{
                      zIndex: '999',
                      position: 'absolute',
                      top: '275px',
                      left: '5%'
                    }}>
                      <CircularStatic valuePercent={Math.round(film.voteAverage * 10)}/>
                    </Box>
                  </Box>
                );
              })}
          </Box>

          <Box ref={lastElement}/>
          {loadButton && <ButtonLoadMore title="Load More" onClick={loadMore} hoverColor={"#000"}/>}
        </Box>
      </Box>
    </Box>
  )
}

export default Popular;