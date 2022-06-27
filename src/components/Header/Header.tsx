import * as React from "react";
import { Link } from "react-router-dom";
import { ButtonDropDown } from "../ButtonDropDown/ButtonDropDown";
import { menuItems, typographyText } from "./data";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Logo from "../../assets/img/logo.svg";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ButtonPopup from "../ButtonPopup/ButtonPopup";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import "./header.scss";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
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
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar sx={{ background: "#203445" }}>
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
                      <ButtonDropDown
                        key={item.id}
                        selectValue={item.selectValue}
                      >
                        {item.title}
                      </ButtonDropDown>
                    );
                  })}
              </Box>

              <Box className="header__right-wrapper">
                <ButtonPopup>
                  <AddIcon fontSize="large" sx={{ fontWeight: "700" }} />
                </ButtonPopup>
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
