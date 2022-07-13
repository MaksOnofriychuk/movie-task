import { createTheme } from "@mui/material/styles";

type TPrimaryColor = {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
};

const PRIMARY: TPrimaryColor = {
  main: "#203445",
  dark: "#000",
  light: "#696969",
  contrastText: "#fff",
};

export const theme = createTheme({
  palette: {
    primary: PRIMARY,
  },
});
