import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import Film from "./pages/FIlm/FIlm";
import Home from "./pages/Home/Home";
import Popular from "./pages/Movies/Popular/Popular";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/system";
import {ROUTES} from "./utils/Routes";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.FILM} element={<Film />} />
          <Route path={ROUTES.POPULAR} element={<Popular />}/>
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}

export default App;