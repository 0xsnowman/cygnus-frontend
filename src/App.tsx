import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./ui/pages/home";
import Pool from "./ui/pages/pool";
import Portfolio from "./ui/pages/portfolio";

// header && footer
import Header from "./ui/organisms/header";

// styles
import "./styles/index.scss";
import { Footer } from "./ui/organisms";
import Stake from "./ui/pages/stake";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/:poolId" element={<Pool />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
