import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import Film from "./pages/FIlm/FIlm";
import Home from "./pages/Home/Home";
import Popular from "./pages/Movies/Popular/Popular";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import KeywordsMovies from "./pages/KeywordsMovies/KeywordsMovies";

const App = () => {
  return (
    <Box>
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
          <Route path="/" element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="/film:id" element={<Film />} />
          <Route path="/keyword:id" element={<KeywordsMovies />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
