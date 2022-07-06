import {FC, useEffect} from "react";
import {Box} from "@mui/material";
import {TFilmList} from "../../../store/reducers/fIlmSlice/types";
import HomeCard from "../../Home/components/HomeCard/HomeCard";
import * as React from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {getFilms} from "../../../store/actions/Film";
import styles from './Popular.module.scss'
import {incrementPage} from "../../../store/reducers/fIlmSlice/filmSlice";
import ButtonLoadMore from "../../../components/ButtonLoadMore/ButtonLoadMore";
import {CircularStatic} from "../../../components/FirstScreen/components/CirclePercent/CirclePercent";
import LinearDeterminate from "../../../components/Loader/Loader";
import {useObserver} from "../../../hooks/useObserver";

const Popular: FC = () => {
  const [loadButton, setLoadButton] = React.useState(true);
  const lastElement = React.useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const {filmList, loading, error, page} = useAppSelector(
    (state) => state.filmReducer
  );

  useObserver(lastElement, loading, !loadButton, () => {dispatch(incrementPage())})

  React.useEffect(() => {
    dispatch(getFilms(page));
  }, [dispatch, page]);

  const loadMore = () => {
    dispatch(incrementPage())
    setLoadButton(false)
  }

  return (
    <section className={styles.popularSection}>
      <h1 className={styles.popularTitle}>Popular Movies</h1>

      <div className={styles.contentWrapper}>
        <div className={styles.searchWrapper}/>

        <div className={styles.filmWrapper}>
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
                  <Box className={styles.filmCard} key={film.id}>
                    <HomeCard
                      posterPath={film.posterPath}
                      originalTitle={film.originalTitle}
                      releaseDate={film.releaseDate}
                      id={film.id}
                    />
                    <div className={styles.filmCard__static}>
                      <CircularStatic valuePercent={Math.round(film.voteAverage * 10)}/>
                    </div>
                  </Box>
                );
              })}
          </Box>

          <div ref={lastElement} />
          {loadButton && <ButtonLoadMore title="Load More" func={loadMore}/>}
        </div>
      </div>
    </section>
  )
}

export default Popular;