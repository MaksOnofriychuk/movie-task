import * as React from "react";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import LogoFooter from "../../assets/img/footer-logo.svg";
import FooterInfo from "./FooterInfo";
import "./footer.scss";

const Footer = () => {
  return (
    <React.Fragment>
      <AppBar className="footer__app-bar">
        <Container className="footer__container">
          <Box className="footer__left-wrapper">
            <img className="footer__logo" src={LogoFooter} alt="footer-log" />
            <Button
              sx={{ color: "#519BEF" }}
              className="footer__button"
              variant="contained"
              size="large"
            >
              JOIN THE COMMUNITY
            </Button>
          </Box>
          <Box className="footer__right-wrapper">
            <FooterInfo />
          </Box>
        </Container>
        <Toolbar className="footer__tool-bar"></Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Footer;
