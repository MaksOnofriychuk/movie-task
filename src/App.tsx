import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import Film from "./pages/FIlm/FIlm";
import Home from "./pages/Home/Home";
import Popular from "./pages/Movies/Popular/Popular";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App: FC = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="film:id" element={<Film/>}/>
        <Route path="popular" element={<Popular/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;