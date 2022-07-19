import * as React from "react";
import {Box, FormControlLabel} from "@mui/material";
import {useAppDispatch} from "../../hooks/redux";
import {chooseSortOption, setWithWatchFilter} from "../../store/reducers/fIlmSlice/filmSlice";
import {checkBoxOptions} from "./data";
import {TCheckBoxOptions} from "../../ComponentTypes/types";
import {CustomCheckbox} from "./style";

const CheckBoxFilter = () => {
  const [checkBoxItems, setCheckBoxItems] = React.useState(checkBoxOptions);
  const [checkedAll, setCheckedAll] = React.useState(true);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setWithWatchFilter(checkBoxItems));
    dispatch(chooseSortOption(true))
  }, [checkBoxItems])

  const changeAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newCheckBoxOptions = checkBoxItems.map(el => {
        return {...el, checked: false}
      })
      setCheckBoxItems(newCheckBoxOptions);
      setCheckedAll(true);
    } else {
      const newCheckBoxOptions = checkBoxItems.map(el => {
        return {...el, checked: true}
      })
      setCheckBoxItems(newCheckBoxOptions);
      setCheckedAll(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, item: TCheckBoxOptions) => {
    if (event.target.checked) {
      const newCheckBoxOptions = checkBoxItems.map(el => el.id === item.id ? {...el, checked: true} : el);
      setCheckBoxItems(newCheckBoxOptions);
    } else {
      const newCheckBoxOptions = checkBoxItems.map(el => el.id === item.id ? {...el, checked: false} : el);
      setCheckBoxItems(newCheckBoxOptions);
    }
  };

  const children = (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      {
        checkBoxItems.map(item => {
          return (
            <FormControlLabel
              key={item.id}
              label={item.title}
              value={item.withWatchFilter}
              control={
                <CustomCheckbox
                  checked={item.checked}
                  onChange={(event) => handleChange(event, item)}
                />
              }
            />
          )
        })
      }
    </Box>
  );

  return (
    <Box>
      <FormControlLabel
        label="Search all availabilities?"
        checked={checkedAll}
        control={
          <CustomCheckbox
            onChange={changeAll}
          />
        }
      />
      {!checkedAll && children}
    </Box>
  );
}

export default CheckBoxFilter
