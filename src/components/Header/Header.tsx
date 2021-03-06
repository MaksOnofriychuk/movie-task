import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DropDown } from "../DropDown/DropDown";
import { menuItems, typographyText } from "./data";
import { COLOR } from "../../ColorTheme/Theme";
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
import "./header.scss";

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
  const navigate = useNavigate();

  const toFormPage = () => {
    navigate("/form");
  };

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar sx={{ background: COLOR.main }}>
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
                  menuItems.map((item, index: number) => {
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
                  onClick={toFormPage}
                  sx={{ fontSize: 14, mb: "3px", cursor: "pointer" }}
                >
                  Form
                </Typography>
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
