import * as React from "react";
import { Link } from "react-router-dom";
import { DropDown } from "../DropDown/DropDown";
import { menuItems, typographyText } from "./data";
import { THeaderHideOnScrollProps } from "./types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Logo from "../../assets/img/logo.svg";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Popup from "../Popup/Popup";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Form from "../Form/Form";
import "./header.scss";
import { theme } from "../../ColorTheme/Theme";

function HideOnScroll(props: THeaderHideOnScrollProps) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar sx={{ background: theme.palette.primary.main }}>
          <Toolbar>
            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              maxWidth="xl"
            >
              <Box className="header__left-wrapper">
                <Link to="/">
                  <img className="logo__img" src={Logo} alt="logo" />
                </Link>
                {menuItems &&
                  menuItems.map((item) => {
                    return (
                      <DropDown key={item.id} selectValue={item.selectValue}>
                        {item.title}
                      </DropDown>
                    );
                  })}
              </Box>

              <Box className="header__right-wrapper">
                <Popup>
                  <AddIcon fontSize="large" sx={{ fontWeight: "700" }} />
                </Popup>
                {typographyText &&
                  typographyText.map((item) => {
                    return (
                      <Typography
                        key={item.id}
                        className={item.text === "EN" ? "hover__btn" : ""}
                        variant={item.text === "EN" ? "subtitle1" : "overline"}
                        component="span"
                      >
                        {item.text}
                      </Typography>
                    );
                  })}
                <Typography
                  onClick={handleOpen}
                  sx={{ fontSize: 14, mb: "3px", cursor: "pointer" }}
                >
                  Form
                </Typography>
                <Form handleClose={handleClose} open={open} />

                <SearchIcon
                  className="header__search-icon"
                  color="info"
                  fontSize="large"
                />
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;
