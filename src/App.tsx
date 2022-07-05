import React from "react";
import { Route, Routes } from "react-router-dom";
import Film from "./pages/FIlm/FIlm";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/system";

function App() {
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
          <Route path="/" element={<Home />} />
          <Route path="film:id" element={<Film />} />
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
