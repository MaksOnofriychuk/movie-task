import * as React from "react";
import {Button} from "@mui/material";
import {COLOR} from "../../ColorTheme/Theme";
import {TPropsDropDown} from "../../ComponentTypes/types";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {Link} from "react-router-dom";

export const DropDown: React.FC<TPropsDropDown> = ({children, selectValue,}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="lock-button"
        aria-haspopup="listbox"
        aria-controls="lock-menu"
        aria-label="when device is locked"
        aria-expanded={open ? "true" : undefined}
        sx={{color: COLOR.white, fontSize: "12px"}}
        onClick={handleClickListItem}
      >
        {children}
      </Button>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {selectValue.map((value, index) => (
          <Link
            key={`${value}-${index}`}
            to={`/${value.path}`}
            style={{color: 'black', textDecoration: 'none'}}
          >
            <MenuItem
              sx={{fontSize: "14px", minWidth: "200px"}}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {value.title}
            </MenuItem>
          </Link>

        ))}
      </Menu>
    </div>
  );
};
