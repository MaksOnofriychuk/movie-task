import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";

type TProps = {
  children?: React.ReactNode;
  selectValue: string[];
};

export const DropDown: React.FC<TProps> = ({ children, selectValue }) => {
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
        sx={{ color: "#fff", fontSize: "12px" }}
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
          <MenuItem
            sx={{ fontSize: "14px", minWidth: "200px" }}
            key={`${value}${index}`}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {value}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
