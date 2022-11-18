import {Box} from "@mui/material";
import MaterialUIPicker from "../DataPicker/DataPicker";
import {useAppSelector} from "../../hooks/redux";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useEffect, useState} from "react";

const DataFilter = () => {
  const [defaultDateFrom, setDefaultDateFrom] = useState<Date | string>('');
  const [defaultDateTo, setDefaultDateTo] = useState<Date | string>('');

  const {moviesType, params} = useAppSelector(
    (state) => state.filmReducer
  );

  useEffect(() => {
    if (moviesType === 'Popular' || moviesType === 'Top Rated') {
      const dateTo = new Date();
      dateTo.setMonth(dateTo.getMonth() + 6);

      setDefaultDateFrom('');
      setDefaultDateTo(dateTo);
    }
    else if (moviesType === 'Now Playing'){
      const dateFrom = new Date();
      dateFrom.setDate(dateFrom.getDate() - 6);
      if(dateFrom.getDate() + 6 < 6){
        dateFrom.setMonth(dateFrom.getMonth() - 2);
      } else dateFrom.setMonth(dateFrom.getMonth() - 1);

      const dateTo = new Date();
      dateTo.setDate(dateTo.getDate() + 6);
      if(dateTo.getDate() + 6 < 6){
        dateTo.setMonth(dateTo.getMonth() + 1);
      }

      setDefaultDateFrom(dateFrom);
      setDefaultDateTo(dateTo);
    }
    else if (moviesType === 'Upcoming'){
      const dateFrom = new Date();
      dateFrom.setDate(dateFrom.getDate() + 6);
      if(dateFrom.getDate() + 6 < 6){
        dateFrom.setMonth(dateFrom.getMonth() + 1);
      }

      const dateTo = new Date();
      dateTo.setDate(dateTo.getDate() + 27);
      if(dateTo.getDate() + 27 < 27){
        dateTo.setMonth(dateTo.getMonth() + 1);
      }

      setDefaultDateFrom(dateFrom);
      setDefaultDateTo(dateTo);
    }
  }, [moviesType])

  const maxFilmDate = new Date('2099-11-18T21:00:00')
  const minFilmDate = new Date('1874-12-09T21:00:00')

  return (
    <Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '15px',
        justifyContent: 'space-between'
      }}
      >
        <Typography>from</Typography>
        <MaterialUIPicker
          defaultValue={defaultDateFrom}
          dataType='from'
          minData={minFilmDate}
          maxData={new Date(params.dateTo)}
        />
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '15px',
        justifyContent: 'space-between'
      }}>
        <Typography>to</Typography>
        <MaterialUIPicker
          defaultValue={defaultDateTo}
          dataType='to'
          minData={params.dateFrom ? new Date(params.dateFrom) : minFilmDate}
          maxData={maxFilmDate}
        />
      </Box>
    </Box>
  )
};

export default DataFilter;