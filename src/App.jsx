import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import UnderConstruction from "./pages/UnderConstruction";
import Home from "./pages/Home";
import Marinas from "./pages/Marinas";
import MarinaDetail from "./pages/MarinaDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Ana sayfa */}
          <Route path="/" element={<Home />} />

          {/* Gerçek site */}
          <Route path="/home" element={<Home />} />
          <Route path="/marinas" element={<Marinas />} />
          <Route path="/marinas/:id" element={<MarinaDetail />} />
        </Route>

        {/* Layout dışında sayfa istersen */}
        <Route path="/under-construction" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  );
}
