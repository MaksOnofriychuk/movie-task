import * as React from "react";
import { COLOR } from "../../ColorTheme/Theme";
import { TPopupProps } from "../../ComponentTypes/types";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Popup: React.FC<TPopupProps> = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        size="small"
        sx={{ color: COLOR.white, borderColor: COLOR.white }}
        aria-describedby={id}
        variant="text"
        onClick={handleClick}
      >
        {children}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2, maxWidth: "200px" }}>
          Can't find a movie or TV <br />
          show? Login to create it.
        </Typography>
      </Popover>
    </div>
  );
};
export default Popup;
