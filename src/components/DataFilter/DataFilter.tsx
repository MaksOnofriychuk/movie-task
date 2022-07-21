import {Box} from "@mui/material";
import MaterialUIPicker from "../DataPicker/DataPicker";
import {useAppSelector} from "../../hooks/redux";

const DataFilter = () => {
  const {params} = useAppSelector(
    (state) => state.filmReducer
  );

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
        from
        <MaterialUIPicker dataType='from' minData={minFilmDate} maxData={new Date(params.dateTo)}/>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '15px',
        justifyContent: 'space-between'
      }}>
        to
        <MaterialUIPicker defaultValue='2023-01-19T21:00:00' dataType='to' minData={new Date(params.dateFrom)} maxData={maxFilmDate}/>
      </Box>
    </Box>
  )
};

export default DataFilter;