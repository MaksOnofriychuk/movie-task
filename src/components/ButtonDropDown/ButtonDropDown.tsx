import { Button, Menu, MenuItem } from "@mui/material";
import * as React from "react";

type TProps = {
  children?: React.ReactNode;
  selectValue: string[];
};

export const ButtonDropDown: React.FC<TProps> = ({ children, selectValue }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{ color: "#fff" }}
        onMouseEnter={handleClick}
        onMouseLeave={handleClose}
      >
        {children}
      </Button>
      <Menu
        id="basic-menu"
        sx={{
          pointerEvents: "none",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {selectValue &&
          selectValue.map((item: string, index) => {
            return (
              <MenuItem key={`${index}${item}`} onClick={handleClose}>
                {item}
              </MenuItem>
            );
          })}
      </Menu>
    </div>
  );
};
