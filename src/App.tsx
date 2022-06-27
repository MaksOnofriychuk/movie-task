import React from "react";
import { Route, Routes } from "react-router-dom";
import Film from "./pages/FIlm/FIlm";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="film:id" element={<Film />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
